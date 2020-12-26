# NgrxIssueTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Commands

ng add @ngrx/store@latest
ng add @ngrx/schematics@latest
ng add @ngrx/store-devtools@latest

ng g component components/issues

ng generate module settings --routing true --route settings --module app      

ng generate @ngrx/schematics:feature settings/store/settings --module settings/settings.module --creators --flat 

ng add @ngrx/effects@latest --minimal

npm install angular-in-memory-web-api
