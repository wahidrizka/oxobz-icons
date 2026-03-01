import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Fulcrum = forwardRef<SVGSVGElement, IconProps>(
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
            <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M15.206 1.72114L15.9272 1.5151L15.5151 0.0728149L14.794 0.278856L0.793958 4.27886L0.0728149 4.4849L0.484897 5.92718L1.20604 5.72114L15.206 1.72114ZM7.11102 5.39697L8 4L8.88898 5.39697L14.0455 13.5L15 15H13.222H2.77796H0.999999L1.95454 13.5L7.11102 5.39697ZM3.73251 13.5L8 6.79394L12.2675 13.5H3.73251Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

Fulcrum.displayName = 'Fulcrum';
