import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ToggleOffAltUnread = forwardRef<SVGSVGElement, IconProps>(
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
                                                    d="M15.62 5.893A6 6 0 0 1 10 14H6A6 6 0 0 1 6 2h3.531a4.039 4.039 0 0 0 .095 1.5H6a4.5 4.5 0 0 0 0 9h4a4.5 4.5 0 0 0 4.22-6.065c.506-.092.98-.279 1.4-.542ZM6 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                                    clipRule="evenodd"></path>
                                                <circle cx="13.5" cy="2.5" r="2.5" fill="var(--ds-blue-900)"></circle>
        </svg>
    ),
);

ToggleOffAltUnread.displayName = 'ToggleOffAltUnread';
