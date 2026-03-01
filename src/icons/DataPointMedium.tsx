import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const DataPointMedium = forwardRef<SVGSVGElement, IconProps>(
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
                                                    d="M11.25 9.75C12.2165 9.75 13 8.9665 13 8C13 7.0335 12.2165 6.25 11.25 6.25C10.2835 6.25 9.5 7.0335 9.5 8C9.5 8.9665 10.2835 9.75 11.25 9.75ZM6.75 12.5C7.7165 12.5 8.5 11.7165 8.5 10.75C8.5 9.7835 7.7165 9 6.75 9C5.7835 9 5 9.7835 5 10.75C5 11.7165 5.7835 12.5 6.75 12.5Z"
                                                    fill="currentColor"></path>
                                                <circle opacity="0.25" cx="6.75" cy="5.25" r="1.75" fill="currentColor">
                                                </circle>
        </svg>
    ),
);

DataPointMedium.displayName = 'DataPointMedium';
