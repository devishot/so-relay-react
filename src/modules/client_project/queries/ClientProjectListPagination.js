import { graphql } from 'react-relay';
import { createPaginationContainer } from 'react-relay';

import { ClientProjectList as component } from '../components';


export const clientProjectListPaginationConnectionName = "Client_projects";

export const clientProjectListPaginationQuery = graphql`
    query ClientProjectListPaginationQuery(
        $clientID: ID!
        $count: Int!
        $cursor: String
    ) {
        client(id: $clientID) {
            ...ClientProjectListPagination_client @arguments(count: $count, cursor: $cursor)
        }
    }
`;


let connectionConfig = {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.client && props.client.projects;
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
        return {
          count,
          cursor,
          // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
          clientID: fragmentVariables.clientID,
        };
    },
    query: clientProjectListPaginationQuery
}

let ClientProjectListPagination = createPaginationContainer(
    component,
    {
        client: graphql`
            fragment ClientProjectListPagination_client on Client @argumentDefinitions(
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

export { ClientProjectListPagination }