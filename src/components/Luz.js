import React, {Component} from 'react';
import '../css/Luz.css';

class Luz extends Component {
	constructor(props) {
		super(props);

		this.state = {
			color: "pink"
		}
	}

	render() {
		return (
			<div style={{backgroundColor: this.state.color}} className="luz">
			</div>
		);
	}
}

export default Luz;
