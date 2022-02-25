import { gql } from '@apollo/client';

export const ENTERTAINMENT = gql`
	query ENTERTAINMENT($slug: String!) {
		entertainments(where: { slug: $slug }) {
			Name
			Body
			locations {
				Name
				urlPrefix
				entertainments(limit: 5) {
					Name
					Thumbnail {
						formats
					}
					slug
				}
			}
			Thumbnail {
				url
			}
		}
	}
`;

export const ENTERTAINMENTS = gql`
	query ENTERTAINMENT($Promoted: Boolean) {
		entertainments(where: { Promoted: $Promoted }) {
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

export const ABOUT = gql`
	query About {
		about {
			Body
			MissionStatement
		}
	}
`;
