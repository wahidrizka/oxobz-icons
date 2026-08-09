# @oxobz/icons

541 SVG icon components for React — beautifully crafted, tree-shakeable, and fully typed.

## Install

```bash
npm install @oxobz/icons
```

## Usage

```tsx
import { ArrowUp, Check, Globe } from '@oxobz/icons';

function App() {
  return (
    <div>
      <ArrowUp />                 {/* 16px, inherits the surrounding color */}
      <Check size={24} />         {/* custom size */}
      <Globe color="blue-700" />  {/* design token → var(--ds-blue-700) */}
    </div>
  );
}
```

## Props

All icons accept the following props (extends `SVGProps<SVGSVGElement>`):

| Prop    | Type     | Default          | Description                                       |
| ------- | -------- | ---------------- | ------------------------------------------------- |
| `size`  | `number` | `16`             | Height in pixels; width follows the aspect ratio  |
| `color` | `string` | `'currentColor'` | Design-token **name**, without the `--ds-` prefix |
| `ref`   | `Ref`    | —                | Forwarded ref                                     |

Plus all standard SVG attributes (`className`, `style`, `onClick`, etc.)

### `color` takes a token name, not a CSS color

```tsx
<Globe color="red-900" />  // → style="color: var(--ds-red-900)"
<Globe />                  // → style="color: currentColor"
```

The token variables are defined by
[`@oxobz/ui`](https://www.npmjs.com/package/@oxobz/ui) — import `@oxobz/ui/styles`
for `color` to resolve to anything. Using the icons on their own is fine; just
leave `color` alone and set the colour on a parent, since every icon inherits
`currentColor`.

For a raw CSS colour, use `style` instead:

```tsx
<Globe style={{ color: '#0070F3' }} />
```

### `size` sets the height

Most icons are square, so `size={24}` renders 24 × 24. Eleven of them (the
`Acronym*` file-type badges) are wider than they are tall; for those the width
is derived from the `viewBox` so they never look squashed — `AcronymApi` at the
default size renders 20 × 16.

### `data-slot="oxobz-icon"`

Every icon carries this attribute. `@oxobz/ui` uses it to size icons placed
inside buttons, inputs and other components, so don't strip it.

## Tree Shaking

Each icon is a separate module — only the icons you import are included in your bundle.

## License

MIT
