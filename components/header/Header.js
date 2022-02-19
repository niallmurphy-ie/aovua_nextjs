import React from 'react';
import Logo from '../../public/images/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import { VietnameseMenu } from '../../utils/menu';

import { DesktopMenu } from './DesktopMenu';

const Header = ({ home }) => {

	const menu = VietnameseMenu();

	const parentClass = home ? 'header-home middle-header' : 'middle-header';
	const headerClass = home ? 'header-style-2' : 'header-style-3';

	return (
		<div className={parentClass}>
			<div className={headerClass}>
				<div className="container-fluid">
					<div className="header-content">
						<div className="row align-items-center">
							<div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4">
								<div className="logo">
									<Link href="/">
										<a>
											<Image
												src={Logo}
												alt="Ao Vua Logo"
												priority
											/>
										</a>
									</Link>
								</div>
							</div>
							<div className="col-xl-6 col-lg-8 d-lg-block d-none">
								<DesktopMenu
									menu={menu}
								/>
							</div>
							<div className="col-xl-4 get-q">
								<div className="get-contact">
									<Link
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
							<div className="col-xl-1 col-lg-1 col-md-6 col-sm-6 col-6"></div>
							<div className="col-md-2 col-sm-2 col-2">
								<MobileMenu menu={menu} />
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
