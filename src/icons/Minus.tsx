import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Minus = forwardRef<SVGSVGElement, IconProps>(
    ({ size = 16, color, style, ...props }, ref) => (
        <svg
            ref={ref}
            data-testid="oxobz-icon"
            height={size}
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width={size}
            style={{ color: color ?? 'currentcolor', ...style }}
            {...props}
        >
            <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M2 7.25H2.75H13.25H14V8.75H13.25H2.75H2V7.25Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

Minus.displayName = 'Minus';
