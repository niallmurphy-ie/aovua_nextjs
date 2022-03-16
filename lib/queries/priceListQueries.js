import { gql } from '@apollo/client';

export const PRICELIST = gql`
	query PRICELIST($slug: String!) {
		priceLists(where: { slug: $slug }) {
			Name
			Body
			slug
			Thumbnail {
				url
			}
			WideHeaderImage {
				url
			}
		}
	}
}
`;
