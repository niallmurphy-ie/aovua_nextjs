import React from 'react';
import Link from 'next/link';

const PageTitle = ({ headerImage, pageTitle, breadcrumb }) => {

	if (!pageTitle) return null;
	// Set background image if available in props
	const style = headerImage
		? {
				background: `url(${process.env.NEXT_PUBLIC_STRAPI_URL}${headerImage.url}) center center/cover no-repeat local`,
		  }
		: {
				background: '#ddd',
		  };

	return (
		<section className="page-title" style={style}>
			<div className="container">
				<div className="row">
					<div className="col col-xs-12">
						<h2>{pageTitle}</h2>
						<ol className="breadcrumb">
							<li>
								<Link href="/">
									<a>Trang chủ</a>
								</Link>
							</li>
							{breadcrumb &&
								(breadcrumb.url ? (
									<li>
										<span>
											<Link href={breadcrumb.url}>
												<a>{breadcrumb.name}</a>
											</Link>
										</span>
									</li>
								) : (
									<li>
										<span>{breadcrumb.name}</span>
									</li>
								))}
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PageTitle;
