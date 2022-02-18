import { gql } from '@apollo/client';

// query by slug
export const ACCOMMODATION = gql`
	query ACCOMMODATION($slug: String!) {
		accommodations(where: { slug: $slug }) {
			Name
			ShortDescription
			Body
			Thumbnail {
				url
			}
			locations {
				Name
				urlPrefix
			}
		}
	}
`;