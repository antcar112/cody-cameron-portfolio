import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import ContactForm from '../components/ContactForm/ContactForm';
import PageHeader from '../components/PageHeader/PageHeader';
import { SectionTitle, SectionSubtitle } from '../components/Text/Text';
import SocialList from '../components/SocialMedia/SocialList';

import designHeaderImage from '../images/graphic-design/design-alexandru-acea.jpg';

const ContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 30px;
`;

export default ({ data }) => (
	<Layout insta={data.site.siteMetadata.instaAPI}>
		<PageHeader title="Contact" headerImage={designHeaderImage} />
		<ContentContainer>
			<SectionTitle>Reach Out</SectionTitle>
			<SectionSubtitle>Cody Cameron</SectionSubtitle>
			<ContactInfo>
				<p>Vancouver, BC</p>
				<p>Email: sheddesigns1@gmail.com</p>
				<p>Tel: 778-908-4460</p>
				<SocialList location="contact-page" />
			</ContactInfo>
			<SectionTitle>Send a Message</SectionTitle>
			<ContactForm />
		</ContentContainer>
	</Layout>
);

export const query = graphql`
	query {
		site {
			siteMetadata {
				instaAPI
			}
		}
	}
`;
