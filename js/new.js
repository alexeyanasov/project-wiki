;(function () {
	'use strict'

	// Получаем DOM-элементы
	const markdownSourceElement = document.querySelector('#markdown-source')
	const markdownResultElement = document.querySelector('#markdown-result')
	const saveArticleButton = document.querySelector('#save-article-button')
	const articleTitleElement = document.querySelector('#article-title')

	// markdownSourceElement.value = 'Тестовая строка от JS'
	// markdownResultElement.innerHTML = 
	// `
	// 	<h1>Заголовок статьи</h1>
	// 	<p>Далеко-далеко за <a href="#">словесными горами в стране</a>, гласных и согласных живут рыбные тексты. Использовало однажды гор семь, снова раз. Города большой безорфографичный меня.</p>
	// 	<p>Lorem имени, продолжил своего реторический своих послушавшись грустный даль страну парадигматическая океана рыбными, рыбного переписывается, страна? Свой заголовок свое, он.</p>
	// 	<h2>Заголовок второго уровня</h2>
	// 	<p>Что, повстречался последний всеми его щеке не, знаках встретил использовало, прямо, раз свой. Города силуэт, заглавных всеми, свою прямо но!</p>
	// 	<p>Текстов которой вскоре журчит рекламных свою, сбить на берегу рот. Великий страну проектах знаках над что путь языком, подпоясал, свой они!</p>
	// 	<h3>Заголовок третьего уровня</h3>
	// 	<p>Скатился переулка первую единственное имени над запятых, грустный заголовок переписывается власти переписали. Букв строчка вскоре продолжил, страна злых раз страну.</p>
	// 	<p>Букв переписали, продолжил. Силуэт, путь текста журчит переписывается назад от всех его выйти однажды, бросил букв, путь несколько вскоре даже рукопись.</p>
	// `	
	markdownSourceElement.value = `# Заголовок статьи
Далеко-далеко за [словесными горами в стране](#), гласных и согласных живут рыбные тексты. Использовало однажды гор семь, снова раз. Города большой безорфографичный меня.
Lorem __имени__, продолжил _своего_ реторический своих послушавшись грустный даль страну парадигматическая океана рыбными, рыбного переписывается, страна? Свой заголовок свое, он.
## Заголовок второго уровня
Что, повстречался последний всеми его щеке не, знаках встретил использовало, прямо, раз свой. Города силуэт, заглавных всеми, свою прямо но!
Текстов которой вскоре журчит рекламных свою, сбить на берегу рот. Великий страну проектах знаках над что путь языком, подпоясал, свой они!
### Заголовок третьего уровня
Скатился переулка первую единственное имени над запятых, грустный заголовок переписывается власти переписали. Букв строчка вскоре продолжил, страна злых раз страну.
Букв переписали, продолжил. Силуэт, путь текста журчит переписывается назад от всех его выйти однажды, бросил букв, путь несколько вскоре даже рукопись.

[by Алексей](http://github.com)`

	// Отлавливаем событие по нажатию клавиши
	markdownSourceElement.addEventListener('keyup', function(event){
		// console.log('fired')
		// Записываем в консоль что ввели в текстовом поле
		// console.log(markdownSourceElement.value)

		// Преобразовываем текст в HTML разметку
		const result = marked(markdownSourceElement.value)
		markdownResultElement.innerHTML = result
		// console.log(result)
	})
	saveArticleButton.addEventListener('click', function(){
		// console.log('fired')
		const newArticle = {
			id: 0,
			title: articleTitleElement.value,
			content: markdownSourceElement.value
		}
		// console.log(newArticle)
		// Возвращаем строку
		const json = localStorage.getItem('articles')
		// Преобразовываем в объект
		const articles = JSON.parse(json)
		// console.log(articles)
		// id + 1
		newArticle.id = articles.length + 1
		// Добавляем в массив
		articles.push(newArticle)
		localStorage.setItem('articles', JSON.stringify(articles))
	})

	console.log(markdownSourceElement, markdownResultElement)
})();