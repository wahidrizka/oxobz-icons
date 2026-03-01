/**
 * Script: Extract ALL Geist icons from inspect element HTML
 *
 * Parses _nextstatic/component-inspect-element/icons.html
 * Extracts each <svg data-testid="geist-icon"> and its icon name
 * Saves as individual SVG files in oxobz-icons/svg/
 *
 * Usage: npx tsx scripts/extract-icons.ts
 */

import { readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

const HTML_FILE = join(import.meta.dirname, '..', '..', '_nextstatic', 'component-inspect-element', 'icons.html');
const SVG_DIR = join(import.meta.dirname, '..', 'svg');

interface IconData {
    name: string;
    viewBox: string;
    width: string;
    height: string;
    strokeLinejoin: string;
    innerContent: string;
    style: string;
}

function extractIcons(html: string): IconData[] {
    const icons: IconData[] = [];

    // Pattern: each icon is wrapped in a <div> with a <span> containing the SVG and a <p title="icon-name">
    // We need to find pairs of: SVG element + p[title] element

    // Strategy: split by icon containers and extract SVG + name from each
    // Each icon block starts with: <div class="pointer-events-none md:pointer-events-auto">
    const iconBlocks = html.split(/(?=<div class="pointer-events-none md:pointer-events-auto">)/);

    for (const block of iconBlocks) {
        // Extract icon name from <p ... title="icon-name">
        const nameMatch = block.match(/title="([^"]+)"[^>]*>[^<]*<\/p>/);
        if (!nameMatch) continue;

        const iconName = nameMatch[1];

        // Extract the full SVG element, handling possible nested <svg> elements
        // We find the opening <svg data-testid="geist-icon"> and then track nesting depth
        const svgStartMatch = block.match(/<svg\s+data-testid="geist-icon"([^>]*)>/);
        if (!svgStartMatch) continue;

        const svgAttrs = svgStartMatch[1];
        const svgStartIdx = block.indexOf(svgStartMatch[0]);
        const contentStart = svgStartIdx + svgStartMatch[0].length;

        // Find the matching closing </svg> by tracking nesting
        let depth = 1;
        let pos = contentStart;
        while (depth > 0 && pos < block.length) {
            const nextOpen = block.indexOf('<svg', pos);
            const nextClose = block.indexOf('</svg>', pos);

            if (nextClose === -1) break;

            if (nextOpen !== -1 && nextOpen < nextClose) {
                depth++;
                pos = nextOpen + 4;
            } else {
                depth--;
                if (depth === 0) {
                    pos = nextClose;
                } else {
                    pos = nextClose + 6;
                }
            }
        }

        let innerContent = block.substring(contentStart, pos).trim();

        // If innerContent starts with another <svg>, unwrap it to avoid double wrapping
        const nestedSvgMatch = innerContent.match(/^<svg\s+[^>]*>([\s\S]*)<\/svg>$/);
        if (nestedSvgMatch) {
            innerContent = nestedSvgMatch[1].trim();
        }

        // Extract attributes
        const viewBoxMatch = svgAttrs.match(/viewBox="([^"]+)"/);
        const widthMatch = svgAttrs.match(/width="([^"]+)"/);
        const heightMatch = svgAttrs.match(/height="([^"]+)"/);
        const strokeLinejoinMatch = svgAttrs.match(/stroke-linejoin="([^"]+)"/);
        const styleMatch = svgAttrs.match(/style="([^"]+)"/);

        icons.push({
            name: iconName,
            viewBox: viewBoxMatch ? viewBoxMatch[1] : '0 0 16 16',
            width: widthMatch ? widthMatch[1] : '16',
            height: heightMatch ? heightMatch[1] : '16',
            strokeLinejoin: strokeLinejoinMatch ? strokeLinejoinMatch[1] : 'round',
            innerContent,
            style: styleMatch ? styleMatch[1] : 'color: currentcolor;',
        });
    }

    return icons;
}

async function main(): Promise<void> {
    // Ensure SVG directory exists
    if (!existsSync(SVG_DIR)) {
        await mkdir(SVG_DIR, { recursive: true });
    }

    // Read HTML file
    console.log(`📄 Reading ${HTML_FILE}...`);
    const html = await readFile(HTML_FILE, 'utf-8');

    // Extract icons
    const icons = extractIcons(html);
    console.log(`🔍 Found ${icons.length} icons`);

    if (icons.length === 0) {
        console.error('❌ No icons found! Check the HTML file structure.');
        process.exit(1);
    }

    // Check for duplicates
    const nameSet = new Set<string>();
    const duplicates: string[] = [];
    for (const icon of icons) {
        if (nameSet.has(icon.name)) {
            duplicates.push(icon.name);
        }
        nameSet.add(icon.name);
    }

    if (duplicates.length > 0) {
        console.warn(`⚠️  Found ${duplicates.length} duplicate icon names: ${duplicates.join(', ')}`);
    }

    // Deduplicate — keep first occurrence
    const uniqueIcons = icons.filter((icon, index) =>
        icons.findIndex((i) => i.name === icon.name) === index
    );

    // Save each icon as SVG
    let saved = 0;
    for (const icon of uniqueIcons) {
        const svgContent = `<svg data-testid="geist-icon" height="${icon.height}" stroke-linejoin="${icon.strokeLinejoin}" viewBox="${icon.viewBox}" width="${icon.width}" style="${icon.style}">\n${icon.innerContent}\n</svg>`;

        const filePath = join(SVG_DIR, `${icon.name}.svg`);
        await writeFile(filePath, svgContent, 'utf-8');
        saved++;
    }

    console.log(`\n✨ Saved ${saved} unique icon SVG files to svg/`);

    // Print summary
    const viewBoxes = new Map<string, number>();
    for (const icon of uniqueIcons) {
        const count = viewBoxes.get(icon.viewBox) || 0;
        viewBoxes.set(icon.viewBox, count + 1);
    }

    console.log('\n📊 viewBox distribution:');
    for (const [vb, count] of [...viewBoxes.entries()].sort((a, b) => b[1] - a[1])) {
        console.log(`  ${vb}: ${count} icons`);
    }
}

main().catch(console.error);
