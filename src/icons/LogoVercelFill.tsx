import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const LogoVercelFill = forwardRef<SVGSVGElement, IconProps>(
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
            <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M8 1L0 15H16L8 1ZM8 4.02335L2.58477 13.5H13.4152L8 4.02335Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

LogoVercelFill.displayName = 'LogoVercelFill';
