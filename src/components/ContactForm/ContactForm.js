import React from 'react';
import { Btn } from '../Button/Button';
import styled, { css } from 'styled-components';

const FormGroup = styled.div`
	color: rgb(33, 37, 41);
	display: block;
	font-size: 16px;
	font-weight: 400;
	/* height: 70px; */
	line-height: 24px;
	margin-bottom: 16px;
	text-align: left;
	text-size-adjust: 100%;
	width: 680px;
	font-family: ${props => props.theme.font.body};

	&::before,
	&::after {
		box-sizing: border-box;
	}
`;

const FormControlStyles = css`
	border: 1px solid rgb(206, 212, 218);
	border-radius: 0px;
	color: rgb(73, 80, 87);
	cursor: text;
	display: block;
	font-family: ${props => props.theme.font.body};
	font-size: 16px;

	line-height: 24px;
	margin: 0px;
	overflow: visible;
	padding-bottom: 6px;
	padding-left: 12px;
	padding-right: 12px;
	padding-top: 6px;
	text-align: start;
	text-indent: 0px;
	transition-duration: 0.15s, 0.15s;
	transition-property: border-color, box-shadow;
	transition-timing-function: ease-in-out, ease-in-out;
	width: 680px;

	&:focus {
		border: 1px solid rgb(205, 164, 50);
		outline: none;
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
			0 0 1px 1px rgba(205, 164, 50, 0.6);
	}
`;

const FormControl = styled.input`
	${FormControlStyles};
	height: 38px;
`;

const FormTextArea = styled.textarea`${FormControlStyles};`;

const ContactForm = () => (
	<form
		style={{
			maxWidth : '700px',
			margin   : 'auto',
			padding  : '10px'
		}}
	>
		<FormGroup>
			<label htmlFor="name">Name:</label>
			<FormControl
				type="name"
				id="name"
				aria-describedby="name"
				placeholder="Enter name"
			/>
		</FormGroup>
		<FormGroup>
			<label htmlFor="email">Email:</label>
			<FormControl
				type="email"
				id="email"
				aria-describedby="email"
				placeholder="Enter your email address"
			/>
		</FormGroup>
		<FormGroup>
			<label htmlFor="subject">Subject:</label>
			<FormControl
				type="subject"
				id="subject"
				aria-describedby="subject"
				placeholder="Enter email subject"
			/>
		</FormGroup>

		<FormGroup>
			<label htmlFor="message">Message:</label>
			<FormTextArea
				id="message"
				rows="5"
				placeholder="Enter your message"
			/>
		</FormGroup>
		<Btn type="submit" style={{ display: 'block', width: '100%' }}>
			Send Message
		</Btn>
	</form>
);

export default ContactForm;
