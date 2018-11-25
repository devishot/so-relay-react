import React from 'react';
import { QueryRenderer } from 'react-relay';

import environment from '../../../base/Environment';
import { 
    ClientProjectList, 
    clientProjectListSpec 
} from '../../client_project/queries/ClientProjectList';
import { ClientProjectForm } from '../../client_project/components/ClientProjectForm';


class ClientPage extends React.Component {
    render() {
        return (
            <div>
                <ClientProjectForm />
                <QueryRenderer
                    environment={environment}
                    variables={{
                        clientID: '00c3c715-9c9f-49be-b336-6d661f2bf561',
                        count: 20,
                    }}
                    query={clientProjectListSpec}
                    render={({error, props}) => {
                        if (error) {
                            return <div>{error.message}</div>
                        } else if (props) {
                            return <ClientProjectList client={props.client} />
                        }
                        return <div>Loading</div>
                    }}
                />
            </div>
        )
    }
}

export { ClientPage };