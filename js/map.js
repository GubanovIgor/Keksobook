document.querySelector('.map').classList.remove('map--faded');
var mapPins = document.querySelector('.map__pins');
var pin = document.querySelector('#template-element').content.querySelector('.map__pin');

var map = document.querySelector('.map');
var mapCard = document.querySelector('#template-element').content.querySelector('.map__card');

var getRandomArbitary = function(min, max) {
	return (Math.floor(Math.random() * (max - min) + min));
};

var announcements = [
	{
		author: {
			avatar: 'img/avatars/user01.png'
		},
		offer: {
			title: 'Большая уютная квартира',
			address: '600, 350',
			price: '1200',
			type: 'Квартира',
			rooms: '3',
			guests: '5',
			checkin: '12:00',
			checkout: '10:00',
			features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
			description: 'Описание хибары',
			photos: ['img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user08.png'],
			locate: 'left:'+getRandomArbitary(0, 1200)+'px; top:'+getRandomArbitary(130,630)+'px'
		}
	},
	{
		author: {
			avatar: 'img/avatars/user02.png'
		},
		offer: {
			title: 'Маленькая неуютная квартира',
			address: '600, 350',
			price: '5200',
			type: 'Квартира',
			rooms: '3',
			guests: '5',
			checkin: '12:00',
			checkout: '10:00',
			features: ['conditioner', 'elevator', 'parking', 'washer'],
			description: 'Описание хибары',
			photos: '',
			locate: 'left:'+getRandomArbitary(0, 1200)+'px; top:'+getRandomArbitary(130,630)+'px'
		}
	},
	{
		author: {
			avatar: 'img/avatars/user03.png'
		},
		offer: {
			title: 'Огромный прекрасный дворец',
			address: '600, 350',
			price: '1800',
			type: 'Дворец',
			rooms: '3',
			guests: '5',
			checkin: '12:00',
			checkout: '10:00',
			features: ['conditioner', 'dishwasher', 'parking', 'elevator'],
			description: 'Описание хибары',
			photos: '',
			locate: 'left:'+getRandomArbitary(0, 1200)+'px; top:'+getRandomArbitary(130,630)+'px'
		}
	},
	{
		author: {
			avatar: 'img/avatars/user04.png'
		},
		offer: {
			title: 'Маленький ужасный дворец',
			address: '600, 350',
			price: '2400',
			type: 'Дворец',
			rooms: '3',
			guests: '5',
			checkin: '12:00',
			checkout: '10:00',
			features: ['wifi', 'washer'],
			description: 'Описание хибары',
			photos: '',
			locate: 'left:'+getRandomArbitary(0, 1200)+'px; top:'+getRandomArbitary(130,630)+'px'
		}
	},
	{
		author: {
			avatar: 'img/avatars/user05.png'
		},
		offer: {
			title: 'Красивый гостевой домик',
			address: '600, 350',
			price: '3600',
			type: 'Дом',
			rooms: '3',
			guests: '5',
			checkin: '12:00',
			checkout: '10:00',
			features: ['wifi', 'elevator', 'conditioner', 'washer'],
			description: 'Описание хибары',
			photos: '',
			locate: 'left:'+getRandomArbitary(0, 1200)+'px; top:'+getRandomArbitary(130,630)+'px'
		}
	},
	{
		author: {
			avatar: 'img/avatars/user06.png'
		},
		offer: {
			title: 'Некрасивый негостеприимный домик',
			address: '600, 350',
			price: '4800',
			type: 'Дом',
			rooms: '3',
			guests: '5',
			checkin: '12:00',
			checkout: '10:00',
			features: ['wifi', 'parking', 'conditioner'],
			description: 'Описание хибары',
			photos: '',
			locate: 'left:'+getRandomArbitary(0, 1200)+'px; top:'+getRandomArbitary(130,630)+'px'
		}
	},
	{
		author: {
			avatar: 'img/avatars/user07.png'
		},
		offer: {
			title: 'Уютное бунгало далеко от моря',
			address: '600, 350',
			price: '4100',
			type: 'Бунгало',
			rooms: '3',
			guests: '5',
			checkin: '12:00',
			checkout: '10:00',
			features: ['elevator', 'dishwasher', 'parking', 'washer'],
			description: 'Описание хибары',
			photos: '',
			locate: 'left:'+getRandomArbitary(0, 1200)+'px; top:'+getRandomArbitary(130,630)+'px'
		}
	},
	{
		author: {
			avatar: 'img/avatars/user08.png'
		},
		offer: {
			title: 'Неуютное бунгало по колено в воде',
			address: '600, 350',
			price: '900',
			type: 'Бунгало',
			rooms: '3',
			guests: '5',
			checkin: '12:00',
			checkout: '10:00',
			features: ['conditioner', 'dishwasher', 'parking', 'washer', 'elevator'],
			description: 'Описание хибары',
			photos: '',
			locate: 'left:'+getRandomArbitary(0, 1200)+'px; top:'+getRandomArbitary(130,630)+'px'
		}
	}
];

var getComforts = function (element, i, k) {
	element.classList.add('feature');
	element.classList.add('feature--'+announcements[i].offer.features[k]);
};

var getPhoto = function (element, i , q) {
	element.setAttribute('src', announcements[i].offer.photos[q]);
};

var pinChange = function (element, i) {
	element.querySelector('img').setAttribute('src', announcements[i].author.avatar);
	element.setAttribute('style', announcements[i].offer.locate);
	element.querySelector('img').setAttribute('title', announcements[i].offer.title);
};

var cardChange = function (element, i) {
	element.querySelector('.popup__avatar').setAttribute('src', announcements[i].author.avatar);
	element.querySelector('h3').textContent = announcements[i].offer.title;
	//element.querySelector('small').textContent = announcements[i].offer.address;
	element.querySelector('.popup__price').textContent = announcements[i].offer.price+'₽/ночь';
	element.querySelector('h4').textContent = announcements[i].offer.type;
	element.querySelector('.popup__text--capacity').textContent = announcements[i].offer.rooms+' комнаты для '+announcements[i].offer.guests+' гостей.'
	element.querySelector('.popup__text--time').textContent = 'Заезд после '+announcements[i].offer.checkin+', выезд до '+announcements[i].offer.checkout;
	for (var k = 0; k < announcements[i].offer.features.length; k++) {
		var li = document.createElement('li');
		getComforts(li, i, k);
		element.querySelector('.popup__features').appendChild(li);
	}
	element.querySelector('.popup__description').textContent = announcements[i].offer.description;
	for (var q = 0; q < announcements[i].offer.photos.length; q++) {
		var liPhoto = document.createElement('li');
		var photo = document.createElement('img');
		getPhoto(photo, i, q);
		liPhoto.appendChild(photo);
		element.querySelector('.popup__pictures').appendChild(liPhoto);
	}
};

var pinAdd = function () {
	var fragment = document.createDocumentFragment();

	for (i = 0; i < 8; i++) {
		var pinElement = pin.cloneNode(true);
		pinChange(pinElement, i);
		fragment.appendChild(pinElement);
	}

	mapPins.appendChild(fragment);
};

var cardAdd = function () {
	var cardElement = mapCard.cloneNode(true);
	cardChange(cardElement, 4);
	map.appendChild(cardElement);
};

pinAdd();
cardAdd();






































