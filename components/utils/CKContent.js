import React from 'react';
import parse from 'html-react-parser';
import Loading from '../Loading';

function CKContent({ content }) {
	// const [body, setBody] = React.useState(null);

	// React.useEffect(() => {
	// 	setBody(parse(content));
	// }, [content]);

	if (!content) return <Loading />;
	return <div className="ck-content">{parse(content)}</div>;
}

export default CKContent;
