import React from 'react';
import Logo from '../../public/images/logo.png';
import Link from 'next/link';
import Image from 'next/image';
// import MobileMenu from '../../components/MobileMenu';
import { VietnameseMenu } from '../../utils/menu';

import './Header.module.css';
import { MenuItems } from './MenuItems';

const Header = () => {
	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	const menu = VietnameseMenu();

	return (
		<div className="middle-header">
			<div className="header-style-2">
				<div className="container-fluid">
					<div className="header-content">
						<div className="row align-items-center">
							<div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4">
								<div className="logo">
									<Link onClick={ClickHandler} href="/">
										<a>
											<Image src={Logo} alt="" />
										</a>
									</Link>
								</div>
							</div>
							<div className="col-xl-6 col-lg-8 d-lg-block d-none">
								<MenuItems
									menu={menu}
									ClickHandler={ClickHandler}
								/>
							</div>
							<div className="col-xl-4 get-q">
								<div className="get-quote">
									<Link
										onClick={ClickHandler}
										href="/lien-he/"
									>
										<a>
											{` `}
											{menu.contact.phone}
											{` | `}
											{menu.contact.email}
										</a>
									</Link>
								</div>
							</div>
							<div className="col-md-2 col-sm-2 col-2">
								{/* <MobileMenu /> */}
							</div>
						</div>

						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
