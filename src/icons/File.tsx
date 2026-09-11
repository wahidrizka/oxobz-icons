import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const File = forwardRef<SVGSVGElement, IconProps>(
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
            <path fill="currentColor" d="M9.18 0a1 1 0 0 1 .61.3l4.42 4.4a1 1 0 0 1 .29.71v8.09A2.5 2.5 0 0 1 12 16H4a2.5 2.5 0 0 1-2.5-2.5V0h7.69M3 13.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5.62L8.88 1.5H3z"></path>
        </svg>
    ),
);

File.displayName = 'File';
