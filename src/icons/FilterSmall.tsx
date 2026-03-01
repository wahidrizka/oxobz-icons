import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const FilterSmall = forwardRef<SVGSVGElement, IconProps>(
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
                                                    d="M12.8721 5.48633L12.6855 5.66992L9.875 8.43457V12.876H8.2998L8.13672 12.7598L6.38672 11.5088L6.125 11.3213V8.43457L3.31152 5.66992L3.125 5.48633V3.125H12.8721V5.48633ZM4.375 4.96094L7.18848 7.72754L7.375 7.91113V10.6777L8.625 11.5713V7.91113L8.81152 7.72754L11.6221 4.96191V4.375H4.375V4.96094Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

FilterSmall.displayName = 'FilterSmall';
