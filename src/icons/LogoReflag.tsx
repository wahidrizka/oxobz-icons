import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const LogoReflag = forwardRef<SVGSVGElement, IconProps>(
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
            <path
                                                    d="M13.8333 1C14.4776 1 15 1.52233 15 2.16667V13.8333C15 14.4776 14.4776 15 13.8333 15H2.16667C1.52233 15 1 14.4776 1 13.8333V2.16667C1 1.52233 1.52233 1 2.16667 1H13.8333ZM2.16667 2.16667V13.8333L13.8333 2.16667H2.16667Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

LogoReflag.displayName = 'LogoReflag';
