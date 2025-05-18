import { articlesData, renderArticles } from './assets/js/classified-articles.js';
import {textArticles, renderRecentArticles} from './assets/js/recent-articles.js'
import { renderHeader } from './assets/js/header-component.js';
import { renderFooter } from './assets/js/footer-component.js';
import { categoryArticle, articles } from './assets/js/category-articles.js';
import { searchArticles, searchListArticles } from './assets/js/search-list-articles.js';


document.addEventListener('DOMContentLoaded', () => {
  renderArticles(articlesData);
});
renderRecentArticles(textArticles, 'text-articles-container');

renderHeader('header-container');
renderFooter('footer-container');
categoryArticle(articles, 'article-container');
searchListArticles(searchArticles ,'search-container')
