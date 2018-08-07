# Learning the Commands
This is a quick rundown on what scripts are available in your `package.json`. 

## Development
```Shell
npm run dev
```
Builds the `development` setup of your app and runs it at `http://localhost:3000` unless otherwise specified in `.env` file.

```Shell
npm run dev:client
```
Builds only the front end of your app if you need a quick look around your app without the server. 
> Note: Some pages that require the server will not work in this configuration.

### Redux Dev Tools
To hide/toggle, `ctrl + h` and to rotate it along the screen, `ctrl + w`

## Production
```Shell
npm start || npm run start
```
Builds the `production` version of your app and runs it locally.

```Shell
npm run build
```
Processes your codebase and optimizes it for production. It minimizes all files and splits the app into two files: `main.js` which contains the main codebase and `vendor.js` which contains the node module files. For each file, a source map is constructed. All files are outputted to `/dist`.

## Cleaning
```Shell
npm run clean
```
Removes your build directory (`/dist`), `node_modules` directory, Jest `coverage` directory, and clears Jest's cache.
> Note: You can also clean out individual parts of your app by running `npm run clean:build` (removes your `dist` directory), `npm run clean:test` (cleans Jest `coverage` directory and cache), and `npm run clean:modules` (removes `node_modules` directory).

## Linting
```Shell
npm run lint
```
Lints your code according to `Eslint`.


```Shell
npm run lint:fix
```
Attampts to fix linting errors in your code according to `Eslint`.

## Testing
```Shell
npm run test
```
Scours your app for all files with a `*.test.js` extension and runs `jest`.
