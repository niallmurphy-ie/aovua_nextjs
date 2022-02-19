import { gql } from '@apollo/client';

// where promoted is true
export const SIGHTSEEING_HOMEPAGE = gql`
	query SIGHTSEEING_HOMEPAGE {
		sightseeings(where: { Promoted: true }, sort: "id:desc") {
			Name
			Thumbnail {
				url
			}
			slug
			locations {
				Name
				urlPrefix
			}
		}
	}
`;