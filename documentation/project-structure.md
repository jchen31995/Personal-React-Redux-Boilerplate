# Project Structure
This is a tour of the boilerplate and where you can expect to find certain things. I highlight some of the places you should be familiar with and know exist.

 
## The app
`src`: This is where your app lives, at least until you decide to expand on this boilerplate and import many packages. Both the React front-end and Express-back end live here.

## Configuration files
`src/webpack_config`: You'll find three webpack configuration files here: one for production, one for development, and one for both. Modify and tailor to your needs.

`.env` && `src/server/config.js`: These are where you'll configure your environmental variables. We use the `dotEnvSafe` library to handle the Windows+Mac compatibility. Each time you add a variable to your `.env` file, make sure you add it to your export object in `src/server/config.js` so that your server has access to it. You can also use this file to set defaults and run some basic checks to make sure your env file is in the proper format.

## Front-end
`src/client`: This is the React-Redux component to your app. Your front-end work will be done in this folder.

`src/client/localization`: I implemented localization here with `react-intl`. Add your translation files in the `languages` dir. If you add or remove languages, be sure to update `./index.js`.

## Back-end
`src/server`: This is the ExpressJS server component for your app. Your back-end stuff will go here.

`src/server/routes`: To avoid a cluttered `server.js` file, organize your routes here and access them via `app.use` in the root server file.

>`src/server/db`: This directory doesn't exist, but I recommend adding it to store anything related to your database. Create extra folders for things like schemas, migrations, and seeders as needed. 



