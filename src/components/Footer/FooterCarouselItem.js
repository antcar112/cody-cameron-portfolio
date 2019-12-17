import React, { Component } from 'react';
import {
	CarouselItem,
	CarouselLink,
	CarouselText,
	CarouselLogo
} from './FooterCarouselItemStyles';
import { IoLogoInstagram } from 'react-icons/io';

export class FooterCarouselItem extends Component {
	render() {
		const { image, id, url, caption } = this.props.photo;
		return (
			<CarouselItem style={{ backgroundImage: `url(${image})` }} key={id}>
				<CarouselLink
					href={url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<CarouselText>{caption}</CarouselText>
					<CarouselLogo>
						<IoLogoInstagram />
					</CarouselLogo>
				</CarouselLink>
			</CarouselItem>
		);
	}
}

export default FooterCarouselItem;
