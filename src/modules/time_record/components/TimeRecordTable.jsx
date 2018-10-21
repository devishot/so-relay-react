import React from 'react';
import { Table } from 'reactstrap';

import { TimeRecordRow } from '.';

export class TimeRecordTable extends React.Component {
  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Description</th>
            <th>Time spent</th>
            <th>User</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          <TimeRecordRow 
            index={1} 
            timestamp="01.02.2019 18:00"
            description="we have work"
            amount={30}
            owner={{name: "Sattar Stamkulov"}}
            project={{name: "Apple Inc."}} />
        </tbody>
      </Table>
    );
  }
}
