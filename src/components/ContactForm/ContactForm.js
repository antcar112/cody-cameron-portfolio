import React from 'react';
import { Btn } from '../Button/Button';
import '../../styles/ContactForm.css';

const ContactForm = () => (
	<form
		style={{
			maxWidth : '700px',
			margin   : 'auto',
			padding  : '10px'
		}}
	>
		<div className="form-group">
			<label htmlFor="name">Name:</label>
			<input
				type="name"
				className="form-control rounded-0"
				id="name"
				aria-describedby="name"
				placeholder="Enter name"
			/>
		</div>
		<div className="form-group">
			<label htmlFor="email">Email:</label>
			<input
				type="email"
				className="form-control rounded-0"
				id="email"
				aria-describedby="email"
				placeholder="Enter your email address"
			/>
		</div>
		<div className="form-group">
			<label htmlFor="subject">Subject:</label>
			<input
				type="subject"
				className="form-control rounded-0"
				id="subject"
				aria-describedby="subject"
				placeholder="Enter email subject"
			/>
		</div>

		<div className="form-group">
			<label htmlFor="message">Message:</label>
			<textarea
				className="form-control rounded-0"
				id="message"
				rows="5"
				placeholder="Enter your message"
			/>
		</div>
		<Btn type="submit" style={{ display: 'block', width: '100%' }}>
			Send Message
		</Btn>
	</form>
);

export default ContactForm;
