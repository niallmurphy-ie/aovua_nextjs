const FacebookPage = ({ url, name }) => {
	return (
		<div
			className="fb-page"
			data-href={url}
			data-tabs="timeline"
			data-width="700"
			data-height="400"
			data-small-header="true"
			data-adapt-container-width="true"
			data-hide-cover="true"
			data-show-facepile="true"
			data-lazy="true"
		>
			<blockquote cite={url} className="fb-xfbml-parse-ignore">
				<a href={url}>{name}</a>
			</blockquote>
		</div>
	);
};

export default FacebookPage;
