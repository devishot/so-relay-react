import React from 'react';
import { ClientProjectListItem } from './';

class ClientProjectList extends React.Component {
    render() {
      return (
        <div>
          {this.props.client.projects.edges.map(
            edge => <ClientProjectListItem project={edge.node} key={edge.node.id} />
          )}
          <button
            onClick={() => this._loadMore()}
            title="Load More"
          />
        </div>
      );
    }
  
    _loadMore() {
      if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
        !this.props.relay.hasMore() && alert('No more pages');
        this.props.relay.isLoading() && alert('Still loading');
        return;
      }
  
      this.props.relay.loadMore(
        10,  // Fetch the next 10 feed items
        error => {
          console.log(error);
        },
      );
    }
}

export { ClientProjectList };