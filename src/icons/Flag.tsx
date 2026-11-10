import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Flag = forwardRef<SVGSVGElement, IconProps>(
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
            <path fillRule="evenodd" clipRule="evenodd"
                                                    d="m2.5 2.38.6-.33c.58-.28 1.4-.55 2.4-.55.87 0 1.52.42 2.26.98l.16.11q.48.38 1.03.71c.44.25.95.45 1.55.45a9 9 0 0 0 3-.63v5.7q-.2.1-.52.23c-.57.22-1.4.45-2.42.45-.9 0-1.45-.33-2.13-.76l-.03-.01c-.7-.44-1.55-.98-2.9-.98-1.25 0-2.27.33-3 .67zm0 7.75V16H1V1.65l.27-.22.48.57-.48-.57v-.01l.03-.02.3-.22q.3-.2.85-.48C3.18.35 4.23 0 5.5 0c1.4 0 2.4.7 3.16 1.27l.17.13q.47.36.86.6.44.25.81.25c.73 0 1.57-.22 2.27-.46a13 13 0 0 0 1.13-.46h.02L15 .8v8.84l-.32.22-.43-.61.43.61-.01.01-.02.01-.3.18q-.29.17-.82.39c-.71.28-1.73.55-2.97.55-1.36 0-2.2-.54-2.9-.98l-.03-.01c-.69-.43-1.22-.76-2.13-.76a5.6 5.6 0 0 0-3 .88m-.27.2"
                                                    fill="currentColor"></path>
        </svg>
    ),
);

Flag.displayName = 'Flag';
