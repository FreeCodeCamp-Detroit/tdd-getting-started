# Getting Started with Test-Driven Development (TDD)

This mini-workshop is designed to introduce you to test-driven development and walk away with some reasons why might you consider adding it to your development workflow and some basic patterns you can follow when writing unit tests for JavaScript.

The testing pyramid describes the levels of automated testing:

* User Interface (UI) Tests
* Integration Tests
* Unit Tests

Unit tests (which appear at the bottom of the pyramid) provide the foundation for a stable testing strategy. We will talk about how to write unit tests in this workshop.

The types of tests that are higher in the pyramid (integration tests and UI tests) deal with testing the service layer (think APIs, databases, client, server, and the communication between these services) and the system user interface (think browser events, and the behaviors those events should trigger).

So, what is a Unit Test?

Unit tests focus on the underlying logic of a system. They test the basic elements of a program, including its functions and classes: the basic individual units of code.

## Getting Started

To participate, you need the following:

* Node.js
* NPM
* Mocha (an npm package installed globally)
* A local copy of this repo to follow along

It is assumed you know the following:

* Git (at a fundamental level) - how to fork, pull, commit, and switch branches
* Entry-level to intermediate JavaScript - you have completed a JavaScript tutorial or book and have written some code

## Agenda

1. Setting up your test environment
2. Cloning the repository
3. Running your first test
4. Red-Green-Refactor
5. Thinking like a Tester
6. Making it Work
7. A few helpful templates and patterns
8. Challenge (Now you try!)

## Resources

* [Mocha](https://mochajs.org/)
* [Chai](http://chaijs.com/)
* [The Ultimate Unit Testing Cheatsheet](https://gist.github.com/yoavniran/1e3b0162e1545055429e)
