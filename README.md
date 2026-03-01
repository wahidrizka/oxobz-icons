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
      <ArrowUp />              {/* default: 16px, currentcolor */}
      <Check size={24} />      {/* custom size */}
      <Globe color="#0070F3" /> {/* custom color */}
    </div>
  );
}
```

## Props

All icons accept the following props (extends `SVGProps<SVGSVGElement>`):

| Prop    | Type     | Default        | Description              |
| ------- | -------- | -------------- | ------------------------ |
| `size`  | `number` | `16`           | Width & height in pixels |
| `color` | `string` | `currentcolor` | Icon color               |
| `ref`   | `Ref`    | —              | Forwarded ref            |

Plus all standard SVG attributes (`className`, `style`, `onClick`, etc.)

## Tree Shaking

Each icon is a separate module — only the icons you import are included in your bundle.

## License

MIT
