'use strict';

(function() {
	var TOP_BORDER = 35;
	var BOTTOM_BORDER = 700;
	var LEFT_BORDER = 408;
	var RIGHT_BORDER = 1500;
	
	var mapPinButton = document.querySelector('.map__pin--main');
	var addressInput = document.getElementById('address');

	mapPinButton.addEventListener('mousedown', function(evt) {
		evt.preventDefault();
		
		var startCoords = {
			x: evt.pageX,
			y: evt.pageY
		};
		
		var onMouseMove = function(moveEvt) {
			moveEvt.preventDefault();

			var shift = { /**Разница между стартовыми координатами и текущим положением курсора*/
				x: moveEvt.pageX - startCoords.x,
				y: moveEvt.pageY - startCoords.y
			};
			
			startCoords = {
				x: moveEvt.pageX,
				y: moveEvt.pageY
			};
			
			if (startCoords.y > TOP_BORDER && startCoords.y < BOTTOM_BORDER) {
				mapPinButton.style.top = (mapPinButton.offsetTop + shift.y) + 'px';
			}
			if (startCoords.x >= LEFT_BORDER && startCoords.x <= RIGHT_BORDER) {
				mapPinButton.style.left = (mapPinButton.offsetLeft + shift.x) + 'px';
			}
			addressInput.setAttribute('value', startCoords.x+' '+startCoords.y);
		};
		
		var onMouseUp = function() {
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);
		};
		
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
		addressInput.setAttribute('value', startCoords.x+' '+startCoords.y);
	});
})();