import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowDownLeft = forwardRef<SVGSVGElement, IconProps>(
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
                                                    d="M4.5595 12.5H10.25H11V14H10.25H3C2.44772 14 2 13.5523 2 13V5.75001V5.00001H3.5V5.75001V11.4382L12.7185 2.21968L13.2488 1.68935L14.3095 2.75001L13.7792 3.28034L4.5595 12.5Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

ArrowDownLeft.displayName = 'ArrowDownLeft';
