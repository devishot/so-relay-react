import React from 'react';
import PropTypes from 'prop-types';

class ClientProjectListItem extends React.Component {
	render() {
		return (
            <span>
                {this.props.id} - 
                {this.props.timestamp} - 
                {this.props.title} - 
                {this.props.description}
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