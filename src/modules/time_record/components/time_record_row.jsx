import React from "react";

export class TimeRecordRow extends React.Component {
	render() {
		return (
			<tr>
				<th scope="row">{this.props.index}</th>
				<td>{this.props.timestamp}</td>
				<td>{this.props.description}</td>
				<td>{this.props.amount}</td>
				<td>{this.props.owner.name}</td>
				<td>{this.props.project.name}</td>
			</tr>
		)
	}
}
