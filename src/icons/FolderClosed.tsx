import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const FolderClosed = forwardRef<SVGSVGElement, IconProps>(
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
            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14.5 7.5v5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-5zm0-1.5V4H8.83a2.5 2.5 0 0 1-1.5-.5L6 2.5H1.5V6zM0 1h6.17a1 1 0 0 1 .6.2l1.46 1.1a1 1 0 0 0 .6.2H16v10a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5V1"></path>
        </svg>
    ),
);

FolderClosed.displayName = 'FolderClosed';
