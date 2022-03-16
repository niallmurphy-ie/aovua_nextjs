import { gql } from '@apollo/client';

export const LOCATIONS = gql`
	query Locations($urlPrefix: String) {
		locations(where: { urlPrefix: $urlPrefix }) {
			id
			Name
			urlPrefix
			Thumbnail {
				url
			}
			sightseeings {
				slug
			}
			accommodations(sort: "id:desc") {
				Name
				ShortDescription
				Thumbnail {
					url
				}
				slug
			}
			entertainments(sort: "id:desc") {
				Name
				Body
				slug
				Thumbnail {
					url
				}
				locations {
					Name
					urlPrefix
				}
			}
			events(sort: "id:desc") {
				Name
				Body
				slug
				Thumbnail {
					url
				}
				locations {
					Name
					urlPrefix
				}
			}
			PriceList {
				Name
				Body
				slug
				Thumbnail {
					url
				}
			}
		}
	}
`;

export const LOCATION = gql`
	query LOCATION($id: ID!, $limit: Int) {
		location(id: $id) {
			Name
			urlPrefix
			entertainments(limit: $limit) {
				Name
				Thumbnail {
					url
				}
				slug
			}
			accommodations {
				Name
				Thumbnail {
					url
				}
				slug
				ShortDescription
			}
			sightseeings {
				Name
				Thumbnail {
					url
				}
				slug
			}
			events {
				Name
				Thumbnail {
					url
				}
				slug
			}
			LocationDescription
			Media {
				url
				alternativeText
				caption
			}
			WideHeaderImage {
				url
				alternativeText
				caption
			}
			GoogleMapsURL
			FacebookPageURL
			articles(sort: "Date:desc", limit: $limit) {
				Title
				Thumbnail {
					url
					formats
				}
				Date
				slug
				categories {
					urlPrefix
					CategoryName
				}
			}
			Phone
			Email
			PriceList {
				Name
				Body
				slug
				Thumbnail {
					url
				}
			}
		}
	}
`;

export const LOCATION_URLPREFIX = gql`
	query LOCATION_URLPREFIX($urlPrefix: String!, $Promoted: Boolean) {
		locations(where: { urlPrefix: $urlPrefix }) {
			Name
			LocationDescription
			urlPrefix
			Thumbnail {
				url
			}
			Media {
				url
				alternativeText
				caption
			}
			WideHeaderImage {
				url
				alternativeText
				caption
			}
			GoogleMapsURL
			accommodations(sort: "id:desc") {
				Name
				ShortDescription
				Thumbnail {
					url
				}
				slug
				Price
			}
			entertainments(where: { Promoted: $Promoted }) {
				Name
				Body
				slug
				Thumbnail {
					url
				}
				locations {
					Name
					urlPrefix
				}
			}
			sightseeings {
				Name
				Thumbnail {
					url
				}
				slug
			}
			events(sort: "id:desc") {
				Name
				Body
				slug
				Thumbnail {
					url
				}
				locations {
					Name
					urlPrefix
				}
			}
			articles(sort: "Date:desc") {
				Title
				Thumbnail {
					url
				}
				Date
				slug
				categories {
					urlPrefix
				}
			}
			PriceList {
				Name
				Body
				slug
				Thumbnail {
					url
				}
			}
			Phone
			Email
		}
	}
`;

export const LOCATIONS_MAPS = gql`
	query LOCATIONS_MAPS {
		locations {
			Name
			GoogleMapsURL
		}
	}
`;

export const LOCATION_PRICES = gql`
	query LOCATION_PRICES($urlPrefix: String) {
		locations(where: { urlPrefix: $urlPrefix }) {
			Name
			urlPrefix
			PriceList {
				Name
				Body
				WideHeaderImage {
					url
				}
			}
		}
	}
`;
