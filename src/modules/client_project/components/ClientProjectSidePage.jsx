import React from 'react';
import PropTypes from 'prop-types';

import SidePage from '@skbkontur/react-ui/SidePage';
import Button from '@skbkontur/react-ui/Button';

import { ClientProjectForm } from './ClientProjectForm';


// 1. Component for side page layouting
class SidePageForm extends React.Component {
    render() {
        let { onClose, onSubmit, title, project } = this.props;
        return (
            <SidePage onClose={onClose} blockBackground>
                <SidePage.Header>{title}</SidePage.Header>
                <SidePage.Body>
                    <SidePage.Container>
                        <ClientProjectForm project={project} onSubmit={onSubmit} />
                    </SidePage.Container>
                </SidePage.Body>
                <SidePage.Footer panel>
                    <Button onClick={onClose}>Закрыть</Button>
                </SidePage.Footer>
            </SidePage>
        )
    }
}

SidePageForm.propTypes = {
    onClose:    PropTypes.func,
    onSubmit:   PropTypes.func.isRequired,
    title:      PropTypes.string.isRequired,
    project:    PropTypes.shape({
        id:             PropTypes.string,
        title:          PropTypes.string.isRequired,
        description:    PropTypes.string.isRequired
    }).isRequired,
}

SidePageForm.defaultProps = {
    title: 'Создание Проекта'
}


// 2. Button for open side page
class SidePageButton extends React.Component {
    render() {
        let { onOpen, buttonText } = this.props;
        return (
            <Button onClick={onOpen}>{buttonText}</Button>
        )
    }
}

SidePageButton.propTypes = {
    buttonText:     PropTypes.string.isRequired,
    onOpen:         PropTypes.func,
}

SidePageButton.defaultProps = {
    buttonText: 'Создать Проект'
}

export { SidePageForm, SidePageButton }