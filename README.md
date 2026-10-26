# sandbox-flow-e2e-public

A tiny throwaway module that turns arbitrary text into clean URL-friendly slugs: it lowercases, trims, collapses runs of non-alphanumeric characters into a single hyphen, and trims leading/trailing hyphens, returning an empty string for nullish or empty input.

```js
import { slugify } from './src/slugify.js';

slugify('Hello, World!'); // 'hello-world'
```
