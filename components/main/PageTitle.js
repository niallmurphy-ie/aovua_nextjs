import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FadeInWhenVisible } from '../utils/Animations';

const PageTitle = ({ headerImage, pageTitle, breadcrumb, thumbnail }) => {
	if (!pageTitle) return null;
	// Set background image if available in props
	const imageURL = headerImage ? headerImage : thumbnail ? thumbnail : null;

	return (
		<section
			className={`page-title ${
				imageURL ? 'page-title-image' : 'page-title-no-image'
			}`}
		>
			{imageURL && (
				<Image
					src={process.env.NEXT_PUBLIC_STRAPI_URL + imageURL}
					alt={pageTitle}
					className="page-title-image"
					layout="fill"
					objectFit="cover"
					placeholder="blur"
					blurDataURL={`/_next/image?url=${process.env.NEXT_PUBLIC_STRAPI_URL}${imageURL}&w=128&q=1`}
				/>
			)}
			<div className="container">
				<div className="row">
					<FadeInWhenVisible initialOpacity={0.5} initialScale={1.05}>
						<div className="col col-xs-12 page-title-text">
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
					</FadeInWhenVisible>
				</div>
			</div>
		</section>
	);
};

export default PageTitle;
