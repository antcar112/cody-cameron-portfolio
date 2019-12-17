import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import FooterCarouselItem from './FooterCarouselItem';

import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/FooterCarouselButtons.css';

export class FooterCarousel extends Component {
	responsive = {
		0    : { items: 1 },
		300  : { items: 2 },
		600  : { items: 3 },
		900  : { items: 4 },
		1200 : { items: 5 },
		1500 : { items: 6 },
		1800 : { items: 7 },
		2100 : { items: 8 }
	};

	render() {
		const { photos } = this.props;
		const carouselContent = photos.map(p => {
			return <FooterCarouselItem photo={p} />;
		});
		return (
			<AliceCarousel
				items={carouselContent}
				dotsDisabled={true}
				responsive={this.responsive}
				fadeOutAnimation={true}
				mouseDragEnabled={true}
				stagePadding={{
					paddingLeft  : 5,
					paddingRight : 5
				}}
			/>
		);
	}
}

export default FooterCarousel;
