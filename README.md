#### Demo: [potato.yagogc.com](https://potato.yagogc.com)

## Stack

The stack choosed for this project is:

* JS Framework: [React](https://reactjs.org/).
* CSS Preprocessor: [Styled Components](https://www.styled-components.com/) (CSS-in-JS library).
* Unit Test: [Jest](https://facebook.github.io/jest/)
* UI Snapshot Test: [Jest Styled Components](https://github.com/styled-components/jest-styled-components)
* E2E Test: [Cypress](https://www.cypress.io/)

The project was created with [Create React App](https://github.com/facebookincubator/create-react-app).

## Test requiremnets

* The website should function as a one-page app ✔️
* Layout should match the provided wireframes ✔️
* Look and feel is up to you, flat colours for borders and background are all that's expected ✔️
* Supports the same set of browsers as Google Apps (supported browsers list) ✔️
* Site should use responsive techniques to ensure it works on a range of devices ✔️
* Must be built using HTML, CSS and JavaScript/TypeScript (SCSS or Less are encouraged) ✔️
* We encourage the use of AngularJS, Angular 2+ or React for your module/application ✔️
* Use any 3rd party libs you like (as long as they have a weak copyleft license) ✔️

#### Extra requirements

* Search items e.g. a free-text search box where text entered is matched against tags ❌
* Infinite scrolling or "Load more" style pagination❌
* Google +1 button for results ❌
* Build process for generating production-ready code ✔️
* Tests (unit tests, e2e tests, etc) ✔️

## Table of Contents

* [Available Scripts](#available-scripts)
* [Folder Structure](#folder-structure)
* [Supported Browsers](#supported-browsers)
* [Extra Dependencies and Polyfills](#extra-dependencies-and-polyfills)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn cypress:open`

Launches the E2E test runner Cypress in the GUI.<br>

### `yarn cypress:run`

Launches the E2E test runner Cypress in the CLI.<br>

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Folder Structure

After creation, your project should look like this:

```
potato/
  README.md
  node_modules/
  package.json
  yarn.lock
  public/
    index.html
    favicon.ico
    icon.png
    manifest.json
    images/
      desktop/
  src/
    App.js
    App.test.js
    bg.svg
    index.js
    potato.svg
    registerService.js
    setupTest.js
    components/
    pages/
    ui/
    utils/
  cypress/
    .eslintrc
    fixtures/
    integration/
    plugins/
    support/
```

## Supported Browsers

This project was tested with:

* Chrome (Version 64) ✔️
* Chrome for Android (Version 64) ✔️ (PWA Compliant)
* Firefox (Version 58) ✔️
* IE 11 ✔️
* Edge 16 ✔️
* Safari 11 ✔️
* IOS Safari 11 ✔️

## Extra Dependencies and Polyfills

Besides the dependencies of React (via [Create React App](https://github.com/facebookincubator/create-react-app)), this project uses the followings:<br>

* [Babel Polyfill](https://www.npmjs.com/package/babel-polyfill)
* [Styled Components](https://www.styled-components.com/)
* [Polished](https://polished.js.org/)
* [Jest Styled Components](https://github.com/styled-components/jest-styled-components)
* [Cypress](https://www.cypress.io/)
* [FontAwesome](https://fontawesome.com/)
* [Moment](https://momentjs.com/)
* [Prettier](https://prettier.io/)
* [Pretty Quick](https://www.npmjs.com/package/pretty-quick)
* [fetch-jsonp](https://github.com/camsong/fetch-jsonp)
* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
* [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress)
* [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
* [react-test-renderer](https://www.npmjs.com/package/react-test-renderer)
