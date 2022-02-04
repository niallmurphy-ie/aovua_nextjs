import { gql } from '@apollo/client';

export const ARTICLES = gql`
	query ARTICLES($categoryID: ID) {
		articles(where: { categories: { id: $categoryID } }) {
			Title
			Body
			locale
			Date
			id
			slug
			Thumbnail {
				url
				alternativeText
				caption
				formats
			}
			categories {
				CategoryName
				id
				urlPrefix
			}
		}
	}
`;

export const ARTICLE = gql`
	query ARTICLE($slug: String!) {
		articles(where: { slug: $slug }) {
			slug
			Title
			Date
			Body
			categories {
				CategoryName
				urlPrefix
			}
			Thumbnail {
				url
				alternativeText
				caption
			}
		}
	}
`;

export const CATEGORIES = gql`
	query Categories {
		categories {
			id
			CategoryName
			urlPrefix
			articles {
				Title
				slug
			}
		}
	}
`;

export const CATEGORY = gql`
	query Category($urlPrefix: String!) {
		categories(where: { urlPrefix: $urlPrefix }) {
			CategoryName
			urlPrefix
			id
			articles {
				Title
				slug
				Date
				categories {
					CategoryName
					urlPrefix
					id
				}
				Body
				Thumbnail {
					url
					caption
					alternativeText
				}
			}
		}
	}
`;