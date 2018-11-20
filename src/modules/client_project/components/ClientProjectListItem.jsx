import React from 'react';
import PropTypes from 'prop-types';

class ClientProjectListItem extends React.Component {
	render() {
        var { project } = this.props;
		return (
            <span>
                {project.id} - 
                {project.timestamp} - 
                {project.title} - 
                {project.description}
            </span>
		)
	}
}

ClientProjectListItem.propTypes = {
    project: PropTypes.shape({
        id:             PropTypes.string,
        timestamp:      PropTypes.string,
        title:          PropTypes.string,
        description:    PropTypes.string,
    })
};

export { ClientProjectListItem };