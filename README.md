# credit-cardage
[![Build Status](https://travis-ci.org/thisdotrob/credit-cardage.svg?branch=master)](https://travis-ci.org/thisdotrob/credit-cardage)

A single page app to compare credit cards, built on an [angular-seed](angular-seed) base.


## Getting Started

To get started simply clone this repository and install the dependencies:

### Prerequisites

You need git to clone the repository. You can get git from
[http://git-scm.com/](git).

A number of node.js tools are used to initialize and test. You must have node.js and
its package manager (npm) installed. You can get them from [http://nodejs.org/](node).

### Clone credit-cardage

Clone the credit-cardage repository using [git][git]:

```bash
git clone --depth=1 https://github.com/thisdotrob/credit-cardage.git
cd credit-cardage
```

### Install Dependencies

 `npm` has been configured to automatically run `bower` so you can simply do:

```bash
npm install
```

### Run the Application

The simplest way to start the server is with:

```bash
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.


## Testing

There are two kinds of tests: Unit tests and End to End tests.

### Running Unit Tests

Unit tests are written in [Jasmine][jasmine], run with the [Karma Test Runner][karma]. The easiest way to run the unit tests is to use the npm script:

```bash
npm run test-single-run
```

### End to end testing

End-to-end tests, are also written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  

The web server needs to be serving up the application, so that Protractor
can interact with it.

```bash
npm start
```

In addition, since Protractor is built upon WebDriver you need to install this.  Use the following script to do this:

```bash
npm run update-webdriver
```

You can then run the end-to-end tests using the supplied npm script:
```
npm run protractor
```

[angular-seed]: https://github.com/angular/angular-seed
[git]: http://git-scm.com/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
