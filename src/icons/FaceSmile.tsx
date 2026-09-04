import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const FaceSmile = forwardRef<SVGSVGElement, IconProps>(
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
            <path fillRule="evenodd" clipRule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-11.5.97h-.62v.63c0 1.87 1.93 3.26 4.12 3.26s4.13-1.38 4.13-3.26v-.63H4.5M8 11.61c-1.4 0-2.36-.66-2.72-1.38h5.44c-.36.72-1.31 1.38-2.72 1.38" fill="currentColor"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M6.15 4.92 5.37 3.5 4.6 4.92l-1.6.3 1.12 1.17L3.9 8l1.47-.7 1.46.7-.2-1.6 1.11-1.18zm5.25 0-.78-1.42-.77 1.42-1.6.3 1.12 1.17L9.16 8l1.47-.7 1.46.7-.2-1.6L13 5.21z" fill="var(--ds-amber-800)"></path>
        </svg>
    ),
);

FaceSmile.displayName = 'FaceSmile';
