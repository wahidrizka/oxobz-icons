import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Traces = forwardRef<SVGSVGElement, IconProps>(
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
            <g stroke="currentColor" strokeWidth="1.5" fill="none">
                                                    <path d="M4.75 0.75H2.75C1.64543 0.75 0.75 1.64543 0.75 2.75V4.75"
                                                        strokeLinecap="square"></path>
                                                    <path
                                                        d="M11.25 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V11.25"
                                                        strokeLinecap="square"></path>
                                                    <path
                                                        d="M11.25 0.75H13.25C14.3546 0.75 15.25 1.64543 15.25 2.75V4.75"
                                                        strokeLinecap="square"></path>
                                                    <path
                                                        d="M4.75 15.25H2.75C1.64543 15.25 0.75 14.3546 0.75 13.25V11.25"
                                                        strokeLinecap="square"></path>
                                                    <path d="M4.5 5H9.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                    <path d="M7.5 8L12.5 8" strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path d="M4.5 11H9.5" strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                </g>
        </svg>
    ),
);

Traces.displayName = 'Traces';
