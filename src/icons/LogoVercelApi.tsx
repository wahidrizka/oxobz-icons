import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const LogoVercelApi = forwardRef<SVGSVGElement, IconProps>(
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
            <g clipPath="url(#clip0_872_3535)">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M8 2L15 14.5H1L8 2Z" stroke="currentColor"
                                                        strokeWidth="1.25" strokeDasharray="1.25 1.25"
                                                        fill="transparent"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_872_3535">
                                                        <rect width="16" height="16" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
        </svg>
    ),
);

LogoVercelApi.displayName = 'LogoVercelApi';
