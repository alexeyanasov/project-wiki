;(function () {
	'use strict'
	const articleElement = document.querySelector('#article')
	const editArticleButton = document.querySelector('#edit-article')

	const id = parseInt(location.search.substr(4))
	const json = localStorage.getItem('articles')
	const articles = JSON.parse(json)

	let article = null
	for (let i = 0; i < articles.length; i++){
		if(articles[i].id === id){
			article = articles[i]
		}
	}

	// console.log(article)
	articleElement.innerHTML = marked(article.content)

	editArticleButton.addEventListener('click', function(){
		location.replace('new.html?id=' + id)
	})



	const lastArticlesListElement = document.querySelector('#last-articles')
	// Последние 2 статьи
	let str = ''
	const countArticle = 2; // кол-во отображаемых статей
	for (let i = articles.length - countArticle; i < articles.length; i++){
		const currentArticle = articles[i]
		str = str + '<li class="articles-list-item"><a href="article.html?id=' + currentArticle.id + '" class="articles-list-link">'+ currentArticle.title +'</a></li>'
	}
	lastArticlesListElement.innerHTML = str

})();