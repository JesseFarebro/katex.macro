# katex.macro

A babel-macro to generate static KaTeX markup as JSX.
The KaTeX runtime is large, this allows you to generate markup for static content without bundling the runtime.

## Installation

```bash
npm i --save katex.macro
```

## Usage

```jsx
import katex from "katex.macro"

const Component = () => (
  <div>
    { katex`\int_0^1 dx = 1` }
  </div>
)
```

will replace the katex macro with the appropriate markup:

```jsx
const Component = () => (
  <div>
    <span className="katex">
      <span className="katex-mathml">
        ...
      </span>
      <span className="katex-html">
        ...
      </span>
    </span>
  </div>
)
```
