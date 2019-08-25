# Minimal React + Babel + Webpack template

Including the minimum dependencies for a React app transpiled with Babel using Webpack as the build tool.

Does not include:

- Linting
- Tests
- State management
- Hot reloading

## Setup:

1. `npm install`
2. `npm run build` to create a production bundle in `/dist/app.bundle.js`
3. Open `./dist/index.html`

## Build pipeline details:

### Installation

We need to install the following packages:
- Webpack and its CLI tool.
- Babel its Webpack loader and its React preset.
- React and ReactDOM.

### Entry point

Once everything is installed we create an entry point for Webpack.

This entry point *must* import:
- React
- ReactDOM
- The component we'd like to mount

We then use ReactDOM to mount our component onto a DOM element that must exist
in the DOM prior to our JavaScript bundle is loaded (see `dist/index.html`).

### Component(s)

Our component is a simple [functional component](https://reactjs.org/docs/components-and-props.html) but any React component will do. Note the component
imports but does not directly use React.

Note the component extension is a .jsx indicating it is a JSX file, as opposed
to a normal .js file. This is important for the Webpack configuration.

### Babel

Once the entry point and the components are set up we configure Babel using
its React present, simply setting `@babel/preset-react` in the `.babelrc` file.

### Webpack

Finally we configure Webpack:

- We first define the path to our entry point script.
- We set the path and name of the final bundle.
- We define the module rules so that:
    1. Webpack picks all files imported from the entry point whose extension
    matches the regular expression, note there's an optional `x` at the end.
    2. We exclude the `node_modules` folder so as to only build our code.
    3. We specify we want the Babel loader to process these files.
- We define the extensions of files Webpack will process including `.jsx`.

We are finally ready to build our bundle, Webpack requires a mode to be set for
building though it defaults to `production`. In the `package.json` file there
are commands to do so:

1. `npm run build` will run Webpack in `production` mode
2. `npm run watch` will run Webpack in `development` mode and also startup its
watcher feature, rebuilding the bundle if any files change.

Note the bundle sizes are ~125Kb for production and ~1Mb for development. This
is mainly due to including the development version of React as opposed to the
production-ready minimized version.
