import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

const ColumnsSpec = [{
    Header: 'ID',
    accessor: 'id'
}, {
    Header: 'Name',
    accessor: 'title',
}, {
    Header: 'Date',
    id: 'timestamp',
    accessor: function(v) {
       let timestamp = parseInt(v.timestamp);
       let time = new Date(timestamp);
       return new Intl.DateTimeFormat('ru-RU').format(time);
    },
}, {
    Header: 'Description',
    accessor: 'description',
}];

class ClientProjectTable extends React.Component {
    render() {
        let data = this.props.data;
        let pageSize = data.length;
        return (
            <ReactTable 
                data={data}
                columns={ColumnsSpec}
                showPagination={false}
                pageSize={pageSize}
            />
        )
    }
}

ClientProjectTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id:             PropTypes.string.isRequired,
            timestamp:      PropTypes.string.isRequired,
            title:          PropTypes.string.isRequired,
            description:    PropTypes.string.isRequired
        })
    ).isRequired
}

export { ClientProjectTable };