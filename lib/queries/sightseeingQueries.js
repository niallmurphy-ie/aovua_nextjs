import { gql } from '@apollo/client';

// where promoted is true
export const SIGHTSEEING_HOMEPAGE = gql`
	query SIGHTSEEING_HOMEPAGE {
		sightseeings(where: { Promoted: true }, sort: "id:desc") {
			Name
			Thumbnail {
				url
			}
			slug
			locations {
				Name
				urlPrefix
			}
		}
	}
`;

export const SIGHTSEEING = gql`
	query SIGHTSEEING($slug: String!) {
		sightseeings(where: { slug: $slug }) {
			Name
			Thumbnail {
				url
			}
			Body
			slug
			locations {
				Name
				urlPrefix
				sightseeings(limit: 5) {
					Name
					Thumbnail {
						formats
					}
					slug
				}
			}
		}
	}
`;
