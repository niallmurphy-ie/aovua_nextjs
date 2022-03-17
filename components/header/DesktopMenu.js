import React from 'react';
import Link from 'next/link';
import { FadeInWhenVisible } from '../utils/Animations';

export const DesktopMenu = ({ menu }) => {
	return (
		<FadeInWhenVisible initialScale={1} delay={1}>
			<nav>
				<ul>
					{menu.components.map((item, index) => {
						return (
							<li key={`${item.title}${index}`}>
								{item.link ? (
									<Link href={item.link}>
										<a>{item.title}</a>
									</Link>
								) : (
									<div className="null-menu-link">
										{item.title}
									</div>
								)}
								{item.subMenu ? (
									<ul>
										{item.subMenu.map((sub) => (
											<li key={sub.link + index}>
												<Link href={sub.link}>
													<a>{sub.title}</a>
												</Link>
											</li>
										))}
									</ul>
								) : null}
							</li>
						);
					})}
				</ul>
			</nav>
		</FadeInWhenVisible>
	);
};
