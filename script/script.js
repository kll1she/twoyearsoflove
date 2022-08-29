// Сортировка
var q1 = document.querySelector('#q1');
var q2 = document.querySelector('#q2');
var flex = document.querySelector('.flex');

q1.onclick = function () {
	if (flex.classList.contains('sort-function')) {
		flex.classList.remove('sort-function');
	}
}

q2.onclick = function () {
	flex.classList.add('sort-function');
}

// Кнопка фильтр
var filter = document.querySelector('.filter');
var sort_button = document.querySelector('.sort');

filter.onclick = function () {
	sort_button.classList.toggle('hidden');
}