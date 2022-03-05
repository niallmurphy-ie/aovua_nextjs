import { gql } from '@apollo/client';

export const EVENT = gql`
	query EVENT($slug: String!) {
		events(where: { slug: $slug }) {
			Name
			Thumbnail {
				url
			}
			Body
			slug
			locations {
				Name
				urlPrefix
				events(limit: 5) {
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
