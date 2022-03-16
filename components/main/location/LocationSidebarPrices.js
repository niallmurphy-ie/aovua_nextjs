import React from "react";
import Link from "next/link";

const LocationSidebarPrices = ({location}) => {
	return (
		<div className="wpo-blog-sidebar">
			<div className="widget">
				<h3>Bảng giá dịch vụ</h3>
			</div>
			{location.PriceList.map((priceList, index) => (
				<h4 key={`priceList_${index}`}>
					<Link
						href={`/${location.urlPrefix}/bang-gia/${priceList.slug}`}
					>
						<a>{priceList.Name}</a>
					</Link>
				</h4>
			))}
		</div>
	);
}

export default LocationSidebarPrices;