import React from 'react';
// import ContactForm from '../ContactFrom';


const Contact= () => {
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
										<span>Hotel Address</span>
									</div>
								</div>
								<h2>25 North Street,Dubai</h2>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-12">
							<div className="info-item">
								<div className="info-wrap">
									<div className="info-icon">
										<i className="fi flaticon-email"></i>
									</div>
									<div className="info-text">
										<span>Official Mail</span>
									</div>
								</div>
								<h2>info@varaus.com</h2>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-12">
							<div className="info-item">
								<div className="info-wrap">
									<div className="info-icon">
										<i className="fi flaticon-null-1"></i>
									</div>
									<div className="info-text">
										<span>Official Phone</span>
									</div>
								</div>
								<h2>+91 256-987-239</h2>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="contact-content">
					<h2>Send a Message</h2>
					<div className="contact-form">
						<ContactForm />
					</div>
				</div> */}
				<div className="contact-map">
					<iframe title='Map'
						src="https://www.google.com/maps/d/u/0/embed?mid=1YTVeIChavvKCPAxms8K5rIVJR7dBkem0&ehbc=2E312F"
						loading="lazy"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;
