import { graphql } from 'react-relay';
import { createPaginationContainer } from 'react-relay';

import { ClientProjectTableWithLoadMore as component } from '../components';


export const clientProjectTablePaginationConnectionName = 'Client_projects';

export const clientProjectTablePaginationQuery = graphql`
    query ClientProjectTablePaginationQuery(
        $clientID: ID!
        $count: Int!
        $cursor: String
    ) {
        client(id: $clientID) {
            id
            ...ClientProjectTablePagination_client @arguments(count: $count, cursor: $cursor, clientID: $clientID)
        }
    }
`;

let connectionConfig = {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.client && props.client.projects;
    },
    //  getFragmentVariables(prevVars, totalCount) => {}
    //  Use for reading out the data from the store when re-rendering the component;
    //  Not defined, because in default it uses previous variables and total count 
    getVariables(props, {count, cursor}, fragmentVariables) {
        console.log("connectionConfig.getVariables", "fragmentVariables=", fragmentVariables, "props=", props)
        return {
          count,
          cursor,
          // clientID isn't specified as an @argument for the fragment, 
          // but it should be a variable available for the fragment under the query root.
          clientID: fragmentVariables.clientID,
        };
    },
    query: clientProjectTablePaginationQuery
}

let ClientProjectTablePagination = createPaginationContainer(
    component,
    {
        client: graphql`
            fragment ClientProjectTablePagination_client on Client @argumentDefinitions(
                count: {type: "Int", defaultValue: 10}
                cursor: {type: "String"}
            ) {
                projects(
                    first: $count
                    after: $cursor
                ) @connection(key: "Client_projects") {
                    edges {
                        node {
                            id
                            timestamp
                            title
                            description
                        }
                    }
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                }
            }
        `,
    },
    connectionConfig
);

export { ClientProjectTablePagination }