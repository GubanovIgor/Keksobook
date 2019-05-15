'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var mapPins = document.querySelector('.map__pins');
var pin = document.querySelector('#template-element').content.querySelector('.map__pin');

var map = document.querySelector('.map');
var mapCard = document.querySelector('#template-element').content.querySelector('.map__card');

/**4 день*/

var x = 0;
var mapPinMain = document.querySelector('.map__pin--main');

mapPinMain.addEventListener('mouseup', function(){
	//if (x == 0) {
		map.classList.remove('map--faded');
		window.download(onError, onSuccess);
	//}	
	//x = 1;
	removeDisabled(noticeFieldsets);
})

var noticeDiv = document.querySelector('.notice');
var noticeFieldsets = noticeDiv.querySelectorAll('fieldset');

var getDisabled = function(massive) {
	for(var i = 0; i < massive.length; i++) {
		massive[i].setAttribute('disabled', '');
	}
}

var removeDisabled = function (massive) {
	for(var i = 0; i < massive.length; i++) {
		massive[i].removeAttribute('disabled', '');
	}
}

getDisabled(noticeFieldsets);

/**День 6*/

var onError = function(error) {
	console.log ('Произошла ошибка' + error)
};

var createCard = function(card) {
	var cardElement = mapCard.cloneNode(true);

	cardElement.querySelector('.popup__avatar').setAttribute('src', card.author.avatar);
	cardElement.querySelector('h3').textContent = card.offer.title;
	cardElement.querySelector('small').textContent = card.offer.address;
	cardElement.querySelector('.popup__close').setAttribute('tabindex', '0');
	cardElement.querySelector('.popup__price').textContent = card.offer.price+'₽/ночь';
	cardElement.querySelector('h4').textContent = card.offer.type;
	cardElement.querySelector('.popup__text--capacity').textContent = card.offer.rooms+' комнаты для '+card.offer.guests+' гостей.'
	cardElement.querySelector('.popup__text--time').textContent = 'Заезд после '+card.offer.checkin+', выезд до '+card.offer.checkout;
	cardElement.querySelector('.popup__close').setAttribute('tabindex', '0');
	cardElement.querySelector('.popup__description').textContent = card.offer.description;
	for (var i = 0; i < card.offer.features.length; i++) {
		var li = document.createElement('li');

		cardElement.querySelector('.popup__features').appendChild(li).classList.add('feature');
		cardElement.querySelector('.popup__features').appendChild(li).classList.add('feature--'+card.offer.features[i]);
	}

	cardElement.classList.add('check-open');

	cardElement.querySelector('.popup__close').addEventListener('click', function(evt) {
		cardElement.remove();
	});

	for (var k = 0; k < card.offer.features.length; k++) {
		var li = document.createElement('li');
		//getComforts(li, i, k);
		cardElement.querySelector('.popup__features').appendChild(li);
	}


	map.appendChild(cardElement);
};

var createPin = function(info) {
	var pinElement = pin.cloneNode(true);

	pinElement.querySelector('img').setAttribute('src', info.author.avatar);
	pinElement.setAttribute('style', "left: "+info.location.x+"px; "+"top: "+info.location.y+"px;");
	pinElement.querySelector('img').setAttribute('title', info.offer.title);
	pinElement.setAttribute('tabindex', '0');

	pinElement.addEventListener('click', function() {
		createCard(info);
	});

	pinElement.addEventListener('click', function() {
		var cardMassive = document.querySelectorAll('.check-open');
		if (cardMassive.length > 1) {
			document.querySelector('.check-open').remove();
		}
	})

	return(pinElement);
};

window.massiveFromServer = [];

var onSuccess = function(massive) {
	massiveFromServer = massive;
	filterAnnouncement(massiveFromServer);
};

window.filterAnnouncement = function (massive) {
	mapPins.innerHTML = '';

	var fragment = document.createDocumentFragment();
	var newMassvive = filterPin(massive);
	for (var i = 0; i < newMassvive.length; i++) {
		fragment.appendChild(createPin(newMassvive[i]))
	}
	mapPins.appendChild(fragment);
};
































