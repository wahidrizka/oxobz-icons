import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const FaceSad = forwardRef<SVGSVGElement, IconProps>(
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
            <path fillRule="evenodd" clipRule="evenodd" d="M4 9v7h1.5V9zm8 0v7h-1.5V9z" fill="var(--ds-blue-700)"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M1.5 8A6.5 6.5 0 1 1 13 12.15v2.1A7.99 7.99 0 0 0 8 0a8 8 0 0 0-5 14.25v-2.1A6.5 6.5 0 0 1 1.5 8M8 14.5q.78 0 1.5-.17v1.53a8 8 0 0 1-3 0v-1.53q.72.17 1.5.17M3.79 8.37a2.04 2.04 0 0 1 2.92 0L7.8 7.32a3.54 3.54 0 0 0-5.08 0zm6.96-.62c-.57 0-1.1.23-1.46.62L8.2 7.32a3.54 3.54 0 0 1 5.08 0L12.2 8.37a2 2 0 0 0-1.46-.62M6.25 12h3.5a1.75 1.75 0 1 0-3.5 0" fill="currentColor"></path>
        </svg>
    ),
);

FaceSad.displayName = 'FaceSad';
