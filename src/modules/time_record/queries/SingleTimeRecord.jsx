import React from 'react';
import PropTypes from 'prop-types';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../../../base/Environment';

import { TimeRecordRow } from '../components/TimeRecordRow';

class SingleTimeRecord extends React.Component {
  render() {
    const { id } = this.props;

    return (
      <QueryRenderer
        environment={ environment }
        query={ graphql`
          query SingleTimeRecordQuery($ID: ID!) {
            timeRecord(id: $ID) {
              id
              amount
              timestamp
              description
            }  
          }
        `}
        variables={ { ID: id } }
        render={ ({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <TimeRecordRow { ...props.timeRecord }/>;
        } }
      />
    );
  }
}

SingleTimeRecord.propTypes = {
  id: PropTypes.string
};

export { SingleTimeRecord };