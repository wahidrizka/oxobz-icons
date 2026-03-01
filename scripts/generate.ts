/**
 * Script: SVG → React Component Generator
 *
 * Reads all .svg files from svg/
 * Converts each to a React component in src/icons/
 * Updates src/index.ts with named exports
 *
 * Key attributes:
 * - viewBox: read from each SVG (varies per icon)
 * - height="16", width="16" (default)
 * - stroke-linejoin="round"
 * - fill="currentColor" on inner elements (NOT on <svg>)
 * - data-testid="oxobz-icon"
 * - style="color: currentcolor;"
 *
 * Usage: npm run generate
 */

import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, basename } from 'path';

const SVG_DIR = join(import.meta.dirname, '..', 'svg');
const ICONS_DIR = join(import.meta.dirname, '..', 'src', 'icons');
const INDEX_FILE = join(import.meta.dirname, '..', 'src', 'index.ts');

function toComponentName(fileName: string): string {
    return basename(fileName, '.svg')
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
}

/**
 * Convert a CSS property name to a React camelCase style property.
 * e.g. "stroke-width" → "strokeWidth"
 *      "fill-opacity" → "fillOpacity"
 *      "mask-type" → "maskType"
 *      "stop-color" → "stopColor"
 */
function cssPropToCamel(prop: string): string {
    return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

/**
 * Convert an inline style="..." string to a JSX style object string.
 * e.g. style="mask-type:luminance" → style={{maskType:"luminance"}}
 *      style="stroke:#E5484D;stroke-opacity:1;" → style={{stroke:"#E5484D",strokeOpacity:1}}
 */
function convertStyleToJSX(styleStr: string): string {
    const pairs = styleStr
        .split(';')
        .map((s) => s.trim())
        .filter(Boolean);

    // Use a Map to deduplicate properties — last value wins (CSS progressive enhancement)
    const propsMap = new Map<string, string>();

    for (const pair of pairs) {
        const colonIdx = pair.indexOf(':');
        if (colonIdx === -1) continue;

        const prop = pair.substring(0, colonIdx).trim();
        let value = pair.substring(colonIdx + 1).trim();

        const camelProp = cssPropToCamel(prop);

        // Check if value is a number
        if (/^-?\d+(\.\d+)?$/.test(value)) {
            propsMap.set(camelProp, value);
        } else {
            // Escape quotes in value
            value = value.replace(/"/g, '\\"');
            propsMap.set(camelProp, `"${value}"`);
        }
    }

    const jsxParts: string[] = [];
    for (const [key, val] of propsMap) {
        jsxParts.push(`${key}:${val}`);
    }

    return `{{${jsxParts.join(',')}}}`;
}

/**
 * SVG HTML attribute name → React JSX attribute name mapping.
 * Only includes attributes that differ between HTML and JSX.
 */
const SVG_ATTR_MAP: Record<string, string> = {
    'stroke-width': 'strokeWidth',
    'strokewidth': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-opacity': 'strokeOpacity',
    'fill-rule': 'fillRule',
    'fill-opacity': 'fillOpacity',
    'clip-rule': 'clipRule',
    'cliprule': 'clipRule',
    'clip-path': 'clipPath',
    'color-interpolation-filters': 'colorInterpolationFilters',
    'flood-color': 'floodColor',
    'flood-opacity': 'floodOpacity',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'xlink:href': 'xlinkHref',
    'xml:space': 'xmlSpace',
    'xmlns:xlink': 'xmlnsXlink',
    'mask-type': 'maskType',
    'maskunits': 'maskUnits',
    'gradientunits': 'gradientUnits',
    'gradienttransform': 'gradientTransform',
    'patternunits': 'patternUnits',
    'patterntransform': 'patternTransform',
    'preserveaspectratio': 'preserveAspectRatio',
    'filterunits': 'filterUnits',
    'primitiveunits': 'primitiveUnits',
    'stddeviation': 'stdDeviation',
    'basefrequency': 'baseFrequency',
    'numoctaves': 'numOctaves',
    'tablevalues': 'tableValues',
    'calcmode': 'calcMode',
    'repeatcount': 'repeatCount',
    'repeatdur': 'repeatDur',
    'keypoints': 'keyPoints',
    'keysplines': 'keySplines',
    'keytimes': 'keyTimes',
    'specularexponent': 'specularExponent',
    'specularconstant': 'specularConstant',
    'diffuseconstant': 'diffuseConstant',
    'surfacescale': 'surfaceScale',
    'pointsatx': 'pointsAtX',
    'pointsaty': 'pointsAtY',
    'pointsatz': 'pointsAtZ',
    'kernelmatrix': 'kernelMatrix',
    'kernelunitlength': 'kernelUnitLength',
    'targetx': 'targetX',
    'targety': 'targetY',
    'edgemode': 'edgeMode',
    'stitchtiles': 'stitchTiles',
    'operator': 'operator',
    'textlength': 'textLength',
    'lengthadjust': 'lengthAdjust',
    'startoffset': 'startOffset',
    'attributename': 'attributeName',
    'attributetype': 'attributeType',
    'markerheight': 'markerHeight',
    'markerwidth': 'markerWidth',
    'markerunits': 'markerUnits',
    'orient': 'orient',
    'refx': 'refX',
    'refy': 'refY',
    'viewbox': 'viewBox',
};

/**
 * Convert inner SVG content from HTML attributes to JSX.
 * Handles:
 * - Kebab-case attributes → camelCase (stroke-width → strokeWidth)
 * - Inline style strings → JSX style objects
 * - Self-closing tag normalization
 */
function convertToJSX(html: string): string {
    let jsx = html;

    // 1. Convert all style="..." attributes to JSX style objects
    jsx = jsx.replace(/style="([^"]*)"/g, (_match, styleContent: string) => {
        return `style=${convertStyleToJSX(styleContent)}`;
    });

    // 2. Convert all kebab-case SVG attributes to camelCase
    for (const [htmlAttr, jsxAttr] of Object.entries(SVG_ATTR_MAP)) {
        // Match attribute= followed by " or { (for already-converted values)
        const regex = new RegExp(`\\b${htmlAttr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}=`, 'gi');
        jsx = jsx.replace(regex, `${jsxAttr}=`);
    }

    // 3. Convert class= to className= (just in case)
    jsx = jsx.replace(/\bclass=/g, 'className=');

    return jsx;
}

async function generateIcon(svgPath: string): Promise<{ name: string; fileName: string }> {
    const svgContent = await readFile(svgPath, 'utf-8');
    const componentName = toComponentName(basename(svgPath));
    const fileName = `${componentName}.tsx`;

    // Extract viewBox from SVG
    const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 16 16';

    // Extract inner SVG content (everything inside <svg>...</svg>)
    const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
    const innerContent = innerMatch ? innerMatch[1].trim() : '';

    // Convert to JSX
    const jsxContent = convertToJSX(innerContent);

    const component = `import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ${componentName} = forwardRef<SVGSVGElement, IconProps>(
    ({ size = 16, color, style, ...props }, ref) => (
        <svg
            ref={ref}
            data-testid="oxobz-icon"
            height={size}
            strokeLinejoin="round"
            viewBox="${viewBox}"
            width={size}
            style={{ color: color ?? 'currentcolor', ...style }}
            {...props}
        >
            ${jsxContent}
        </svg>
    ),
);

${componentName}.displayName = '${componentName}';
`;

    await writeFile(join(ICONS_DIR, fileName), component, 'utf-8');
    return { name: componentName, fileName };
}

async function main(): Promise<void> {
    // Ensure directories exist
    if (!existsSync(SVG_DIR)) {
        await mkdir(SVG_DIR, { recursive: true });
        console.log('📁 Created svg/ directory. Add SVG files and run again.');
        return;
    }

    await mkdir(ICONS_DIR, { recursive: true });

    // Read all SVG files
    const files = (await readdir(SVG_DIR)).filter((f) => f.endsWith('.svg'));

    if (files.length === 0) {
        console.log('⚠️  No SVG files found in svg/ directory.');
        return;
    }

    console.log(`🎨 Generating ${files.length} icon components...`);

    // Generate each icon
    const icons: { name: string; fileName: string }[] = [];
    for (const file of files) {
        const icon = await generateIcon(join(SVG_DIR, file));
        icons.push(icon);
    }

    // Update index.ts
    const exports = icons
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((icon) => `export { ${icon.name} } from './icons/${icon.name}';`)
        .join('\n');

    const indexContent = `// @oxobz/icons — Auto-generated entry point
// DO NOT EDIT — run \`npm run generate\` to regenerate

export type { IconProps } from './types';

${exports}
`;

    await writeFile(INDEX_FILE, indexContent, 'utf-8');
    console.log(`\n✨ Generated ${icons.length} icons and updated index.ts`);
}

main().catch(console.error);
