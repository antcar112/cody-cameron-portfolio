import React from 'react';
import Layout from '../components/layout';
import PageHeader from '../components/PageHeader/PageHeader';
import designHeaderImage from '../images/graphic-design/design-alexandru-acea.jpg';

export default () => (
	<Layout>
		<PageHeader title="About" headerImage={designHeaderImage} />
		<h1>About!!</h1>
	</Layout>
);
