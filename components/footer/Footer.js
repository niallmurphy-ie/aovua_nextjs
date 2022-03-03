import React, { useState } from 'react';
import FooterMaps from './FooterMaps';
import FooterContact from './FooterContact';

const Footer = ({ footer, mapsData, contactData }) => {
	return (
		<footer className="wpo-site-footer">
			<div className="wpo-upper-footer">
				<div className="footer-middle">
					<div className="container">
						<div className="row">
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<div className="widget market-widget wpo-service-link-widget">
									<div className="widget-title">
										<h3>Liên hệ</h3>
									</div>
									<FooterContact contact={contactData} />
								</div>
							</div>
							<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
								<div className="widget newsletter-widget">
									<div className="widget-title">
										<h3>Tìm chúng tôi trên bản đồ</h3>
										<FooterMaps mapsData={mapsData} />
									</div>
								</div>
							</div>

							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<div className="widget newsletter-widget">
									<div className="widget-title">
										<h3>Placeholder</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="wpo-lower-footer">
				<div className="container">
					<div className="row">
						<div className="col col-12">
							<p className="copyright">
								&copy; {new Date().getFullYear()}{' '}
								{footer.CopyrightTextNoYear}
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
