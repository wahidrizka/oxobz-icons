import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Minus = forwardRef<SVGSVGElement, IconProps>(
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
                                                    d="M2 7.25H2.75H13.25H14V8.75H13.25H2.75H2V7.25Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

Minus.displayName = 'Minus';
