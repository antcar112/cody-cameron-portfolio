import React from 'react';
import styled from 'styled-components';

const SpinnerStyled = styled.div`
	display: inline-block;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 1s ease-in-out infinite;

	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`;

const SpinnerLight = styled(SpinnerStyled)`
	border: 3px solid rgba(255, 255, 255, .3);
	border-top-color: #fff;
`;

const SpinnerDark = styled(SpinnerStyled)`
	border: 3px solid rgba(0, 0, 0, .3);
	border-top-color: #000;
`;

const SpinnerDiv = styled.div`
	padding: 20px;
	display: flex;
	justify-content: center;
`;

const SpinnerContainer = props => {
	const spinner = props.lightSpinner ? <SpinnerLight /> : <SpinnerDark />;
	return <SpinnerDiv>{spinner}</SpinnerDiv>;
};

export default SpinnerContainer;
