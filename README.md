# Freeform Portland Web

To run this application locally:

First, you'll need to have yarn installed:
```
$ npm i yarn -g
```
Next, install the dependencies:
```
$ yarn install
```
For development, use
```
$ yarn start
```
which runs a Webpack Dev Server, accessible at `localhost:8080`.

We use Sass and PostCSS for styling and pre and post-processing. For development, run the watcher:
```
$ yarn run watch:css
```
We use Jest for tests. Run the tests with:
```
$ yarn run test
```
To ensure code quality and style consistency, we use ESLint. Run the linter with:
```
$ yarn run lint
```
To build the application for production, use
```
$ yarn run build
```
which generates static files in the build directory.

The deploy process: for CI we use Semaphore. All merges to the master branch trigger the build and deploy process. The build server runs the tests, then if the tests pass, the application is deployed to an AWS S3 bucket.
