import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import FooterCarousel from './FooterCarousel';
import SpinnerContainer from '../Spinner/SpinnerContainer';
import SocialList from '../SocialMedia/SocialList';
import InstagramHeader from './InstagramHeader';
import FooterCopyright from './FooterCopyright';

const FooterContainer = styled.footer`
	background-color: ${props => props.theme.color.black};
	padding-top: 60px;
	position: relative;
	overflow: hidden;
`;

const Footer = ({ insta }) => {
	let [
		photos,
		setPhotos,
	] = useState([]);
	let [
		loading,
		setLoading,
	] = useState(true);

	// Go here for access token https://instagram.pixelunion.net/
	const INSTA_URL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${insta}`;

	useEffect(() => {
		const fetchPhotos = async () => {
			let res = await axios.get(INSTA_URL);
			let resData = res.data.data;
			let photos = resData.map(p => {
				const photo = {
					id      : p.id,
					caption : p.caption ? p.caption.text : '',
					image   : p.images.low_resolution.url,
					url     : p.link,
				};
				return photo;
			});

			setPhotos(photos);
			setLoading(false);
		};
		fetchPhotos();
	}, []);
	return (
		<FooterContainer>
			<InstagramHeader />
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
