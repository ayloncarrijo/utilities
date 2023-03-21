# @ayloncarrijo/utilities

A simple and modern library that contains utilities for JS and TS.

## Install

```
pnpm add @ayloncarrijo/utilities
```

## Usage

A very brief usage example:

```ts
import { abbreviate, capitalize, mergeDeeply } from "@ayloncarrijo/utilities";

const str1 = abbreviate("a utility library", 16); // => "a utility lib..."

const str2 = capitalize("js"); // => "Js"

const obj = mergeDeeply(
  { a: true, foo: { zero: 0 } },
  { b: true, foo: { one: 0 } },
  { c: true, foo: { two: 0 } }
); // => { a: true, b: true, c: true, foo: { zero: 0, one: 0, two: 0 } }
```
