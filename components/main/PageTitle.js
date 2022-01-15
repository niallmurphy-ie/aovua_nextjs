import React from 'react';
import Link from 'next/link';

const PageTitle = (props) => {
	// Set background image if available in props
	const style = props.headerImage
		? {
				background: `url(http://localhost:1337${props.headerImage.url}) center center/cover no-repeat local`,
		  }
		: {
				background: '#ddd',
		  };

	return (
		<section className="page-title" style={style}>
			<div className="container">
				<div className="row">
					<div className="col col-xs-12">
						<h2>{props.pageTitle}</h2>
						<ol className="breadcrumb">
							<li>
								<Link href="/home">
									<a>Home</a>
								</Link>
							</li>
							<li>
								<span>{props.pagesub}</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PageTitle;
