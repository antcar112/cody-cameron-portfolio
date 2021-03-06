import React from 'react';
import { Btn } from '../Button/Button';
import styled, { css } from 'styled-components';

const FormGroup = styled.div`
	color: rgb(33, 37, 41);
	display: block;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	margin-bottom: 16px;
	text-align: left;
	text-size-adjust: 100%;
	max-width: 680px;
	width: 100%;
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
	max-width: 680px;
	width: 100%;

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
		name="emailForm"
		method="POST"
		data-netlify="true"
		netlify-honeypot="bot-field"
	>
		<input type="hidden" name="bot-field" />
		<FormGroup>
			<label htmlFor="name">Name:</label>
			<FormControl
				type="name"
				id="name"
				name="name"
				aria-describedby="name"
				placeholder="Enter your name"
			/>
		</FormGroup>
		<FormGroup>
			<label htmlFor="email">Email:</label>
			<FormControl
				type="email"
				id="email"
				name="email"
				aria-describedby="email"
				placeholder="Enter your email address"
			/>
		</FormGroup>
		<FormGroup>
			<label htmlFor="subject">Subject:</label>
			<FormControl
				type="subject"
				id="subject"
				name="subject"
				aria-describedby="subject"
				placeholder="Enter your email subject"
			/>
		</FormGroup>

		<FormGroup>
			<label htmlFor="message">Message:</label>
			<FormTextArea
				id="message"
				name="message"
				rows="5"
				placeholder="Enter your message"
			/>
		</FormGroup>
		<Btn
			type="submit"
			style={{
				display  : 'block',
				width    : '100%',
				fontSize : '16px',
				padding  : '15px'
			}}
		>
			Send Message
		</Btn>
	</form>
);

export default ContactForm;
