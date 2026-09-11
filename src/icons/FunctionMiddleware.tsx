import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const FunctionMiddleware = forwardRef<SVGSVGElement, IconProps>(
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
            <path fill="currentColor" d="M13.75 0C14.99 0 16 1 16 2.25v11.5c0 1.24-1 2.25-2.25 2.25H2.25C1.01 16 0 15 0 13.75V2.25C0 1.01 1 0 2.25 0zM2.25 1.5a.75.75 0 0 0-.75.75v11.5c0 .41.34.75.75.75h11.5c.41 0 .75-.34.75-.75V2.25a.75.75 0 0 0-.75-.75zM5.5 4.92A2.4 2.4 0 0 1 8 5.4a2.36 2.36 0 0 1 4 1.72v4.13h-1.5V7.13a.88.88 0 0 0-1.75 0v4.12h-1.5V7.13a.87.87 0 1 0-1.75 0v4.12H4v-6.5h1.5z"></path>
        </svg>
    ),
);

FunctionMiddleware.displayName = 'FunctionMiddleware';
