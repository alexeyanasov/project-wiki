;(function () {
	'use strict'
	const markdownResultElement = document.querySelector('#markdown-result')
	const lastArticlesListElement = document.querySelector('#last-articles')
	const allArticlesListElement = document.querySelector('#all-articles')
	const readArticleButton = document.querySelector('#read-article')

	const json = localStorage.getItem('articles')
	const articles = JSON.parse(json)

	const article = articles[articles.length - 1]
	// Опубликовываем 200 символов последней статьи
	markdownResultElement.innerHTML = marked(article.content.substr(0, 200) + '...')


	// Список статей
	let str = ''
	for(let i = 0; i < articles.length; i++){
		const currentArticle = articles[i]
		str = str + '<li class="other-list__item"><a class="other-list__link" href="article.html?id=' + currentArticle.id + '">' + currentArticle.title + '</a></li>'
	}
	// console.log(str)
	allArticlesListElement.innerHTML = str

	// Последние 2 статьи
	str = ''
	const countArticle = 2; // кол-во отображаемых статей
	for (let i = articles.length - countArticle; i < articles.length; i++){
		const currentArticle = articles[i]
		str = str + '<li class="articles-list-item"><a href="article.html?id=' + currentArticle.id + '" class="articles-list-link">'+ currentArticle.title +'</a></li>'
	}
	lastArticlesListElement.innerHTML = str

	// Кнопка перехода на статью
	readArticleButton.addEventListener('click', function(){
		location.replace('article.html?id=' + article.id)
	})
})();