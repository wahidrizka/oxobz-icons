import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TextHeading = forwardRef<SVGSVGElement, IconProps>(
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
                                                    d="M2.75 1H2V2.5H2.75H3V7.5V9V13.5H2.75H2V15H2.75H3H4.5H4.75H5.5V13.5H4.75H4.5V9H12V13.5H11.75H11V15H11.75H12H13.5H13.75H14.5V13.5H13.75H13.5V2.5H13.75H14.5V1H13.75H13.5H12H11.75H11V2.5H11.75H12V7.5H4.5V2.5H4.75H5.5V1H4.75H4.5H3H2.75Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

TextHeading.displayName = 'TextHeading';
