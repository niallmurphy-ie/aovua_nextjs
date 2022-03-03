import React from 'react';

const FooterContact = ({ contact }) => {
	console.log('contact :>> ', contact);

	return (
		<>
			{contact.Email && (
				<div className="footer-contact footer-email">
					<a href={`mailto:${contact.Email}`}>{contact.Email}</a>
				</div>
			)}
			{contact.Phone &&
				contact.Phone.split('/').map((phone, index) => (
					<div className="footer-contact footer-phone" key={`phone_${index}`}>
						<a href={`tel:${phone}`}>{phone}</a>
					</div>
				))}
		</>
	);
};

export default FooterContact;
