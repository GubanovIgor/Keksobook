'use strict';

(function() {
	window.getRandomArbitary = function(min, max) {
		return (Math.floor(Math.random() * (max - min) + min));
	}
})();