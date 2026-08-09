import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
    /** Icon size in pixels. Sets the height; the width follows the icon's
     *  aspect ratio (square icons end up size × size). Default: 16 */
    size?: number;
    /**
     * Design-token NAME, without the `--ds-` prefix — e.g. `"gray-900"`
     * becomes `color: var(--ds-gray-900)`. This mirrors the Geist icon API.
     *
     * Pass `"currentColor"` (the default) to inherit the surrounding colour.
     * A raw CSS colour is NOT a valid value here; set `style={{ color: … }}`
     * for that instead.
     */
    color?: string;
}
