import { gql } from '@apollo/client';

export const FOOTER = gql`
	query Footer {
		footer {
			Contact
			CopyrightTextNoYear
		}
	}
`;
