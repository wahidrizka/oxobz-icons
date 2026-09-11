import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Play = forwardRef<SVGSVGElement, IconProps>(
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
            <path fill="currentColor" d="M2 1.4c0-.18.2-.3.36-.22l13.2 6.6c.18.09.18.35 0 .44l-13.2 6.6A.25.25 0 0 1 2 14.6z"></path>
        </svg>
    ),
);

Play.displayName = 'Play';
