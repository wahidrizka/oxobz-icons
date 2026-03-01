import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ListFilter = forwardRef<SVGSVGElement, IconProps>(
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
                                                    d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM5 12H5.75H10.25H11V13.5H10.25H5.75H5V12ZM3.75 7H3V8.5H3.75H12.25H13V7H12.25H3.75Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

ListFilter.displayName = 'ListFilter';
