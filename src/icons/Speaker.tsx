import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Speaker = forwardRef<SVGSVGElement, IconProps>(
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
                                                    d="M6 10.5L6.67082 10.6584L12.5 13.5729V2.42705L6.67082 5.34164L6 5.5H3.5V10.5H6ZM12.5 0.75L6 4H3C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H6L12.5 15.25L14 16V14.3229V1.67705V0L12.5 0.75Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

Speaker.displayName = 'Speaker';
