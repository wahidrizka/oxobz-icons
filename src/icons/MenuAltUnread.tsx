import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MenuAltUnread = forwardRef<SVGSVGElement, IconProps>(
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
            <circle cx="13.5" cy="2.5" r="2.5" fill="var(--ds-blue-900)"></circle>
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M9.53095 2H1.75H1V3.5H1.75H9.62602C9.54375 3.18038 9.5 2.8453 9.5 2.5C9.5 2.33067 9.51052 2.1638 9.53095 2ZM1.75 12H1V13.5H1.75H14.25H15V12H14.25H1.75ZM1 7H1.75H14.25H15V8.5H14.25H1.75H1V7Z"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

MenuAltUnread.displayName = 'MenuAltUnread';
