import React from 'react';
import CKContent from '../utils/CKContent';
import { FiMail } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
const FooterContact = ({ contact }) => (
	<>
		{contact.Address && (
			<div className="footer-contact footer-address">
				<CKContent content={contact.Address} />
			</div>
		)}
		{contact.Email && (
			<div className="footer-contact footer-email">
				<FiMail /> <a href={`mailto:${contact.Email}`}>{contact.Email}</a>
			</div>
		)}
		{contact.Phone &&
			contact.Phone.split('/').map((phone, index) => (
				<div
					className="footer-contact footer-phone"
					key={`phone_${index}`}
				>
					<FiPhone /> <a href={`tel:${phone}`}>{phone}</a>
				</div>
			))}
	</>
);

export default FooterContact;
