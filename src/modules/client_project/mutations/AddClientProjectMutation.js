import { commitMutation, graphql } from 'react-relay';

import { clientProjectTablePaginationConnectionName } from '../queries';


const addClientProjectMutationSpec = graphql`
    mutation AddClientProjectMutation($clientID: ID!, $input: AddProjectInput!) {
        addClientProject(clientID: $clientID, input: $input) {
            payloadEdge {
                node {
                    id
                    timestamp
                    title
                    description
                }
            }
        }
    }
`;

function addClientProjectCommit(environment, clientID, input) {
    return commitMutation(environment, {
        mutation: addClientProjectMutationSpec,
        variables: {
            clientID,
            input,
        },
        configs: [{
            type: 'RANGE_ADD',
            parentID: clientID,
            connectionInfo: [{
                key: clientProjectTablePaginationConnectionName,
                rangeBehavior: 'append',
            }],
            edgeName: 'payloadEdge',
        }],
    })
};

export { addClientProjectCommit };