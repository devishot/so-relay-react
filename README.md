## How to run

Install:
> npm install -g graphql-cli

Run:
> npm run-script start:complete


### It will do following:
1. Fetch graphql.schema from `localhost:4000/graphql`
2. Run relay compiler on downloaded schema
3. Start relay over /src files and watch over them
4. Open your browser with index.html page
