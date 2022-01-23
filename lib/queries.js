import { gql } from '@apollo/client';

export const HOMEPAGE = gql`
	query HOMEPAGE {
		homepage {
			HeroImages {
				url
				caption
				alternativeText
			}
			Greeting
			GreetingImage {
				url
				caption
				alternativeText
			}
			GreetingYoutubeURL
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

export const ARTICLES = gql`
	query ARTICLES {
		articles {
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

export const ENTERTAINMENT = gql`
	query ENTERTAINMENT($slug: String!) {
		entertainments(where: { slug: $slug }) {
			Name
			Body
			locations {
				Name
				urlPrefix
			}
		}
	}
`;

export const ENTERTAINMENTS = gql`
	query ENTERTAINMENT {
		entertainments {
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
`;

export const CONTACT_PAGE = gql`
	query Contact {
		contact {
			Phone
			Email
			Address
		}
	}
`;
