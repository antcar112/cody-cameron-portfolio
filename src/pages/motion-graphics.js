import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageHeader from '../components/PageHeader/PageHeader';
import designHeaderImage from '../images/graphic-design/design-alexandru-acea.jpg';

export const query = graphql`
	{
		lessons: allContentfulMotion {
			nodes {
				slug
				title
				author {
					name
				}
				thumbnail {
					file {
						url
						fileName
						contentType
					}
				}
			}
		}
	}
`;

export default ({ data }) => (
	<Layout>
		<PageHeader title="Motion Graphics" headerImage={designHeaderImage} />
		<div>
			<h1>List of Content from Contentful</h1>
			{data.lessons.nodes.map(lesson => (
				<div key={`lesson-${lesson.slug}`}>
					<h2>
						<Link to={`/${lesson.slug}`}>
							{lesson.title} (with {lesson.author.name})
						</Link>
					</h2>
					<img
						src={lesson.thumbnail.file.url}
						alt="Just removing warning"
					/>
				</div>
			))}
		</div>
	</Layout>
);
