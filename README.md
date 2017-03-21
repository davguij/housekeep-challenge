# Housekeep Challenge

## Information

The project has been deployed to [https://davguij.github.io/housekeep-challenge/](https://davguij.github.io/housekeep-challenge/)


The architecture of the project reflects the approach I normally use when building Angular 2 project architectures, though obviously at a smaller, simpler scale. 

The project consists of:
1) A single app component that holds the view and the data binding.
2) A single app service that performs HTTP requests.

One of the main highlights of Angular 2 are Observables. In the codebase, I've reflected the basic flow when dealing with them: basically, "mapping" and "catching" in the service, then "subscribing" in the component.

It includes minimal styling. No unit or E2E tests have been implemented.

---

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
