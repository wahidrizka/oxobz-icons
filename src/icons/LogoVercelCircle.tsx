import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const LogoVercelCircle = forwardRef<SVGSVGElement, IconProps>(
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
            <g clipPath="url(#clip0_872_3186)">
                                                    <circle cx="8" cy="8" r="7.25" fill="currentColor"
                                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round"></circle>
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M8 4.5L11.5 10.625H4.5L8 4.5Z" fill="var(--ds-gray-100)">
                                                    </path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_872_3186">
                                                        <rect width="16" height="16" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
        </svg>
    ),
);

LogoVercelCircle.displayName = 'LogoVercelCircle';
