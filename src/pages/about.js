import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { media } from '../utils/media';
import scrollSettings from '../utils/scrollSettings';

import Head from '../components/Head/Head';
import Layout from '../components/layout';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import PageHeader from '../components/PageHeader/PageHeader';

import granville from '../images/about/granville.jpg';
import nike from '../images/about/nike.jpg';
import standingStreet from '../images/about/standing-street.jpg';

const AboutPara = styled.p`
	line-height: 1.8em;
	margin-bottom: 2.5em;

	${media.down.xs} {
		margin: 0 20px 2.5em;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 2em;
`;

export default ({ data }) => (
	<Layout insta={data.site.siteMetadata.instaAPI}>
		<Head>About</Head>
		<PageHeader title="About" headerImage={granville} />
		<ContentContainer>
			<ImageContainer>
				<img
					src={standingStreet}
					alt="Standing in the street with shoes."
					style={{ width: '100%' }}
					data-sal={scrollSettings.animation}
					data-sal-duration={scrollSettings.duration}
				/>
			</ImageContainer>
			<AboutPara>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Architecto laudantium, quos obcaecati ad facilis in unde amet,
				assumenda veniam nulla optio ea necessitatibus? Doloribus
				voluptate doloremque quidem enim error? Sunt! Minus iure maiores
				similique, veritatis laborum dolore optio placeat natus nam
				error quae minima velit, voluptatem ea totam enim suscipit nobis
				expedita explicabo. Nisi incidunt, assumenda nihil perferendis
				reprehenderit molestias. Dolor modi eius perspiciatis eaque quae
				nisi, at adipisci facilis ut dicta laudantium odio dolorum
				labore numquam quis vitae.
			</AboutPara>
			<AboutPara>
				Nam, id soluta. Eligendi assumenda aperiam, dignissimos ad
				maiores minus at! At consequatur numquam officiis voluptatibus
				accusamus temporibus veniam voluptatem blanditiis placeat illo,
				dolor necessitatibus recusandae iusto! Quis consequuntur soluta
				et iure est vero iste illo fuga eaque aut, repellat porro. Quia,
				voluptatem sequi!
			</AboutPara>
			<ImageContainer>
				<img
					src={nike}
					alt="Nikes and a hat."
					data-sal={scrollSettings.animation}
					data-sal-duration={scrollSettings.duration}
				/>
			</ImageContainer>
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
