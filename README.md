# Template Frontend Application
This is a template repo for building React.ts frontend applications.

## Setup

### Prerequisite Downloads
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en)
- [VSCode](https://code.visualstudio.com/)

### Installing

```bash
git clone repo-link
cd repo-name
npm install
```

### Executing

- Start dev server: `npm run dev`
- Compile: `npm run build`
- Start build: `npm start`
- Format all src files: `npm run format`

### VSCode Extensions

- ES7+ React/Redux/React-Native snippets
  - Usage: type `rfce` in a file to insert a basic component. Contains several React snippet shortcuts.
- JavaScript and TypeScript Nightly
- Prettier
  - Usage: press `Shift + Alt + F` to format your file
  - If prompted, select Prettier as the default formatter
- REST Client
  - Usage: create a `.rest` file to send http requests
- Tailwind CSS Intellisense
- TODO Highlight\*
- vscode-icons\*

_\* optional, but useful_

## Documentation

### File Structure

- `/dist`: compiled build, not tracked by repo
- `/node_modules`: node dependencies, not tracked by repo
- `/public`: static assets like images & fonts not to be included in module bundling
- `/rest`: .rest files for VSCode REST Client
- `/src`
  - `/assets`: static assets that will be processed and included in bundling
  - `/components`
    - `/common`: reusable UI elements like buttons, modals, inputs, tables
    - `/containers`: components involving state management or data fetching serving as a bridge between UI and services, like `VolunteerTableContainer.tsx`
    - `/forms`: form related components
    - `/layout`: layout components like headers, footers, navigation bars
    - `/pages`: components representing an entire page, eg. `HomePage.tsx`, `VolunteersPage.tsx`
  - `/hooks`: custom hooks for creating reusable state logic
  - `/services`: business logic such as data fetching
  - `/types`: custom TypeScript type definitions. Convention is to use `.d.ts` extension.
  - `/utils`: general utilities

## Resources

### React

- [Official Reference](https://react.dev/reference/react)
- [Official Learning Guide](https://react.dev/learn)
- [Full Stack Open Part 1: Intro to React](https://fullstackopen.com/en/part1)

### TypeScript

- [Official Documentation + Learning](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Official Cheat Sheets](https://www.typescriptlang.org/cheatsheets)
- [TS + React Learning Guide](https://react.dev/learn/typescript)
- [Full Stack Open Part 9: TypeScript](https://fullstackopen.com/en/part9)

### Other Topics

- [Promises: Mozilla Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
