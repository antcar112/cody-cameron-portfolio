import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import PageHeader from '../components/PageHeader/PageHeader';
import PreviousProjects from '../components/ShedDesigns/PreviousProjects';
import ShedDesignsAbout from '../components/ShedDesigns/ShedDesignsAbout';
import PastDeliveries from '../components/ShedDesigns/PastDeliveries';

import shedDesignsHeaderImage from '../images/shed-designs/paint.jpg';

export default ({ data }) => (
	<Layout insta={data.site.siteMetadata.instaAPI} pageName="Shed Designs">
		<PageHeader title="Shed Designs" headerImage={shedDesignsHeaderImage} />
		<PreviousProjects shoes={data.shoes.nodes} />
		<ShedDesignsAbout content={data.events.nodes} />
		<PastDeliveries artists={data.artists.nodes} />
	</Layout>
);

export const query = graphql`
	{
		shoes: allContentfulShoe {
			nodes {
				id
				title
				image {
					id
					file {
						url
					}
				}
			}
		}
		events: allContentfulEvent {
			nodes {
				id
				title
			}
		}
		artists: allContentfulArtist {
			nodes {
				id
				title
				subtitle
				image {
					id
					file {
						url
					}
				}
			}
		}
		site {
			siteMetadata {
				instaAPI
			}
		}
	}
`;
