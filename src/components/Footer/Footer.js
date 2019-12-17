import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import FooterCarousel from './FooterCarousel';
import SpinnerContainer from '../Spinner/SpinnerContainer';
import SocialList from '../SocialMedia/SocialList';
import FooterCopyright from './FooterCopyright';

// Go here for access token https://instagram.pixelunion.net/
const INSTA_ACCESS_TOKEN = '209209022.1677ed0.f7eddb5539944e0e8ea490d85d686e66';
const INSTA_URL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${INSTA_ACCESS_TOKEN}`;

const FooterContainer = styled.footer`
	background-color: ${props => props.theme.color.black};
	padding-top: 60px;
	position: relative;
	overflow: hidden;
`;

const Footer = () => {
	let [
		photos,
		setPhotos
	] = useState([]);
	let [
		loading,
		setLoading
	] = useState(true);

	useEffect(() => {
		fetchPhotos();
	}, []);

	const fetchPhotos = async () => {
		let res = await axios.get(INSTA_URL);
		let resData = res.data.data;
		let photos = resData.map(p => {
			const photo = {
				id      : p.id,
				caption : p.caption ? p.caption.text : '',
				image   : p.images.low_resolution.url,
				url     : p.link
			};
			return photo;
		});

		setPhotos(photos);
		setLoading(false);
	};

	return (
		<FooterContainer>
			{loading ? (
				<SpinnerContainer lightSpinner />
			) : (
				<FooterCarousel photos={photos} />
			)}
			<SocialList location="footer" />
			<FooterCopyright />
		</FooterContainer>
	);
};

export default Footer;
