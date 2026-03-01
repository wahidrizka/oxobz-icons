import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PauseCircle = forwardRef<SVGSVGElement, IconProps>(
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
            <path fill="currentColor" fillRule="evenodd"
                                                    d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-5.5-2.5h-5v5h5v-5Z"
                                                    clipRule="evenodd"></path>
        </svg>
    ),
);

PauseCircle.displayName = 'PauseCircle';
