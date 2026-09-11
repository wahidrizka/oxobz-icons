import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const FolderOpen = forwardRef<SVGSVGElement, IconProps>(
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
            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M13.5 4v2h-11V2.5H6l1.33 1q.68.49 1.5.5zM1 6V1h5.17a1 1 0 0 1 .6.2l1.46 1.1a1 1 0 0 0 .6.2H15V6h1l-.17 1.5-.58 5.28A2.5 2.5 0 0 1 12.76 15H3.24a2.5 2.5 0 0 1-2.49-2.22L.17 7.5 0 6zm13 1.5H1.68l.56 5.11a1 1 0 0 0 1 .89h9.52a1 1 0 0 0 1-.89l.56-5.11z"></path>
        </svg>
    ),
);

FolderOpen.displayName = 'FolderOpen';
