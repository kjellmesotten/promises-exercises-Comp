# promises-exercises

A set of exercises to learn about asynchronous programming using Promises in JavaScript.

Fill in the blanks to make all the tests green.

## Setup

We will be using [node.js](https://nodejs.org/en) as our JavaScript runtime.

0. Verify that `node --version` returns at least `v19.0.0` or later. If not, install a recent version of node.js per the standard [installation instructions](https://nodejs.org/en/download/package-manager).
1. Fork or clone this repository.
2. Run `npm install` to download the Node modules.

Don't want to install anything on your machine? You can edit and run all the code in a browser using replit. Go to [replit.com](https://replit.com/), sign up, create a new REPL, select 'Import from GitHub', fill in this repository's URL and choose 'Node.js' as the template. Then run `npm install` in the provided shell.

## Using

Each subfolder corresponds to a step in our lesson to learn about async programming in JavaScript. Each folder has a `README.md`, a `test.js`, and an `answers.js`.  Read the `README.md` for instructions, implement the methods in the file `answers.js`, which must pass the tests in `tests.js`.

You are free to look at any of the tests for guidance, but don't change them.

> To run the tests of the exercises in a directory like `01-making-promises`, execute `npm run 01-making-promises` from the top-level project directory (the directory containing the `package.json`).

> **Windows users:** if running `npm run 01-making-promises` fails with an error stating that '.' is not executable, open `package.json` and in the `"scripts"` section replace all `/` by `\\` like so: `"01-making-promises": ".\\node_modules\\.bin\\mocha -- .\\01-making-promises\\test.js"`. Alternatively, install [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install) and use Bash to run the command.

## Lessons

* `npm run 01-making-promises` - Create promises with Promise.resolve, Promise.reject, and the Promise constructor.
* `npm run 02-consuming-promises` - Use `.then(cb)` and `.catch(cb)` to respond to a promise completing and do something with the result.
* `npm run 03-transforming-promises` - Use `.then(cb)` and `.catch(cb)` to transform the results of async processes.
* `npm run 04-chaining-promises` - Use `.then(cb)` and `.catch(cb)` to chain async processes.
* `npm run 05-callbacks` - Turn callback-centric functions into promise-centric functions.
* `npm run 06-async-functions` - Turn promise-centric functions into `async` functions. Refactor code that uses `.then(cb)` to use sequential control flow instead.

> Tip:  To run any of the exercises above in watch mode, add `-- --watch`, (e.g. `npm run 01-making-promises -- --watch`)

## Acknowledgements

This exercise suite was adapted from [this repository](https://github.com/lighthouse-labs/promises-exercises) by Lighthouse Labs.
