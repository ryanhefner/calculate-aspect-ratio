# 📐 calculate-aspect-ratio

A simple utility function, and command line utility, for calculating an aspect
ratio based on `width` and `height`.

## Install

Via [NPM](https://npmjs.com/packages/calculate-aspect-ratio)

```sh
npm install --save calculate-aspect-ratio
```

Via [Yarn](https://yarn.fyi/calculate-aspect-ratio)

```sh
yarn add calculate-aspect-ratio
```

CLI

```sh
npm install -g calculate-aspect-ratio
```

## How to use

There are two ways you can use this module. You can use it directly in your
Javascript by importing it and calculating various aspect ratios where you need them.

I’ve also included a handy command line utility that you can use to determine the
aspect ratio by calling it and providing a `width` and `height`.

### Import

The import is useful in scenarios where you need to calculate the aspect ratio
when you have access to an assets `width` and `height`.

I’m currently using this to determine the aspect ratio of videos accessed via a
CMS and passing the aspect ratio to [`react-video-players`](https://github.com/ryanhefner/react-video-players)
so they scale nicely in fluid layouts.

```js
import calculateAspectRatios from 'calculate-aspect-ratio';
```

In addition to the method used to calculate the aspect ratio, I’ve also exposed
the method used to get the greatest common divisor. You can access that via the
`gcd` export.

```js
import { gcd } from 'calculate-aspect-ratio';
```

#### Example

```js
import calculateAspectRatio from 'calculate-aspect-ratio';

const aspectRatio = calculateAspectRatio(2880, 1800);   // '8:5'
```

### CLI

A simple utility command that you can run via the command line to return the
aspect ratio for a provided `width` and `height`.

```sh
$ aspectratio [options] [width] [height]
```

#### Options

| Option              | Description               |
| ------------------- | ------------------------- |
| `-V`, `--version`   | output the version number |
| `-h`, `--help`      | output usage information  |

#### Arguments

| Argument            | Type        | Default     |
| ------------------- | ----------- | ----------- |
| `width`             | Number      | `1920`      |
| `height`            | Number      | `1080`      |

#### Example

```sh
$ aspectratio 2880 1800    // Output -> Aspect ratio: 8:5

```

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
