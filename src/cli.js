#!/usr/bin/env node

import calculateAspectRatio from './index';
import program from 'commander';
import pkg from './package.json';

let widthVal = 1920;
let heightVal = 1080;

program
  .version(pkg.version)
  .arguments('[width] [height]')
  .action((width, height) => {
    widthVal = width;
    heightVal = height;
  })
  .parse(process.argv);

console.log(`Aspect ratio: ${calculateAspectRatio(widthVal, heightVal)}`);
