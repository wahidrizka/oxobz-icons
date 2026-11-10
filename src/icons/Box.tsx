import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Box = forwardRef<SVGSVGElement, IconProps>(
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
            <path d="m8.35.34 6.25 3.25.4.2v8.42l-.4.2-6.25 3.26-.35.18-.35-.18-6.25-3.25-.4-.21V3.8l.4-.21L7.65.34 8 .15zM2.5 11.3l4.75 2.46V7.81L2.5 5.44zM8.75 7.8v5.95l4.75-2.46V5.44zM3.42 4.22 8 6.52l4.58-2.3L8 1.85z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

Box.displayName = 'Box';
