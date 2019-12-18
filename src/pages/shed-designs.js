import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageHeader from '../components/PageHeader/PageHeader';
import shedDesignsHeaderImage from '../images/shed-designs/paint.jpg';
import PreviousProjects from '../components/ShedDesigns/PreviousProjects';
import ShedDesignsAbout from '../components/ShedDesigns/ShedDesignsAbout';
import PastDeliveries from '../components/ShedDesigns/PastDeliveries';

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
	}
`;

export default ({ data }) => (
	<Layout>
		<PageHeader title="Shed Designs" headerImage={shedDesignsHeaderImage} />
		<PreviousProjects shoes={data.shoes.nodes} />
		<ShedDesignsAbout content={data.events.nodes} />
		<PastDeliveries artists={data.artists.nodes} />
	</Layout>
);
