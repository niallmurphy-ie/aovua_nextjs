// Return url for article
export const articleUrl = (article) => {
	if (!article.categories) return null;
	const category = returnCorrectCategory(article.categories);
	if (!category) return null;
	return `${category.urlPrefix}${article.slug}`;
};

// Using a category, return articles and proper urls
export const articleDataFromCategory = (category) => {
	if (!category) return [];
	if (!category.articles) return [];
	if (category.articles.length === 0) return [];

	return category.articles.map((article) => articleDataFromArticle(article));
};

export const articleDataFromArticle = (article) => {
	const articleCategory = returnCorrectCategory(article.categories);
	return {
		Title: article.Title,
		url: `${articleCategory.urlPrefix}${article.slug}`,
		Date: article.Date,
		Body: article.Body,
		Thumbnail: article.Thumbnail ? article.Thumbnail : null,
		category: articleCategory,
	};
};

// Don't return article ID of 4 which is the "News" category.
// The old URLs didn't use the news one if it had multiple categories
const returnCorrectCategory = (categories) => {
	if (!categories) return null;
	if (categories.length === 0) return null;
	if (categories.length === 1) {
		return categories[0];
	}
	// Just return the first category. 301 redirects for whatever is broken after.
	// No need to complicate the code for the sake of a few hours hard labour.
	if (categories.length > 1) {
		return categories.filter((category) => category.id !== 4)[0].urlPrefix;
	}
};
