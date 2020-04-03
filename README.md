<div align="center">
  <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  <h1>Pug + TypeScript Webpack Template</h1>
  <p>Author: <a href="https://github.com/uniquenickname" target="_blank">Ivan Kochura</a></p>
</div>

## Build Setup:

``` bash
# Download repository:
git clone https://github.com/uniquenickname/pug-ts-template pug-ts-template

# Go to the app:
cd pug-ts-template

# Install dependencies:
npm install

# Server with hot reload at http://localhost:3000/
npm run dev

# Output will be at dist/ folder
npm run build
```

## Project Structure:

* `src/pug/layout` - put custom layout for pages
* `src/pug/includes` - all app includes
* `src/pug/utils` - pug mixins and other
* `src/pug/pages` - put custom app pages.
* `src/assets/scss` - put custom app SCSS styles here. Don't forget to import them in `index.ts`
* `src/assets/img` - put images here. Don't forget to import them in `index.ts`
* `src/ts` - put custom app scripts here
* `src/index.ts` - main app file where you include/import all required libs and init app
* `static/` - folder with extra static assets that will be copied into output folder

<div align="center">
  <h2>Settings:</h2>
</div>

## Main const:
Easy way to move all files.
Default:
``` js
const PATHS = {
  // Path to main app dir
  src: path.join(__dirname, '../src'),
  // Path to Output dir
  dist: path.join(__dirname, '../dist'),
  // Path to Second Output dir (ts/scss/fonts etc folder)
  assets: 'assets/'
}
```

## Import Another libs:
1. Install libs
2. Import libs in `./index.js`
``` js
// React example
import React from 'react'
// Bootstrap example
import Bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
// or
import 'bootstrap/dist/js/bootstrap.min.js'
```

## Import only SASS or CSS libs:
1. Install libs
2. Go to `/assets/scss/utils/libs.scss`
3. Import libs in node modules
``` scss
// Sass librarys example:
@import '../../node_modules/spinners/stylesheets/spinners';
// CSS librarys example:
@import '../../node_modules/flickity/dist/flickity.css';
```

## Import ts files:
1. Create another js module in `./ts/` folder
2. Import modules in `./ts/index.ts` file
``` js
// another ts file for example
import './common.ts'
```

## PUG Dir Folder:
#### Default:
* .pug dir: `./pug/pages`
* Configurations: in `./build/webpack.base.conf.js`
**Usage:**
All files must be created in the `./pug/pages` folder.
Example:
``` bash
./pug/pages/index.pug
./pug/pages/about.pug
```

#### Change PUG Default Dir Folder:
Example for `./pug/mynewfolder/pages`:
* Change `./build/webpack.base.conf.js` const PAGES_DIR:
``` js
// Your new path
const PAGES_DIR = `${PATHS.src}/pug/mynewfolder/pages/`
```
3. Rerun webpack dev server

## Create Another PUG Files:
#### Default: 
Automatic creation any pug pages:
1. Create another pug file in `./pug/pages/`
2. Open new page `http://localhost:8081/about.html` (Don't forget to RERUN dev server)

## Add Fonts:
Add @include font-face in `/assets/scss/utils/fonts.scss`:

``` scss
// Example with beermoney
@include font-face('beermoney', '600', 'beermoney-regular.woff2')
```

Add vars for font in `/assets/scss/utils/vars.scss`:

``` scss
$mySecontFont : 'beermoney', sans-serif;
```

## License
[MIT](./LICENSE)

Copyright (c) 2020-present, [Ivan Kochura](https://github.com/uniquenickname)