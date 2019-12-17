import React, { Component } from 'react';
import { List } from './SocialListStyles';
import SocialItem from './SocialItem';

import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';

export class SocialList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sites : [
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
			]
		};
	}

	render() {
		const { sites } = this.state;
		return (
			<List location={this.props.location}>
				{sites.map(site => <SocialItem site={site} key={site.title} />)}
			</List>
		);
	}
}

export default SocialList;
