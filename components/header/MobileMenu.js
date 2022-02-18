import React, { useState, Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

const MobileMenu = ({ menu }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(0);

	const ClickHandler = () => {
		window.scrollTo(10, 0);
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div>
			<div className={`mobileMenu ${isMenuOpen ? 'show' : ''}`}>
				<div
					className="clox"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					Close Me
				</div>

				<ul className="responsivemenu">
					{menu.components.map((item) => {
						return (
							<li key={item.id}>
								{item.subMenu ? (
									<p
										onClick={() =>
											setIsOpen(
												item.id === isOpen ? 0 : item.id
											)
										}
									>
										{item.title}
										{item.subMenu ? (
											<i
												className="fa fa-angle-right"
												aria-hidden="true"
											></i>
										) : (
											''
										)}
									</p>
								) : (
									<Link href={item.link}>
										<a onClick={() => setIsMenuOpen(false)}>
											{item.title}
										</a>
									</Link>
								)}
								{item.subMenu ? (
									<Collapse isOpen={item.id === isOpen}>
										<Card>
											<CardBody>
												<ul>
													{item.subMenu.map(
														(subMenu) => (
															<li
																key={subMenu.id}
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
																				false
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
								) : (
									''
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
