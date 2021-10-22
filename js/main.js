$(document).ready(function () { /*проверка готовности сайта (документа) к манипуляциям с помощью js*/
	var currentFloor = 2; //перменная, где хранится текущий этаж
	var counterUp = $('.counter_up'); //кнопки вверх и вниз
	var counterDown = $('.counter_down');
	var floorPath = $('.select_floors path'); //каждый отдельный этаж в svg

	// функция при наведении мышью на этаж
	floorPath.on('mouseover', function () {
		floorPath.removeClass('current_floor'); //удаление активного класса у всех этажей
		currentFloor = $(this).attr('data-floor'); //получение значения номера текущего этажа
		$('.counter').text(currentFloor); //записываем значение в счётчик
	});
	
	//отслеживается клик по кнопке вверх
	counterUp.on('click', function () { 
		//currentFloor++;
		// if(currentFloor==19) return;
		// if(currentFloor<10)	$('.counter').text('0'+currentFloor);
		// else $('.counter').text(currentFloor);

		if(currentFloor < 18) {
			currentFloor++; //проверяем значение номера этажа
			usСurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false}); //отформатированное число (01 вместо 1)
			$('.counter').text(usСurrentFloor); //записываем значение в счётчик

			floorPath.removeClass('current_floor'); //удаляем активный класс у этажей
			$(`[data-floor = ${usСurrentFloor}]`).toggleClass("current_floor"); //подсвечиваем текущий этаж
		}
	});

	counterDown.on('click', function () {

		if(currentFloor > 2) {
			currentFloor--;
			usСurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false}); //отформатированное число (01 вместо 1)
			$('.counter').text(usСurrentFloor);

			floorPath.removeClass('current_floor');
			$(`[data-floor = ${usСurrentFloor}]`).toggleClass("current_floor");
		}
	});

	var modal = $('.modal');
	var modalCloseButton= $('.modal_close_button');
	var viewFlats = $('.button_primery');
	floorPath.on('click', toggleModal); /*при клике на этаж вызвать функцию toggleModal, чтобы появилось окно*/
	modalCloseButton.on('click', toggleModal); /*при клике на крестик вызвать функцию toggleModal, чтобы скрылось окно*/
	viewFlats.on('click', toggleModal);
	
	function toggleModal() {
		modal.toggleClass("is-open");
	};
});