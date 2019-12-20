import { css } from 'styled-components';

export let vh = window.innerHeight * 0.01;

// We listen to the resize event
window.addEventListener('resize', () => {
	// We execute the same script as before
	vh = window.innerHeight * 0.01;
	// document.documentElement.style.setProperty('--vh', `${vh}px`);
	// console.log(vh);
});

const windowHeight = css`
	height: 100vh;
	height: calc(${vh}px * 90);
`;

export default windowHeight;
