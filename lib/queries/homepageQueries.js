import { gql } from '@apollo/client';

export const HOMEPAGE = gql`
	query HOMEPAGE {
		homepage {
			HomepageLocationsSlider {
				Name
				HeroImage {
					url
				}
				Description
				Link
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

export const HOMEPAGE_LOCATIONS = gql`
	query Locations {
		locations {
			id
			Name
			urlPrefix
			Thumbnail {
				url
			}
			accommodations(where: { Promoted: true }, sort: "id:desc") {
				Name
				ShortDescription
				Thumbnail {
					url
				}
				slug
				Price
			}
			sightseeings {
				Name
				Thumbnail {
					url
				}
			}
		}
	}
`;
