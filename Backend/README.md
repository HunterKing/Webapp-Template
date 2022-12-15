# Backend-Template
This is a Backend application meant to be deployed easily for future fun projects. This backend is written using Typescript with Express for routing and REST features.

## Usage
`npm run dev` to run the application.

## Critical Dependencies
* `cors`: for Cross-Origin Resource Sharing
* `nodemon`: To run the server and watch files.
* `express`: To provide basic backend services.
* `node-parser`: provides simplified JSON body parsing.

## I want to add a route!
Add your route to `/routes/`, then update `index.ts` and you're done!

## Where do I start?
If you understand OOP software, but don't have JS/TypeScript experience, first look at `app.ts`, then to `index.ts`, which exports the `routes` that `app.ts` pulls in. `routes.use()` just staples all of the stuff in the specific files on. To see how this is connected to the frontend application, check out `routes/testRoute.ts` to see how it communicates with `Frontend/src/pages/PostGet.tsx`!

見ててことがありがとう！！
