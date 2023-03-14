import React from 'react';

const LocationSidebarContact = ({ location }) => {
	return (
		<div className="wpo-blog-sidebar">
			<div className="widget">
				<h3>Liên hệ</h3>
				<div>
					{location.Phone.split('/').map((phone, index) => (
						<div key={index}>
							<span>
								<h4>
									<a href={`tel:${phone}`}>{phone}</a>
								</h4>
							</span>
						</div>
					))}
				</div>
				<div>
					{location.Email && location.Email.split('/').map((email, index) => (
						<div key={index}>
							<h4>
								<a href={`mailto:${email}`}>{email}</a>
							</h4>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LocationSidebarContact;
