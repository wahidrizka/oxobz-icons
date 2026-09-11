import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Pause = forwardRef<SVGSVGElement, IconProps>(
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
            <path fill="currentColor" d="M5.75 14.75H4V1.25h1.75zM12 1.25v13.5h-1.75V1.25z"></path>
        </svg>
    ),
);

Pause.displayName = 'Pause';
