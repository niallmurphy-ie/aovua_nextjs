import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import ft1 from '../../public/images/images/footer/img-1.jpg';
import ft2 from '../../public/images/images/footer/img-2.jpg';
import CKContent from '../utils/CKContent';
// import { FaFacebookF } from 'react-icons/fa';

const Footer = ({ footer }) => {
	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	const SubmitHandler = (e) => {
		e.preventDefault();
	};

	console.log('props.footer', footer);

	return (
		<footer className="wpo-site-footer">
			<div className="wpo-upper-footer">
				<div className="footer-middle">
					<div className="container">
						<div className="row">
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<div className="widget market-widget wpo-service-link-widget">
									<div className="widget-title">
										<h3>Contact </h3>
									</div>
									{<CKContent content={footer.Contact} />}
								</div>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<div className="widget link-widget resource-widget">
									<div className="widget-title">
										<h3>Placeholder</h3>
									</div>
								</div>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<div className="widget link-widget">
									<div className="widget-title">
										<h3>Placeholder</h3>
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
								&copy; 2021 {footer.CopyrightTextNoYear}
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
