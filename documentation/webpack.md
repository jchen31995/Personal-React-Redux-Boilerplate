# Configuring Webpack
I'm sure a lot of you guys looking through through my repo are familiar with what Webpack is but I just wanted this page to be a place to explain a couple design choices and as a refresher to those who may not be as comfortable with Webpack. I know I wasn't until I started this project.

## Quick Review
There are often 2 problems with a modular file structure:
- Load order: making sure that certain dependencies and files get loaded before others. This is important so that the files that depend on others have the required libraries loaded by the time they need them.
- Performance:the more files the are, the longer it takes the load all of them to the browser and impacts the user experience.

So what do we do? Webpack to the rescue!

Webpack is an asset bundle that takes all these small modules/files and outputs them in a single file (commonly called `bundle.js`) in a way that preserves load order. Often, this is achieved by storing all our code into an array as functions and calling the different functions in the array as needed. In the app, this output file is called in the root `index.html` as a script.

## Webpack files
The webpack config file is split up into 3 files: `webpack.common.js`, `webpack.dev.js`, and `webpack.prod.js`. It's pretty self explanatory which files correspond to which environment. Right now, there's not too much different between the `development` and `production` environment, but you can customize it to your needs!
