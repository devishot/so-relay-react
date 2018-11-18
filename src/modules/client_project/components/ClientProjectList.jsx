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
            onPress={() => this._loadMore()}
            title="Load More"
          />
        </div>
      );
    }
  
    _loadMore() {
      if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
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