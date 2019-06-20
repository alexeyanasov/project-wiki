;(function () {
	'use strict'
// 	const articles = [
// 	{
// 		id: 1,
// 		title: 'Заголовк',
// 		content: 'Контент'
// 	},
// 	{
// 		id: 2,
// 		title: 'Заголовк 2',
// 		content: 'Контент 2'
// 	}
// 	]
// 	// Получаем DOM-элементы
// 	const markdownResultElement = document.querySelector('#markdown-result')
// 	console.log(markdownResultElement)
// 	const str = `
// 	# Заголовок статьи
// Далеко-далеко за [словесными горами в стране](#), гласных и согласных живут рыбные тексты. Использовало однажды гор семь, снова раз. Города большой безорфографичный меня.
// Lorem имени, продолжил своего реторический своих послушавшись грустный даль страну парадигматическая океана рыбными, рыбного переписывается, страна? Свой заголовок свое, он.
// ## Заголовок второго уровня
// Что, повстречался последний всеми его щеке не, знаках встретил использовало, прямо, раз свой. Города силуэт, заглавных всеми, свою прямо но!
// Текстов которой вскоре журчит рекламных свою, сбить на берегу рот. Великий страну проектах знаках над что путь языком, подпоясал, свой они!
// ### Заголовок третьего уровня
// Скатился переулка первую единственное имени над запятых, грустный заголовок переписывается власти переписали. Букв строчка вскоре продолжил, страна злых раз страну.
// Букв переписали, продолжил. Силуэт, путь текста журчит переписывается назад от всех его выйти однажды, бросил букв, путь несколько вскоре даже рукопись.

// [Алексей](http://github.com)`

// 	markdownResultElement.innerHTML = marked(str)
	const markdownResultElement = document.querySelector('#markdown-result')
	const lastArticlesListElement = document.querySelector('#last-articles')
	const allArticlesListElement = document.querySelector('#all-articles')
	const readArticleButton = document.querySelector('#read-article')

	const json = localStorage.getItem('articles')
	const articles = JSON.parse(json)

	// console.log(articles)

	const article = articles[articles.length - 1]
	// console.log(article)
	// Опубликовываем 200 символов последней статьи
	markdownResultElement.innerHTML = marked(article.content.substr(0, 200) + '...')


	// Список статей
	let str = ''
	for(let i = 0; i < articles.length; i++){
		const currentArticle = articles[i]
		str = str + '<li class="other-list__item"><a class="other-list__link" href="article.html?id=' + currentArticle.id + '">' + currentArticle.title + '</a></li>'
	}
	console.log(str)
	// allArticlesListElement.innerHTML = `<li class="other-list__item"><a class="other-list__link" href="#">Lorem ipsum dolor sit amet.</a></li>`
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