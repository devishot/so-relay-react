import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer } from 'react-relay';

import environment from '../../../base/Environment';
import { 
    ClientProjectList, 
    clientProjectListSpec 
} from '../../client_project/queries/ClientProjectList';
import { ClientProjectCreateSidePage } from '../../client_project/mutations/ClientProjectCreateSidePage';


class ClientPage extends React.Component {
    render() {
        let clientID = this.props.clientID;
        return (
            <div>
                <ClientProjectCreateSidePage clientID={clientID} />
                <QueryRenderer 
                    environment={environment}
                    variables={{
                        clientID,
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

ClientPage.propTypes = {
    clientID: PropTypes.string.isRequired,
}

ClientPage.defaultProps = {
    clientID: '00c3c715-9c9f-49be-b336-6d661f2bf561',
}

export { ClientPage };