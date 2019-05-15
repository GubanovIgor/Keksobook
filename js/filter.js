'use strict';

var housingType = document.getElementById('housing-type');
var housingPrice = document.getElementById('housing-price');
var housingRooms = document.getElementById('housing-rooms');
var housingGuests = document.getElementById('housing-guests');
var housingFeatures = document.getElementById('housing-features');
var housingFeaturesValue = housingFeatures.querySelectorAll('input');

var sortType = function (element) {
	if (housingType.options[housingType.selectedIndex].value == 'any') {
		return element;
	}
	else if (element.offer.type == housingType.options[housingType.selectedIndex].value) {
			return element;
		}
};

/*var sortPrice = function (element) {
	if (housingPrice.options[housingPrice.selectedIndex].value == 'any') {
		return element;
	}
	else if (element.offer.price == housingPrice.options[housingPrice.selectedIndex].value) {
			return element;
		}
};*/

var sortRooms = function (element) {
	if (housingRooms.options[housingRooms.selectedIndex].value == 'any') {
		return element;
	}
	else if (element.offer.rooms == housingRooms.options[housingRooms.selectedIndex].value) {
			return element;
		}
};

var sortGuests = function (element) {
	if (housingGuests.options[housingGuests.selectedIndex].value == 'any') {
		//for (var i = 0; i < element.offer.features.length; i++) {
		//	element.offer.features[i] = 1;
		//}
		//console.log(element.offer.features);
		return element;
	}
	else if (element.offer.guests == housingGuests.options[housingGuests.selectedIndex].value) {
			return element;
		}
};

window.getFeatures = function (features) {
	var arr = [];
	for (var i = 0; i < features.length; i++) {
		if (features[i].checked) {
			arr.push(features[i].value);
		}
	}
	return (arr);
};

var compareMassives = function (a, b) {
	var g = 0;
	for (var i = 0; i < a.length; i++) {
		for (var k = 0; k < b.length; k++) {
			if (a[i] == b[k]) {
				g++;
				i++;
			}
		}
	}
	if (g == a.length) {
		return (true);
	} else {
		return (false);
	}
};

var sortFeatures = function (element) {
	if (compareMassives(getFeatures(housingFeaturesValue), element.offer.features)) {
		return element;
	}
};

var filterPin = function (massive) {
	var massiveCopy = massive.filter(sortType).filter(sortRooms).filter(sortGuests).filter(sortFeatures);
	return massiveCopy;
};