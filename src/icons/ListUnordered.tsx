import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ListUnordered = forwardRef<SVGSVGElement, IconProps>(
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
                                                    d="M2.5 4a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m0 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m1.25 3.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M6.75 2H6v1.5h9V2H6.75m0 5H6v1.5h9V7H6.75m0 5H6v1.5h9V12H6.75"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

ListUnordered.displayName = 'ListUnordered';
