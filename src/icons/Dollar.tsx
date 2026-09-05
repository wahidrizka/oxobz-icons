import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Dollar = forwardRef<SVGSVGElement, IconProps>(
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
            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.62-12.62v1H9c1.17 0 2.13.95 2.13 2.12H9.87c0-.48-.39-.87-.87-.87h-.38v1.75H9a2.13 2.13 0 0 1 0 4.25h-.38v1H7.37v-1H7A2.13 2.13 0 0 1 4.88 9.5h1.25c0 .48.39.88.87.88h.37V8.62H7a2.13 2.13 0 0 1 0-4.24h.37v-1zM7.37 5.63H7a.87.87 0 1 0 0 1.75h.37zm1.25 3v1.74H9a.87.87 0 1 0 0-1.74z"></path>
        </svg>
    ),
);

Dollar.displayName = 'Dollar';
