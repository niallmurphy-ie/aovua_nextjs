import React from 'react';
import Link from 'next/link';

export const DesktopMenu = ({ menu }) => {
	return (
		<nav>
			<ul>
				{menu.components.map((item, index) => {
					return (
						<li key={`${item.title}${index}`}>
							<Link href={item.link}>
								<a>{item.title}</a>
							</Link>
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
	);
};
