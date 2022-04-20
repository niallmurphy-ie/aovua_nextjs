import { gql } from '@apollo/client';

export const PRODUCTS = gql`
	query PRODUCTS {
		products {
			Name
			Thumbnail {
				url
			}
			WideHeaderImage {
				url
			}
			slug
			Teaser
		}
	}
`;

// by slug
export const PRODUCT = gql`
	query PRODUCT($slug: String!) {
		products(where: { slug: $slug }) {
			Name
			Body
			Thumbnail {
				url
			}
			WideHeaderImage {
				url
			}
		}
	}
`;
