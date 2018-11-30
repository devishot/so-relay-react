import React from 'react';

import { modulesConfig } from '../../../base/consts';
import { ClientProjectTable } from '.';

class ClientProjectTableWithLoadMore extends React.Component {
    render() {
        let data = this.props.client.projects.edges.map( e => e.node );
        return (
            <div>
                <ClientProjectTable
                    data={data}
                />
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
            modulesConfig.client_project.paginationPageSize,  // Fetch the next 10 feed items
            error => {
                console.log(error);
            },
        );
    }
}

export { ClientProjectTableWithLoadMore };