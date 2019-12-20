import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
	HeroContainer,
	HeroTitleWrapper,
	HeroScrollWrapper,
} from './HeroStyles.js';

const Hero = () => (
	<HeroContainer>
		<HeroTitleWrapper>
			<h1>Cody Cameron</h1>
			<h2>Graphic Designer</h2>
		</HeroTitleWrapper>
		<HeroScrollWrapper onClick={scrollDown}>
			<MdKeyboardArrowDown className="HomeHero__scroll-icon" />
		</HeroScrollWrapper>
	</HeroContainer>
);

const scrollDown = () => {
	document.getElementById('scroll-target').scrollIntoView({
		behavior : 'smooth',
	});
};

export default Hero;
