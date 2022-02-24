import React, { useState, Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

const MobileMenu = ({ menu }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(0);

	return (
		<div>
			<div className={`mobileMenu ${isMenuOpen ? 'show' : ''}`}>
				<div
					className="clox"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					x
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
										{item.subMenu && (
											<i
												className="fa fa-angle-right"
												aria-hidden="true"
											></i>
										)}
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

			<div
				className="showmenu"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				{/* <i className="fa fa-bars" aria-hidden="true"></i> */}
				<FaBars />
			</div>
		</div>
	);
};

export default MobileMenu;
