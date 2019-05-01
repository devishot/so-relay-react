import React from 'react';
import PropTypes from 'prop-types';

import { SidePageForm, SidePageButton } from '.';
import { wrapSidePageWithButton } from '../../_common/hoc/WrappedSidePageWithButton';

import environment from 'base/Environment';
import { addClientProjectCommit } from '../mutations/AddClientProjectMutation';


class AddClientProjectSidePage extends React.Component {
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
        addClientProjectCommit(environment, this.props.clientID, values);
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

AddClientProjectSidePage.propTypes = {
    clientID: PropTypes.string.isRequired,
}

export { AddClientProjectSidePage };