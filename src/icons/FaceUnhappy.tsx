import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const FaceUnhappy = forwardRef<SVGSVGElement, IconProps>(
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
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m0 7.88c1.47 0 2.76.75 3.52 1.88l.35.52-1.04.7-.34-.52a3 3 0 0 0-4.97 0l-.35.51-1.04-.7.35-.51A4.2 4.2 0 0 1 8 9.38M5.75 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m4.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" fill="currentColor"></path>
        </svg>
    ),
);

FaceUnhappy.displayName = 'FaceUnhappy';
