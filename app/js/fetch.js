'use strict';
/*
	Написать приложение для работы с REST сервисом,
	все функции делают запрос и возвращают Promise
	с которым потом можно работать.

	Реализовать следующий функционал:
	- функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.

	- функция getUserById(id) - должна вернуть пользователя с переданным id.

	- функция addUser(name, age) - должна записывать в БД юзера с полями name и age.

	- функция removeUser(id) - должна удалять из БД юзера по указанному id.

	- функция updateUser(id, user) - должна обновлять данные пользователя по id.
		user это объект с новыми полями name и age.
	Документацию по бэкенду и пример использования прочитайте
	в документации https://github.com/trostinsky/users-api#users-api.
	Сделать минимальный графический интерфейс в виде панели с полями и кнопками.
	А так же панелью для вывода результатов операций с бэкендом.
	*/

// const url = `https://test-users-api.herokuapp.com/users/`;

// const form = document.querySelector('.form');
// const input = document.querySelector('.form-text');

// const btnUser = document.querySelector('.user-list');
// const ul = document.querySelector('.list');

// const formAdd = document.querySelector('.form-add');
// const inputName = document.querySelector('.form-name');
// const inputAge = document.querySelector('.form-age');

// const formDel = document.querySelector('.form-del');
// const inputDel = document.querySelector('.form-del-id');

// const formUpdate = document.querySelector('.form-update');
// const inputIdforUpdate = document.querySelector('.form-update-id');
// const inputNameUpdate = document.querySelector('.form-update-name');
// const inputAgeUpdate = document.querySelector('.form-update-age');



// btnUser.addEventListener('click', getAllUsers);
// form.addEventListener('submit', getUserById);
// formAdd.addEventListener('submit', addInputs);
// formDel.addEventListener('submit', getIdForDel);
// formUpdate.addEventListener('submit', setChangeUser);


// function getAllUsers() {
//   fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     let arr = data.data;
//     let result = arr.reduce((acc, el) => acc + `<li>name: ${el.name} - ID: ${el.id} - age: ${el.age}</li>`, '')
//     ul.innerHTML = result;
//   })
//   .then(er => console.log(er))
// };

// function returnProm(id){
//   return fetch(url + id)
// };

// function getUserById() {
//   event.preventDefault();
//   returnProm(input.value)
//   .then(response => response.json())
//   .then(data => {
//     ul.innerHTML = `name: ${data.data.name}, age: ${data.data.age}`;
//   })
//   input.value = '';
// };


// function addInputs(){
//   event.preventDefault();
//   let name = inputName.value;
//   let age = inputAge.value;
//   addUser(name,age);
//   inputName.value = '';
//   inputAge.value = '';
// };

// function addUser(name, age) {
//   fetch('https://test-users-api.herokuapp.com/users/', {
//   method: 'POST',
//   body: JSON.stringify({ name, age }),
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   }
// })
// };

// function getIdForDel(){

// event.preventDefault();
// let id = inputDel.value;
// removeUser(id);

// inputDel.value = '';
// };

// function removeUser(id){
//   fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
//     method: 'DELETE'
//   })
//   .then(response => response.json())// проблема с перерисовкой!
//   .then(getAllUsers())
// };


// function setChangeUser(){
//   event.preventDefault();
//  let id = inputIdforUpdate.value;
//   // let user = {
//     let name= inputNameUpdate.value;
//     let age = inputAgeUpdate.value;
//     console.log(name, age, id);
//   // }// попробовать через обьект
// updateUser(id,name, age);

// };

// function updateUser(id, name, age){
// fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({name, age}),
//     headers: {
//     Accept: 'application/json',
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
// };




// $(".map-ukraine-items__box li").each(function(index) {
//   console.log(index + ":" + $(this).html(a) );
// });
//=========================================

const url = 'http://9271eca2.ngrok.io/api/ru/news';
fetch(url)
.then(response => response.json())
.then(data => {
		for (var i = 0; i < data.results.length; i++) {

			var newpubdate = data.results[i].pub_date;

			newpubdate = newpubdate.replace('T',' ');

			var newsdescription = data.results[i].content_ru;
			var newsbackground = data.results[i].image;

			$('.news__wrapper > .container > .row').append(
				'<div class="col-md-3">'
				+ '<div class="news-item__box">'
					+	'<div class="news-item-data__box">' + newpubdate + '</div>'
						+ '<div class="news-item-banner__box" style="background: url(' + newsbackground + ');">'
							+ '<a class="news-item-banner-link" href="javascript:void(0)">Читати</a>'
						+ '</div>'
						+ '<div class="news-item-info__box">' + newsdescription + '</div>'
					+ '</div>'
				+ '</div>'
				);

			var lenght = $('.news__wrapper .col-md-3').length;
			if ( lenght == 8 ) {
				break
			}

		}

		// $.each(data, function(i, item){

			// newsdescription = data.results[i].title;

			// console.log(data);

			// $('.news__wrapper > .container > .row').append(
			// 	'<div class="col-md-3">'
			// 	+ '<div class="news-item__box">'
			// 		+	'<div class="news-item-data__box">' + newsdescription + '</div>'
			// 			+ '<div class="news-item-banner__box">'
			// 				+ '<a class="news-item-banner-link" href="javascript:void(0)">Читати</a>'
			// 			+ '</div>'
			// 			+ '<div class="news-item-info__box">' + newsdescription + '</div>'
			// 		+ '</div>'
			// 	+ '</div>'
			// 	);

			// var lenght = $('.news__wrapper .col-md-3').length;
			// if ( lenght == 8 ) {
			// 	return false;
			// }

		// })

	})