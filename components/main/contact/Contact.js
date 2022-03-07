import React from 'react';
import CKContent from '../../utils/CKContent';
// import ContactForm from '../ContactFrom';

const Contact = ({ contact }) => {
	return (
		<div id="Contact" className="contact-area section-padding">
			<div className="container">
				<div className="wpo-contact-info">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-sm-12 col-12">
							<div className="info-item">
								<div className="info-wrap">
									<div className="info-icon">
										<i className="fi flaticon-internet"></i>
									</div>
									<div className="info-text">
										<span>Địa chỉ</span>
									</div>
								</div>
								<CKContent content={contact.Address} />
							</div>
						</div>
						{contact.Email && (
							<div className="col-lg-4 col-md-6 col-sm-12 col-12">
								<div className="info-item">
									<div className="info-wrap">
										<div className="info-icon">
											<i className="fi flaticon-email"></i>
										</div>
										<div className="info-text">
											<span>Email</span>
										</div>
									</div>
									<h2>
										<a href={`mailto:${contact.Email}`}>
											{contact.Email}
										</a>
									</h2>
								</div>
							</div>
						)}
						{contact.Phone && (
							<div className="col-lg-4 col-md-6 col-sm-12 col-12">
								<div className="info-item">
									<div className="info-wrap">
										<div className="info-icon">
											<i className="fi flaticon-null-1"></i>
										</div>
										<div className="info-text">
											<span>Số điện thoại</span>
										</div>
									</div>
									{contact.Phone.split('/').map(
										(phone, index) => (
											// <a href="tel:5554280940"></a>
											<h2 key={`phone_${index}`}>
												<a href={`tel:${phone}`}>
													{phone}
												</a>
											</h2>
										)
									)}
								</div>
							</div>
						)}
					</div>
				</div>

				{/* <div className="contact-content">
					<h2>Send a Message</h2>
					<div className="contact-form">
						<ContactForm />
					</div>
				</div> */}
				<div className="contact-map">
					<iframe
						title="Map"
						src="https://www.google.com/maps/d/u/0/embed?mid=1YTVeIChavvKCPAxms8K5rIVJR7dBkem0&ehbc=2E312F"
						loading="lazy"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;
