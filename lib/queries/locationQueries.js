import { gql } from '@apollo/client';

export const LOCATIONS = gql`
	query Locations {
		locations {
			id
			Name
			urlPrefix
			Thumbnail {
				url
			}
		}
	}
`;

export const LOCATION = gql`
	query LOCATION($id: ID!) {
		location(id: $id) {
			Name
			urlPrefix
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
		}
	}
`;