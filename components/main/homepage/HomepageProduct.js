import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CKContent from '../../utils/CKContent';
import { FadeInWhenVisible } from '../../utils/Animations';

const HomepageProduct = ({ product }) => {
	//Thực phẩm bổ dưỡng
	// thuc-pham-bo-duong
	return (
		<div className="section-padding section-homepage-product">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12 colsm-12">
						<div className="wpo-about-text">
							<div className="wpo-section-title">
								<h3>{product.Name}</h3>
							</div>
							<div className="wpo-about-content">
								<CKContent content={product.Teaser} />
							</div>
							<div className="btns view-more-product">
								<Link
									href="/san-pham/ngu-coc-thuc-duong"
									className="theme-btn-s2"
								>
									<a className="view-more-about theme-btn-s2">
										Xem sản phẩm
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12">
						<FadeInWhenVisible
							speed={0.75}
							delay={0.25}
							initialScale={0.9}
						>
							<div className="">
								<Image
									src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product.Thumbnail.url}`}
									alt={`Hinh anh san pham ${product.Name}`}
									height={400}
									width={400}
									objectFit="cover"
									loading="eager"
									placeholder="blur"
									blurDataURL={`/_next/image?url=${process.env.NEXT_PUBLIC_STRAPI_URL}${product.Thumbnail.url}&w=32&q=1`}
								/>
							</div>
						</FadeInWhenVisible>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomepageProduct;
