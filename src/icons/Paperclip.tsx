import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Paperclip = forwardRef<SVGSVGElement, IconProps>(
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
            <path d="M10.86.3a3.43 3.43 0 0 1 2.42 5.84l-6.25 6.24a2.07 2.07 0 1 1-2.92-2.92L9.88 3.7l.5-.5 1 1-.5.5-5.77 5.76a.65.65 0 0 0 .92.92l6.25-6.24.13-.15a2.01 2.01 0 0 0-2.97-2.7L3.19 8.55a3.37 3.37 0 0 0 4.77 4.77l6.74-6.75 1 1-6.74 6.75A4.79 4.79 0 0 1 2.2 7.54L8.44 1.3c.64-.65 1.51-1 2.42-1"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

Paperclip.displayName = 'Paperclip';
