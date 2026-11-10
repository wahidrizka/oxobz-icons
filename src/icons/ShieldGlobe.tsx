import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ShieldGlobe = forwardRef<SVGSVGElement, IconProps>(
    ({ size = 16, color = 'currentColor', style, ...props }, ref) => (
        <svg
            ref={ref}
            viewBox="0 0 16 16"
            height={size}
            width={size}
            data-slot="oxobz-icon"
            style={{ color: color === 'currentColor' ? 'currentColor' : `var(--ds-${color})`, ...style }}
            {...props}
        >
            <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M1.5 4.06v5.47c0 1.4.77 2.67 2.01 3.32l1.34.7.66.35-.7 1.33-.66-.35-1.34-.7A5.3 5.3 0 0 1 0 9.53V2.96l.51-.17c.38-.13.83-.24 1.26-.36l.4-.1q.88-.23 1.62-.53.72-.32 1.09-.74.36-.38.37-1.06h1.5q.01.69.37 1.06.36.42 1.1.74a11 11 0 0 0 2.01.63c.43.12.88.23 1.26.36l.51.17V5h-1.5v-.95l-1.07-.28a13 13 0 0 1-1.82-.6A4.5 4.5 0 0 1 6 2.06a4.5 4.5 0 0 1-1.61 1.11 13 13 0 0 1-2.28.73zM13.23 12q-.05 1.22-.32 2.43a3.3 3.3 0 0 0 1.8-2.43zm-1.43 2.74a3 3 0 0 1-.6 0q-.38-1.36-.43-2.74h1.46q-.06 1.38-.43 2.74M13.23 11q-.05-1.22-.32-2.43a3.3 3.3 0 0 1 1.8 2.43zm-1 0q-.06-1.38-.43-2.74a3 3 0 0 0-.6 0q-.38 1.36-.43 2.74zm-2.46 0q.05-1.22.32-2.43A3.3 3.3 0 0 0 8.29 11zm.32 3.43q-.27-1.2-.32-2.43H8.29a3.3 3.3 0 0 0 1.8 2.43M11.5 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

ShieldGlobe.displayName = 'ShieldGlobe';
