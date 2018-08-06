# Structuring the React project

Deciding how I wanted to structure my React app was quite fun. I had a hard time figuring out what project structure I wanted to use for this boilerplate, because there are a lot of different ways to do it. Here are some of the common ones that I found in my research:

## Function-first
This is a project structure where everything is separated by its app function. It follows something like this:
```
src
├── actions
│   ├── SearchAction.js
│   └── ButtonAction.js
├── components
│   ├── Header.js
│   ├── SearchBar.js
│   └── Button.js
│   └── Footer.js
├── containers
│   ├── AppContainer.js
├── reducers
...
```
For a smaller app, this approach works fine, and it's very clear where everything is. The problem is when your app becomes more and more complex and you add more and more files. Eventually, it comes to the point where to revise one component or container, you end up having to touch every directory. And this problem is only exacerbated when your component grows bigger and is made up of several subcomponents. 

TLDR: This approach gets clunky.

## Feature-first
This is a project structure where everything is separated by the feature. It follows something like this:
```
src
├── AppContainer
├── Button
│   └── Button.js
│   └── ButtonAction.js
│   └── ButtonReducer.js
│   └── Button.scss
├── Footer
├── Header
├── SearchBar
│   ├── SearchBar.js
│   └── SearchAction.js
│   └── Footer.js
...
```
This scales much better because every feature/component is organized and easy to find. However, one drawback to this approach is that some actions or files may be used across different components and may not be specific to any one component. Eventually, you may have to created some sort of `shared` or `general` folder.

## Ducks approach
This is a project structure where it marries the function-first and feature-first approach. It follows something like this:
```
src
├── components
│   ├── Header.js
│   ├── SearchBar.js
│   └── Button.js
│   └── Footer.js
├── containers
│   ├── AppContainer.js
├── ducks
│   ├── button_reducer.js
|   ├── footer_reducer.js
│   ├── header_reducer.js
│   ├── searchbar_reducer.js
│   ├── index.js
...
```
The TLDR of the Ducks approach is to have the related `action creators`, `actions`, and `reducer` in one file as a `module`. In this project, we put all this and the root reducer in one folder (Some projects call this the `duck` or `modules` folder, but I like to just call it `redux`). For the most part, this approach keeps everything related together in one place.

In the end, the Ducks approach came intuitively to me and I liked it. So quack quack. But what's most important is to find something that works for your app!
