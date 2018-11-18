import { createPaginationContainer, graphql } from 'react-relay';
import { ClientProjectList } from '../components/ClientProjectList';

let loadMoreQuerySpec = graphql`
    query ClientProjectListQuery(
        $count: Int!
        $cursor: String
        $clientID: ID!
    ) {
        client(id: $clientID) {
            ...ClientProjectList_client @arguments(count: $count, cursor: $cursor)
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
          orderBy: fragmentVariables.orderBy,
          // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
          clientID: fragmentVariables.clientID,
        };
    },
    query: loadMoreQuerySpec
}

export default createPaginationContainer(
    ClientProjectList,
    {
        client: graphql`
            fragment ClientProjectList_client on Client @argumentDefinitions(
                count: {type: "Int", defaultValue: 10}
                cursor: {type: "String"}
            ) {
                projects(
                    first: $count
                    after: $cursor
                ) @connection(key: "ClientProjects_client") {
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
)