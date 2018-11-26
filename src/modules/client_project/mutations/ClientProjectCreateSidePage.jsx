import React from 'react';
import PropTypes from 'prop-types';

import { SidePageForm, SidePageButton } from '../components';
import { wrapSidePageWithButton } from '../../_common/hoc/WrappedSidePageWithButton';

class ClientProjectCreateSidePage extends React.Component {
    constructor(props) {
        super(props);
        this.WrappedSidePageWithButton = wrapSidePageWithButton(SidePageForm, SidePageButton);
    }

    getProjectData = () => {
        let emptyProject = {
            title: '',
            description: '',
        }
        return emptyProject;
    }

    onSubmit = (values, actions) => {
        console.log('submit', 'client=', this.props.clientID, 'values=', values);
    }

    render() {
        let WrappedSidePageWithButton = this.WrappedSidePageWithButton;
        return (
            <WrappedSidePageWithButton 
                project={this.getProjectData()}
                onSubmit={this.onSubmit} />
        )
    }
}

ClientProjectCreateSidePage.propTypes = {
    clientID: PropTypes.string.isRequired,
}

export { ClientProjectCreateSidePage };