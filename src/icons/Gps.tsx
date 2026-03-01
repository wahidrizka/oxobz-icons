import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Gps = forwardRef<SVGSVGElement, IconProps>(
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
            <path
                                                    d="M1 6L15 1L10 15L7.65955 8.91482C7.55797 8.65073 7.34927 8.44203 7.08518 8.34045L1 6Z"
                                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="bevel" fill="transparent"></path>
        </svg>
    ),
);

Gps.displayName = 'Gps';
