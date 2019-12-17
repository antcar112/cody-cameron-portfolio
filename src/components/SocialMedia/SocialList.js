import React from 'react';
import { List } from './SocialListStyles';
import SocialItem from './SocialItem';

import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';

const sites = [
	{
		title : 'Instagram',
		icon  : <IoLogoInstagram />,
		url   : 'https://www.instagram.com/sheddesigns1/'
	},
	{
		title : 'Twitter',
		icon  : <IoLogoTwitter />,
		url   : 'https://twitter.com/ShedDesigns1'
	},
	{
		title : 'Facebook',
		icon  : <IoLogoFacebook />,
		url   : 'https://www.facebook.com/sheddesigns/?ref=br_rs'
	}
];

const SocialList = ({ location }) => (
	<List location={location}>
		{sites.map(site => <SocialItem site={site} key={site.title} />)}
	</List>
);

export default SocialList;
