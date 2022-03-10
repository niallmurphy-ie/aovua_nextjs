import { gql } from '@apollo/client';

export const CEMETERY_SAMPLES = gql`
	query CEMETERY_SAMPLES($slug: String) {
		cemeterySamples(where: { slug: $slug }, sort: "id:desc") {
			Name
			Thumbnail {
				url
			}
			slug
			Body
		}
	}
`;

export const CEMETERY_SERVICES = gql`
	query CEMETERY_SERVICES($slug: String, $limit: Int) {
		cemeteryServices(
			where: { slug: $slug }
			sort: "id:desc"
			limit: $limit
		) {
			Name
			Thumbnail {
				url
			}
			slug
			Body
		}
	}
`;
