# Staffit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Staffit

- Function:
  - See status of all action
  - Action : List + CRUD
  - Person : List + CRUD

- Definition:
  - StatusType:
    - Name : Example: "A préqualifier", "CV à envoyer", "Récupérer retour décideur", "Faire PDC A"...
  
  - Status/Action:
    - Person for the Mission
    - Projet/Client of the Mission
    - Player = Actor
    - Creation date
    - Priority

  - Person
    - FirstName
    - Name
    - Exp
    - Availibity date
    - Skill
    - Price Category
    - Person Type
    - Sites OK
    - Sites KO

  - Person Type
    - Name : "Salarié", "Candidat", "Vivier", "Sous-traitant"

  - Price Category
    - Name : "A0", "IE", "IA", "ICO", "ICG", "IP"

  - Skill
    - Name : "C++", "C#", "IVQ", "JAVA Core", "JEE", "FullStack", "Architecte", "DevOPS", "Intégrateur"
  
  - Site
    - Name
  
  - Project
    - Name : example: "ProjectABC", "ProjectDEF", "H IJ", "ClientK", "SociétéL" ...
  
  - Player
    - Name
    - FirstName
  
  - Priority
    - Name: P0, P1, P2, P3
