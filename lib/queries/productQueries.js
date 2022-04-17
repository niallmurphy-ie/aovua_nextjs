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
		}
	}
`;
