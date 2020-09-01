# Recipe-book
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Getting started
Take a look at the existing component, students and teachers. Try to understand how routing works and how Angular Material is imported and gives the purple color. Then:

1) Choose ONE person (person A) in your team who will "own" the project. It does not matter who it is, we just need 1 place to "host" the github repo. Do this now, live during class.
2) Person A goes to Github, and visits THIS repository, and clicks "Fork" (top right of the page). In the popup that appears, (s)he clicks "his own account". Person A now has a copy of the repo. This copy is where we will work and collaborate.
3) Person A goes to _his newly copied repo_ (so in github, top left, you should see `Person A/project-webapp-angular` and NOT `HackYourFuture/project-webapp-angular`).
4) Person A clicks on "Settings" somewhere top right. 
5) Person A clicks "Collaborators & Teams" in the left menu
6) Enter password
7) In the collaborators screen, person A searches for the github accounts of Person B and Person C and adds them as collaborators with *Write Access*
---
8) Persons A, B, and C go to the new repo (so Person A/project-webapp-angular), and clone it to their own environments:
```
// open terminal
// Make sure git works properly from your machine
// Optional: cd to/the/place/you/work
// Go to the repo, find the green button that says "clone". Copy the git link
git clone git@github.com:<PERSON A>/project-webapp-angular.git
```

9) Now you're ready to collaborate! To try this out make a change to for example `./src/app/app.component.html` by adding your name to the file. Then, `git add -A` `git commit -am 'test if this works'` `git push`. Try this when you're together to make sure you can fix permission issues. 


## Material
We've pre-installed [Angular Material](https://material.angular.io/). This comes with some [themes out of the box](https://material.angular.io/guide/theming), which you can chose from `./node_modules/@angular/material/prebuilt-themes`. Whenever you want to style something, first checkout whether material has a component for it.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
