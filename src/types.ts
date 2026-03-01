import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
    /** Icon size in pixels (width & height). Default: 16 */
    size?: number;
    /** Icon color. Default: currentcolor */
    color?: string;
}
