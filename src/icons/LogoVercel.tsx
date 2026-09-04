import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const LogoVercel = forwardRef<SVGSVGElement, IconProps>(
    ({ size = 16, color = 'currentColor', style, ...props }, ref) => (
        <svg
            ref={ref}
            viewBox="0 0 16 16"
            height={size}
            width={size}
            data-slot="oxobz-icon"
            style={{ color: color === 'currentColor' ? 'currentColor' : `var(--ds-${color})`, ...style }}
            {...props}
        >
            <g><path fillRule="evenodd" clipRule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor"></path></g>
        </svg>
    ),
);

LogoVercel.displayName = 'LogoVercel';
