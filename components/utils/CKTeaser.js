import React from 'react';
import CKContent from './CKContent';

const CKTeaser = ({ content, length }) => {
	const strippedContent = content.replace(/<(?:.|\n)*?>/gm, '');
	const teaser = strippedContent.substring(0, length);
	return <CKContent content={teaser} />;
};

export default CKTeaser;
