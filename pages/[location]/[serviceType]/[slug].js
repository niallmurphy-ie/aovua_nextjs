import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import PageTitle from '../../../components/main/PageTitle';
import Service from '../../../components/main/service/Service';
import client from '../../../lib/apolloClient';
import { ENTERTAINMENT, ENTERTAINMENTS } from '../../../lib/queries';
import { ACCOMMODATION } from '../../../lib/queries/accommodationQueries';
import { LOCATIONS } from '../../../lib/queries/locationQueries';
import { LOCATION_URLPREFIX } from '../../../lib/queries/locationQueries';
import { SIGHTSEEING } from '../../../lib/queries/sightseeingQueries';
import { EVENT } from '../../../lib/queries/eventsQueries';
import {
	CEMETERY_SAMPLES,
	CEMETERY_SERVICES,
} from '../../../lib/queries/cemeteryQueries';
import WithTransition from '../../../components/utils/WithTransition';

const ServicePage = ({
	location,
	entertainment,
	entertainments,
	accommodation,
	sightseeing,
	event,
	cemeterySample,
	cemeteryService,
	cemeterySamples,
	cemeteryServices,
	priceList,
}) => {
	const [url, setUrl] = useState('');
	let pageTitle;
	let breadcrumb;
	const og = { description: '', image: '' };
	if (entertainment) {
		pageTitle = `${entertainment.Name}` || '';
		og.description = `Tại ${location.Name}` || '';
		og.image = entertainment.Thumbnail?.url || '';
		breadcrumb = {
			url: `/${location.urlPrefix}/vui-choi-giai-tri`,
			name: `${location.Name} - Vui chơi giải trí`,
		};
	}
	if (accommodation) {
		pageTitle = `${accommodation.Name}` || '';
		breadcrumb = {
			url: `/${location.urlPrefix}/khach-san-nha-hang`,
			name: `Khách sạn nhà hàng tại ${location.Name}`,
		};
	}
	if (sightseeing) {
		pageTitle = `${sightseeing.Name}` || '';
		breadcrumb = {
			url: `/${location.urlPrefix}/cac-diem-tham-quan`,
			name: `${location.Name} - Các điểm tham quan`,
		};
	}
	if (event) {
		pageTitle = `${event.Name}` || '';
		breadcrumb = {
			url: `/${location.urlPrefix}/hoi-thao-su-kien`,
			name: `${location.Name} - Hội thảo sự kiện`,
		};
	}
	if (cemeterySample) {
		pageTitle = `${cemeterySample.Name}` || '';
		breadcrumb = {
			url: `/${location.urlPrefix}/mau-mo`,
			name: `${location.Name} - Mẫu mộ`,
		};
	}
	if (cemeteryService) {
		pageTitle = `${cemeteryService.Name}` || '';
		breadcrumb = {
			url: `/${location.urlPrefix}/dich-vu`,
			name: `${location.Name} - Dịch vụ`,
		};
	}
	if (priceList) {
		pageTitle = `${priceList.Name}` || '';
		breadcrumb = {
			url: `/${location.urlPrefix}/bang-gia`,
			name: `${location.Name} - Bảng giá`,
		};
	}

	useEffect(() => {
		setUrl(window.location.href);
	}, []);

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={pageTitle} />
				<meta property="og:title" content={pageTitle} />
				<meta property="og:description" content={og.description} />
				{og.image && (
					<meta
						property="og:image"
						content={`${process.env.NEXT_PUBLIC_STRAPI_URL}${og.image}`}
					/>
				)}
			</Head>
			<WithTransition>
				<Service
					location={location}
					entertainment={entertainment}
					accommodation={accommodation}
					sightseeing={sightseeing}
					event={event}
					priceList={priceList}
					cemeterySample={cemeterySample}
					cemeteryService={cemeteryService}
					cemeterySamples={cemeterySamples}
					cemeteryServices={cemeteryServices}
					pageTitle={pageTitle}
					breadcrumb={breadcrumb}
				/>
			</WithTransition>
		</>
	);
};

export async function getStaticPaths() {
	const paths = [];
	const locationsQuery = client.query({
		query: LOCATIONS,
	});
	const cemeterySamples = client.query({
		query: CEMETERY_SAMPLES,
	});
	const cemeteryServices = client.query({
		query: CEMETERY_SERVICES,
	});
	const responses = await Promise.all([
		locationsQuery,
		cemeterySamples,
		cemeteryServices,
	]);

	const locations = responses[0].data.locations;

	console.log('locations', locations);
	locations.forEach((location) => {
		location.entertainments.forEach((entertainment) => {
			paths.push({
				params: {
					location: location.urlPrefix,
					serviceType: 'vui-choi-giai-tri',
					slug: entertainment.slug,
				},
			});
		});
		location.accommodations.forEach((accommodation) => {
			paths.push({
				params: {
					location: location.urlPrefix,
					serviceType: 'khach-san-nha-hang',
					slug: accommodation.slug,
				},
			});
		});
		location.sightseeings.forEach((sightseeing) => {
			paths.push({
				params: {
					location: location.urlPrefix,
					serviceType: 'cac-diem-tham-quan',
					slug: sightseeing.slug,
				},
			});
		});
		location.events.forEach((event) => {
			paths.push({
				params: {
					location: location.urlPrefix,
					serviceType: 'hoi-thao-su-kien',
					slug: event.slug,
				},
			});
		});
		location.PriceList.length > 0 &&
			location.PriceList.forEach((list) => {
				list.slug &&
					paths.push({
						params: {
							location: location.urlPrefix,
							serviceType: 'bang-gia',
							slug: list.slug,
						},
					});
			});
	});

	responses[1].data.cemeterySamples.forEach((sample) => {
		paths.push({
			params: {
				location: 'cong-vien-vinh-hang',
				serviceType: 'mau-mo',
				slug: sample.slug,
			},
		});
	});

	responses[2].data.cemeteryServices.forEach((service) => {
		paths.push({
			params: {
				location: 'cong-vien-vinh-hang',
				serviceType: 'dich-vu',
				slug: service.slug,
			},
		});
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const locationQuery = client.query({
		query: LOCATION_URLPREFIX,
		variables: {
			urlPrefix: context.params.location,
		},
	});

	const entertainmentQuery = client.query({
		query: ENTERTAINMENT,
		variables: {
			slug: context.params.slug,
		},
	});
	const entertainmentsQuery = client.query({
		query: ENTERTAINMENTS,
	});

	const accommodationQuery = client.query({
		query: ACCOMMODATION,
		variables: {
			slug: context.params.slug,
		},
	});

	const sightseeingQuery = client.query({
		query: SIGHTSEEING,
		variables: {
			slug: context.params.slug,
		},
	});

	const eventQuery = client.query({
		query: EVENT,
		variables: {
			slug: context.params.slug,
		},
	});

	const cemeterySampleQuery = client.query({
		query: CEMETERY_SAMPLES,
		variables: {
			slug: context.params.slug,
		},
	});

	const cemeteryServiceQuery = client.query({
		query: CEMETERY_SERVICES,
		variables: {
			slug: context.params.slug,
		},
	});

	const cemeterySamplesQuery = client.query({
		query: CEMETERY_SAMPLES,
	});

	const cemeteryServicesQuery = client.query({
		query: CEMETERY_SERVICES,
	});

	// For priceList
	const locationsQuery = client.query({
		query: LOCATIONS,
	});

	const responses = await Promise.all([
		locationQuery,
		entertainmentQuery,
		entertainmentsQuery,
		accommodationQuery,
		sightseeingQuery,
		eventQuery,
		cemeterySampleQuery,
		cemeteryServiceQuery,
		cemeterySamplesQuery,
		cemeteryServicesQuery,
		locationsQuery,
	]);

	// Flatted all priceLists and find by slug since they aren't a content type
	const allPriceLists = responses[10].data.locations.reduce(
		(lists, location) => {
			location.PriceList.forEach((list) => {
				lists.push(list);
			});
			return lists;
		},
		[]
	);
	const priceList = allPriceLists.filter(
		(list) => list.slug === context.params.slug
	);
	// End priceLists

	return {
		props: {
			location: responses[0].data.locations[0],
			entertainment: responses[1].data.entertainments[0] || null,
			entertainments: responses[2].data.entertainments || null,
			accommodation: responses[3].data.accommodations[0] || null,
			sightseeing: responses[4].data.sightseeings[0] || null,
			event: responses[5].data.events[0] || null,
			cemeterySample: responses[6].data.cemeterySamples[0] || null,
			cemeteryService: responses[7].data.cemeteryServices[0] || null,
			cemeterySamples: responses[8].data.cemeterySamples || null,
			cemeteryServices: responses[9].data.cemeteryServices || null,
			priceList: (priceList && priceList[0]) || null,
		},
	};
}

export default ServicePage;
