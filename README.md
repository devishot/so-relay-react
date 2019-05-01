## How to run

### Install:
> npm install -g graphql-cli

### Run:
> npm run-script start:all


### It will do following:
1. Fetch graphql.schema from `localhost:4000/graphql`
2. Run relay compiler on downloaded schema
3. Start relay over /src files and watch over them
4. Open your browser with index.html page


## How it works

1. Use npx `create-react-app` for bootstrap app and configure Babel/Webpack/PostCSS
2. Custom script `create_react_app__babel_relay.js` inserts `babel-plugin-relay` into dependency plugins of `create-react-app`
3. Use package.json > scripts > `prestart/prebuild/pretest` for run custom script before any other commands of bootstraped app

More detailed: https://hackernoon.com/using-create-react-app-with-relay-modern-989c078fa892
