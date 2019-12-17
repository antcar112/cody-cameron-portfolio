import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media';

const Copyright = styled.div`
	color: rgba(238, 238, 238, 0.65);
	font-size: 14px;
	width: 100%;
	max-width: 800px;
	margin: 10px auto;
	padding: 0 16px 8px;
	display: flex;
	justify-content: space-between;

	${media.down.sm} {
		flex-direction: column;
		font-size: 12px;

		& span {
			text-align: center;
			margin-top: 12px;
		}
	}
`;

const FooterCopyright = () => {
	const year = new Date().getFullYear();
	return (
		<Copyright>
			<span>&copy; {year} Cody Cameron - Graphic Designer</span>
			<span>Site Developed by Anthony Caron</span>
		</Copyright>
	);
};

export default FooterCopyright;
