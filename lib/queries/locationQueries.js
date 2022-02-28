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
		}
	}
`;

export const LOCATION = gql`
	query LOCATION($id: ID!) {
		location(id: $id) {
			Name
			urlPrefix
			entertainments {
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
		}
	}
`;

export const LOCATION_URLPREFIX = gql`
	query LOCATION_URLPREFIX($urlPrefix: String!) {
		locations(where: { urlPrefix: $urlPrefix }) {
			Name
			LocationDescription
			urlPrefix
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
		}
	}
`;
