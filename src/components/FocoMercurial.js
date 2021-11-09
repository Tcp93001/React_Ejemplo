import React from 'react';
import PropTypes from 'prop-types';
import LuzMercurial from './LuzMercurial';

const FocoMercurial = ({color = "peru"}) => {
	return (
		<div className="focoMercurial">
			<LuzMercurial color={color} />
		</div>
	);
};

FocoMercurial.propTypes = {
	color: PropTypes.string
}

export default FocoMercurial;
