import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowCircleFillUpRight = forwardRef<SVGSVGElement, IconProps>(
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
            <path
                                                    d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM5.48242 4.87891V6.37891H8.31055L4.81836 9.87109L5.87891 10.9316L9.37109 7.43945V10.2676H10.8711V5.62891C10.871 5.24067 10.5763 4.92032 10.1982 4.88184L10.1211 4.87891H5.48242Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

ArrowCircleFillUpRight.displayName = 'ArrowCircleFillUpRight';
