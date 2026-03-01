import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const LogoVercel = forwardRef<SVGSVGElement, IconProps>(
    ({ size = 16, color, style, ...props }, ref) => (
        <svg
            ref={ref}
            data-testid="geist-icon"
            height={size}
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width={size}
            style={{ color: color ?? 'currentcolor', ...style }}
            {...props}
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M8 1L16 15H0L8 1Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

LogoVercel.displayName = 'LogoVercel';
