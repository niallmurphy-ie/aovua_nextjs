import { gql } from "@apollo/client";

export const HOMEPAGE = gql`
	query COMBINED_HOMEPAGE_QUERY {
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
			LocationsText
			SightseeingText
		}
		homepageDaoNgocXanh {
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
			LocationsText
			SightseeingText
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
			sightseeings(where: { Promoted: true }, sort: "id:desc") {
				Name
				Thumbnail {
					url
				}
			}
			events(where: { Promoted: true }, sort: "id:desc") {
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
			ShortDescription
		}
	}
`;
