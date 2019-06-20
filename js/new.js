;(function () {
	'use strict'

	// Получаем DOM-элементы
	const markdownSourceElement = document.querySelector('#markdown-source')
	const markdownResultElement = document.querySelector('#markdown-result')
	const saveArticleButton = document.querySelector('#save-article-button')
	const articleTitleElement = document.querySelector('#article-title')
	const json = localStorage.getItem('articles')
	const articles = JSON.parse(json)

	const id = parseInt(location.search.substr(4))
	if(id){


		let article = null
		for (let i = 0; i < articles.length; i++){
			if(articles[i].id === id){
				article = articles[i]
			}
		}
		markdownSourceElement.value = article.content
		articleTitleElement.value = article.title

		const result = marked(markdownSourceElement.value)
		markdownResultElement.innerHTML = result
	}
	// Отлавливаем событие по нажатию клавиши
	markdownSourceElement.addEventListener('keyup', function(event){
		// Преобразовываем текст в HTML разметку
		const result = marked(markdownSourceElement.value)
		markdownResultElement.innerHTML = result
	})
	saveArticleButton.addEventListener('click', function(){
		if(id){
			for(let i = 0; i < articles.length; i++){
				if(articles[i].id === id){
					articles[i].title = articleTitleElement.value
					articles[i].content = markdownSourceElement.value
				}
			}
		}else{
			const newArticle = {
				id: 0,
				title: articleTitleElement.value,
				content: markdownSourceElement.value
			}

			newArticle.id = articles.length + 1
			// Добавляем в массив
			articles.push(newArticle)
		}
		localStorage.setItem('articles', JSON.stringify(articles))
		if(id){
			location.replace('article.html?id=' + id)	
		}else{
			location.replace('article.html?id=' + articles[articles.length - 1].id)
		}

	})
})();