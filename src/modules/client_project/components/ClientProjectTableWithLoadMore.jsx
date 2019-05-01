import React from 'react';

import config from '../../../config';
import { ClientProjectTable } from './';

import Button from '@skbkontur/react-ui/Button';

class ClientProjectTableWithLoadMore extends React.Component {
render() {
  let data = this.props.client.projects.edges.map( e => e.node );
  return (
    <div>
      <ClientProjectTable
        data={data}
      />
      {this.props.relay.hasMore() &&
        <Button onClick={() => this._loadMore()}>
          Показать больше результатов
        </Button>
      }
    </div>
  );
}

_loadMore() {
  if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
    !this.props.relay.hasMore() && alert('No more pages');
    this.props.relay.isLoading() && alert('Still loading');
    return;
  }

  const cfg = config.read().modules.clientProject;

  this.props.relay.loadMore(
    cfg.paginationPageSize,  // Fetch the next 10 feed items
    error => {
      error && console.error(error);
    },
  );
}
}

export { ClientProjectTableWithLoadMore };