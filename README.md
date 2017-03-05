# Freeform Portland Web

To run this application locally:

First, you'll need to have yarn installed:
```
$ curl -o- -L https://yarnpkg.com/install.sh | bash
```
Next, install the dependencies:
```
$ yarn
```
For development, use
```
$ yarn dev
```
which runs a Webpack Dev Server, accessible at `localhost:8080`.

We use Jest for tests. Run the tests with:
```
$ yarn test
```
To ensure code quality and style consistency, we use ESLint. Run the linter with:
```
$ yarn lint
```
To build the application for production, use
```
$ yarn build
```
which generates static files in the build directory.

The deploy process: for CI we use CircleCI. All merges to the master branch trigger the build and deploy process. The build server runs the tests, then if the tests pass, the application is deployed to an AWS S3 bucket.
