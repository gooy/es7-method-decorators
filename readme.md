# js-decorators

[![GitHub version](https://badge.fury.io/gh/gooy%2Fes7-method-decorators.svg?style=flat-square)](http://badge.fury.io/gh/gooy%2Fes7-method-decorators)
[![ES7 format](https://img.shields.io/badge/JS_format-es7-orange.svg?style=flat-square)](http://www.ecmascript.org/)
[![JSPM](https://img.shields.io/badge/JSPM-gooy/es7--method--decorators-db772b.svg?style=flat-square)](http://jspm.io)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Built with gulp](http://img.shields.io/badge/built%20with-gulp-red.svg?style=flat-square)](http://gulpjs.com/)
[![Built with babel](http://img.shields.io/badge/transpiled%20with-babel-bfb222.svg?style=flat-square)](http://babeljs.io/)

A collection of some common decorators for javascript as described by [wycats/javascript-decorators](https://github.com/wycats/javascript-decorators).

## Installation

### For the browser

install with JSPM

    jspm install github:gooy/js-decorators
    
install with Bower

    bower install git://github.com/gooy/js-decorators.git#0.0.2
    
### For node

Using NPM

    npm install gooy/js-decorators
    
## Usage

The decoratos can be imported as a group:

    import {Decorators as deco} from "gooy/js-decorators";
    
In which case they can be used as

    class Foo {
    
      @deco.chain
      someMethod(){
        
      }
      
    }
    
Or the decorators can be imported separately:

    import {chain,before,after,curry,condition,memoize,once} from "gooy/js-decorators";
  
Then they can be used as

    class Foo {
        
      @chain
      someMethod(){
        
      }
      
    }

## Decorators

  - [@after](doc/after.md)
  - [@autobind](doc/autobind.md)
  - [@before](doc/before.md)
  - [@chain](doc/chain.md)
  - [@condition](doc/condition.md)
  - [@curry](doc/curry.md)
  - [@memoize](doc/memoize.md)
  - [@once](doc/once.md)

---

Have a look at the unit tests for more detailed examples.


## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

    ```shell
    npm install -g karma-cli
    ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

    ```shell
    npm install -g jspm
    ```
3. Download the [SystemJS](https://github.com/systemjs/systemjs) module loader:

    ```shell
    jspm dl-loader
    ```

4. You can now run the tests with this command:

    ```shell
    karma start
    ```
    
    Or by running the fulp task
    
    ```shell
    gulp test
    ```
