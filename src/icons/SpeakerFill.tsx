import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SpeakerFill = forwardRef<SVGSVGElement, IconProps>(
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
            <path
                                                    d="M2 11V5C2 4.44772 2.44772 4 3 4H6L14 0V16L6 12H3C2.44772 12 2 11.5523 2 11Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

SpeakerFill.displayName = 'SpeakerFill';
