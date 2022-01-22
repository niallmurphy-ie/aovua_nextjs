import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import ft1 from '../../public/images/images/footer/img-1.jpg';
import ft2 from '../../public/images/images/footer/img-2.jpg';
// import { FaFacebookF } from 'react-icons/fa';

const Footer = (props) => {
	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	const SubmitHandler = (e) => {
		e.preventDefault();
	};

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
									<p>
										online store with lots of cool and
										exclusive features
									</p>
									<div className="contact-ft">
										<ul>
											<li>
												<i className="fi ti-location-pin"></i>
												28 Street, New York City, USA
											</li>
											<li>
												<i className="fi ti-mobile"></i>
												+000123456789
											</li>
											<li>
												<i className="fi flaticon-email"></i>
												varaus@gmail.com
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<div className="widget link-widget resource-widget">
									<div className="widget-title">
										<h3>Destination</h3>
									</div>
									<div className="news-wrap">
										<div className="news-img">
											<Image src={ft1} alt="" />
										</div>
										<div className="news-text">
											<h3>Paris, France</h3>
											<span>
												11 Jun 2020 - 22 Jun 2020
											</span>
											<h2>$835</h2>
										</div>
									</div>
									<div className="news-wrap">
										<div className="news-img">
											<Image src={ft2} alt="" />
										</div>
										<div className="news-text">
											<h3>San Francisco</h3>
											<span>
												11 Jun 2020 - 22 Jun 2020
											</span>
											<h2>$835</h2>
										</div>
									</div>
								</div>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<div className="widget link-widget">
									<div className="widget-title">
										<h3>Useful Links</h3>
									</div>
									<ul>
										<li>
											<Link
												onClick={ClickHandler}
												href="/about"
											>
												<a>About Us</a>
											</Link>
										</li>
										<li>
											<Link
												onClick={ClickHandler}
												href="/room"
											>
												<a>Our Offers</a>
											</Link>
										</li>
										<li>
											<Link
												onClick={ClickHandler}
												href="/service"
											>
												<a>How Spread</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<div className="widget newsletter-widget">
									<div className="widget-title">
										<h3>Newsletter</h3>
									</div>
									<form onSubmit={SubmitHandler}>
										<div className="input-1">
											<input
												type="email"
												className="form-control"
												placeholder="Email Address *"
												required=""
											/>
										</div>
										<div className="submit clearfix">
											<button type="submit">
												subscribe
												<i className="ti-angle-right"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="wpo-lower-footer">
				<div className="container">
					<div className="row">
						<div className="col col-lg-6 col-md-6 col-12">
							<div className="term">
								<ul>
									<li>
										<Link onClick={ClickHandler} href="/">
											<a>Privecy Policy</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col col-lg-6 col-md-6 col-12">
							<p className="copyright">
								&copy; 2021 Ao Vua JSC. All rights reserved
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
