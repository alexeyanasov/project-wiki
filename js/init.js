;(function () {
	'use strict'
	const articles = [
	{
		id: 1,
		title: `## Об авторе`,
		content: `Что бы было интересно обо мне читать, мой рассказ должен быть коротким и содержательным. 
### **_Где родился?_**
Родился я в городе __Минске__. 
### **_Сколько мне лет?_**
Полных __24__ =) 
### **_Любимые стеки технологий?_**
1. HTML
2. CSS
3. PHP
4. Ну и конечно же JS

[![Что я прохожу](https://dmitro.pro/wp-content/uploads/2018/03/js-logo.png) `
	},
	{
		id: 2,
		title: `## Вчера был markdown`,
		content: `Кратко о данном дне:
### **_Шпаргалка markdown_**
[Ссылочка](https://github.com/WebCademy/Markdown-Cheatsheet)
### **_Онлайн редактор для тренировки с разметкой markdown_**
[Ссылочка](https://dillinger.io/)
### **_Библиотека с markdown редактором которую мы подключали в проект_**
[Ссылочка](https://github.com/markedjs/marked)
		`
	}	
	{
		id: 3,
		title: `## Сегодня был localStorage`,
		content: `Кратко о данном дне:
### **_Шпаргалка markdown_**
[Ссылочка](https://github.com/WebCademy/Markdown-Cheatsheet)
### **_Онлайн редактор для тренировки с разметкой markdown_**
[Ссылочка](https://dillinger.io/)
### **_Библиотека с markdown редактором которую мы подключали в проект_**
[Ссылочка](https://github.com/markedjs/marked)
		`
	}
	]
	if(!localStorage.getItem('articles')){
		localStorage.setItem('articles', JSON.stringify(articles))
	}
})();
