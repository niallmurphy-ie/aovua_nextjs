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
