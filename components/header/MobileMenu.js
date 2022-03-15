import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import Link from 'next/link';
import { FaBars, FaChevronRight, FaArrowLeft } from 'react-icons/fa';
// import { FiArrowDown } from 'react-icons/fi';
import { FadeInWhenVisible } from '../../components/utils/Animations';

const MobileMenu = ({ menu, phone, email }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(0);

	return (
		<div>
			<div className={`mobileMenu ${isMenuOpen ? 'show' : ''}`}>
				<div
					className="clox"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<FaArrowLeft />
				</div>
				<ul className="responsivemenu">
					{menu.components.map((item, index) => {
						return (
							<li key={`mobile_menu_sub_${index}`}>
								{item.subMenu ? (
									<p
										onClick={() =>
											setIsOpen(
												index === isOpen ? 0 : index
											)
										}
									>
										{item.title}
										{item.subMenu && <FaChevronRight />}
									</p>
								) : (
									<Link href={item.link}>
										<a
											onClick={() =>
												setIsMenuOpen(!isMenuOpen)
											}
										>
											{item.title}
										</a>
									</Link>
								)}
								{item.subMenu && (
									<Collapse isOpen={index === isOpen}>
										<Card>
											<CardBody>
												<ul>
													{item.subMenu.map(
														(subMenu, jindex) => (
															<li
																key={`subMenu_${jindex}`}
															>
																<Link
																	className="active"
																	href={
																		subMenu.link
																	}
																>
																	<a
																		onClick={() =>
																			setIsMenuOpen(
																				!isMenuOpen
																			)
																		}
																	>
																		{
																			subMenu.title
																		}
																	</a>
																</Link>
															</li>
														)
													)}
												</ul>
											</CardBody>
										</Card>
									</Collapse>
								)}
							</li>
						);
					})}
				</ul>
			</div>

			<FadeInWhenVisible delay={1} initialScale={1}>
				<div
					className="showmenu"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{/* <i className="fa fa-bars" aria-hidden="true"></i> */}
					<FaBars />
				</div>
			</FadeInWhenVisible>
		</div>
	);
};

export default MobileMenu;
