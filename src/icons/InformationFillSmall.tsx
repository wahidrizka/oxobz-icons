import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const InformationFillSmall = forwardRef<SVGSVGElement, IconProps>(
    ({ size = 16, color = 'currentColor', style, ...props }, ref) => (
        <svg
            ref={ref}
            viewBox="0 0 16 16"
            height={size}
            width={size}
            data-slot="oxobz-icon"
            data-glyph="circular"
            style={{ color: color === 'currentColor' ? 'currentColor' : `var(--ds-${color})`, ...style }}
            {...props}
        >
            <path fill="currentColor" fillOpacity=".08" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0"></path>
<path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 7h-.75v1.5h1v2.75h1.5V8a1 1 0 0 0-1-1z"></path>
        </svg>
    ),
);

InformationFillSmall.displayName = 'InformationFillSmall';
