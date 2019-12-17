import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../ContentContainer/ContentContainer';
import ContactForm from '../ContactForm/ContactForm';

import { SectionTitle, SectionSubtitle } from '../Text/Text';

const HomeContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 12px;
	& span {
		margin-bottom: 8px;
	}
`;

const HomeContact = () => (
	<ContentContainer>
		<SectionTitle>Connect with me!</SectionTitle>
		<SectionSubtitle>Cody Cameron</SectionSubtitle>
		<HomeContactInfo>
			<span>Vancouver, BC</span>
			<span>Email: sheddesigns1@gmail.com</span>
			<span>Tel: 778-908-4460</span>
		</HomeContactInfo>
		<ContactForm />
	</ContentContainer>
);

export default HomeContact;
