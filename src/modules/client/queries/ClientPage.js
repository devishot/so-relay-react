import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer } from 'react-relay';

import environment from '../../../base/Environment';
import { 
    clientProjectListPaginationQuery, 
    ClientProjectListPagination
} from '../../client_project/queries';
import { AddClientProjectSidePage } from '../../client_project/components';


class ClientPage extends React.Component {
    render() {
        let clientID = this.props.clientID;
        return (
            <div>
                <AddClientProjectSidePage clientID={clientID} />
                <QueryRenderer 
                    environment={environment}
                    variables={{
                        clientID,
                        count: 20,
                    }}
                    query={clientProjectListPaginationQuery}
                    render={({error, props}) => {
                        if (error) {
                            return <div>{error.message}</div>
                        } else if (props) {
                            return <ClientProjectListPagination client={props.client} />
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