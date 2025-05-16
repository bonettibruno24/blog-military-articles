import { articlesData, renderArticles } from './articles-data.js';
import {textArticles, renderRecentArticles} from './recent-articles.js'
import { renderHeader } from './header-component.js';
import { renderFooter } from './footer-component.js';
import { categoryArticle, articles } from './category-articles.js';
import { searchArticles, searchListArticles } from './search-list-articles.js';


document.addEventListener('DOMContentLoaded', () => {
  renderArticles(articlesData);
});
renderRecentArticles(textArticles, 'text-articles-container');

renderHeader('header-container');
renderFooter('footer-container');
categoryArticle(articles, 'article-container');
searchListArticles(searchArticles ,'search-container')
