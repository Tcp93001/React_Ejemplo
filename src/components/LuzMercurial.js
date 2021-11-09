import React from 'react';
import PropTypes from 'prop-types';

class LuzMercurial extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color:'pink'
		}
	}

	render() {
		const {color} = this.props;
		return (
			<div
				style={{backgroundColor: color || this.state.color}}
				className="luzMercurial"
			>
			</div>
		);
	}
}

LuzMercurial.propTypes = {
	color: PropTypes.string
}

export default LuzMercurial;
