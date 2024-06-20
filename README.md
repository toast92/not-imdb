# ABN Amro Front-end Development Assignment

## Introduction

This repository contains my process and solution of an assignment sent by ABN Amro for the role of Front-End Developer. The goal of this assignment is to show my familiarity with frontend technologies, programming patterns and to showcase a sample of what clean and reusable code means to the me.

I have also created a [process document](PROCESS.md) which details my process.

The rest of this README will show how to run this assignment.

## The assignment

The assignment is to create an application that allows users to view lists (preferably horizontal list) of TV shows based on different genres (drama, comedy, sports, etc.) while using a [TV shows API](http://www.tvmaze.com/api). I made a list of the requirements and added it at the bottom of this README file to better keep track of what I've done.

## Running locally

Requirements: you have GIT, Node.js v20 and npm installed.

If you want to run the project locally, follow these steps;

- Clone the project: `git clone https://github.com/toast92/not-imdb.git`
- From the root of the project, run `npm install`
- From the root of the project, run `npm run dev`
- This starts a local webserver, see the terminal for the address

## Compile and Minify for Production

```sh
npm run build
```

## Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## List of requirements

### Main

- [x] create a UI where TV shows are not only grouped by genre but also sorted according to their ratings;
- [x] when a user selects a particular show from the dashboard, redirect them to a detailed screen that provides details about the show;
- [x] a search feature that allows users to look up tv shows by name.

### Notes

- [x] Preferably complete this assessment using this VueJS.
- [x] Application must be responsive and mobile friendly
- [x] Keep the leverage/use of scaffolding tools, boilerplate templates, plugins etc. to a minimum
- [x] Please create a readme file that explains your architectural decisions (E.G. why did you choose a
      specific framework) and make sure you include instructions on how to run your solution, add
      details about NodeJS version being used and NPM.
- [] Please include unit tests
- [x] Please check that application is running and there are no console errors before sending it to us
- [] Please make sure that the UI is simple yet eye-catching
