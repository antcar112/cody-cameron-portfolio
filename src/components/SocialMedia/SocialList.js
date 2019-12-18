import React from 'react';
import { List } from './SocialListStyles';
import SocialItem from './SocialItem';

import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';
import { FaBehance } from 'react-icons/fa';

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
		title : 'Behance',
		icon  : <FaBehance />,
		url   :
			'https://www.behance.net/CCameronff4a?fbclid=IwAR0nm88ixtrn5Hm3yl5b38BpKMsq37mh4we11ptkgPYj1OJIYoFUfBULSC8'
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
