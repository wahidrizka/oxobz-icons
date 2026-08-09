import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Warning = forwardRef<SVGSVGElement, IconProps>(
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
            <path fill="currentColor" d="M8.56.5c.57 0 1.1.33 1.35.85l5.9 12.22a1 1 0 0 1-.9 1.43H1.09a1 1 0 0 1-.9-1.43L6.1 1.35A1.5 1.5 0 0 1 7.44.5zm-6.67 13h12.22L8.56 2H7.44zM8 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2m.75-1.25h-1.5v-4h1.5z"></path>
        </svg>
    ),
);

Warning.displayName = 'Warning';
