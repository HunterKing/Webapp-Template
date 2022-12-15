# Frontend-Template
This is a React-Typescript template created with `create-react-app`, with simple Bootstrap styling, a navigation bar, and a layout with multiple pages for expansibility in the future. This is a simple template for me to use to skeleton out webapps in the future.

## Usage
run `npm install` from the top-level directory, then `npm run start` to start the application.

## Critical Dependencies
* `react`: is React.
* `bootstrap`: The core of bootstrap including it's CSS.
* `bootstrap-react`: The bootstrap package for react.
* `node-fetch`: reqiured for API requests, `/GetPost`.

## I want to add a page!
Add a folder to `pages`, with an `index.ts` which exports it, and a `.tsx` file containing it's contents. Then, update `pages/index.ts` with that export, `components/NavigationBar.tsx` if you'd like to add it to the bar, and `App.tsx` to specify it's route. I'd like to make this easier in the future!

## Where do I start?
If you understand OOP software, but don't have JS/TypeScript/React experience, first look at `App.tsx`, which pulls in all of the pages and the navbar module. Then, check out `pages` to see how each page individually is composed. For an example on how to make a GET/POST, check out `PostGet.tsx` which interacts with `Backend/src/routes/testRoute.ts`.

見ててことがありがとう！！
