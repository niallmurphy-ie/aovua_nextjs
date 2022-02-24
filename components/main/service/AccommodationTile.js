import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CKContent from '../../utils/CKContent';

const AccommodationTile = ({ location, accommodation, firstImage }) => (
	<div className="grid">
		<div className="room-item">
			<Image
				src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${accommodation.Thumbnail.url}`}
				alt=""
				// className="img img-responsive"
				loading={firstImage ? 'eager' : 'lazy'}
				height={500}
				width={400}
				objectFit={'cover'}
			/>
			<div className="room-text-show">
				<h2>{accommodation.Name}</h2>
			</div>
			<div className="room-text-hide">
				<h2>{accommodation.Name}</h2>
				{/* <span>{accommodation.RoomCount}</span> */}
				{accommodation.ShortDescription && (
					<CKContent content={accommodation.ShortDescription} />
				)}
				{accommodation.Price && (
					<small>
						<span>{accommodation.Price}</span>
					</small>
				)}
				{
					<Link
						href={`/${location.urlPrefix}/khach-san-nha-hang/${accommodation.slug}`}
					>
						<a className="theme-btn-s2">Xem Thêm</a>
					</Link>
				}
			</div>
		</div>
	</div>
);

export default AccommodationTile;
