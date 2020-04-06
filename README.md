<div align="center">
  <img width="200" height="200" src="https://vuejs.org/images/logo.png">
  <h1>Vue + Express + TypeScript Webpack Template</h1>
  <p>Author: <a href="https://github.com/uniquenickname" target="_blank">Ivan Kochura</a></p>
</div>

## Build Setup:

``` bash
# Download repository:
git clone https://github.com/uniquenickname/vue-ts-express-template vue-ts-express-template

# Go to the app:
cd pug-ts-template

# Install dependencies:
yarn

# Dev server
yarn dev

# Production server
yarn start
```

## Project Structure:

* `src/client/index.ts` - main app file where you include/import all required libs and init client side of app
* `src/client/pug/layout/main.pug` - layout for main page. Don't change this file
* `src/client/pug/pages/index.pug` - main page. Don't change this file
* `src/client/assets/scss` - put custom app SCSS styles here. Don't forget to import them in `index.ts`
* `src/client/assets/img` - put images here. Don't forget to import them in `index.ts`
* `src/client/assets/fonts` - put fonts here. Don't forget to import them in `fonts.scss`
* `src/client/ts` - put custom app scripts here
* `src/client/static` - folder with extra static assets that will be copied into output folder
* `src/client/app.vue` - main vue file
* `src/client/components` - put custom vue components for vue app
* `src/client/layouts` - put custom layout for vue-extend-layout
* `src/client/routers/router.ts` - vue-router config
* `src/client/routers/views` - put custom pages for vue-router. Don't forget to import them in `router.ts`
* `src/client/store/store.ts` - vuex config
* `src/client/store/modules` - put custom store modules for vuex. Don't forget to import them in `store.ts`
* `src/server/index.ts` - main server file where you include/import all required libs and init server side of app
* `src/server/modules` - put custom modules for server
* `src/server/database` - put your files for database e.g. mongoose schemas

<div align="center">
  <h2>Settings:</h2>
</div>


## Import Another libs:
1. Install libs
2. Import libs in `./index.ts`
``` ts
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