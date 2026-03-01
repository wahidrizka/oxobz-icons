import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const LogoXai = forwardRef<SVGSVGElement, IconProps>(
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
                                                    d="M1.004 5.6555L8.0336 16H11.1582L4.12783 5.6555H1.004ZM4.12543 11.4009L1 16H4.12703L5.68854 13.7009L4.12543 11.4009ZM11.873 0L6.4705 7.94967L8.0336 10.2505L15 0H11.873ZM12.4388 4.91908V16H15V1.1504L12.4388 4.91908Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

LogoXai.displayName = 'LogoXai';
