'use strict';

(function () {
	var URL = 'https://js.dump.academy/keksobooking/data';

	window.download = function(onError, onSuccess) {
		var xhr = new XMLHttpRequest;
		xhr.responseType = 'json';

		xhr.addEventListener('load', function() {
			var error;
			switch (xhr.status) {
				case 200:
					onSuccess(xhr.response);
					break;
					
				case 400:
					error = 'Неверный запрос';
					break;
				case 401:
					error = 'Пользовательн не авторизован';
					break;
				case 404:
					error = 'Ничего не найдено';
					break;
					
				default:
					error = 'Статус ответа: : ' + xhr.status + ' ' + xhr.statusText;
			}
			
			if (error) {
				onError(error);
			}
		});

		xhr.addEventListener('error', function () {
			onError('Произошла ошибка соединения');
		});

		xhr.open('GET', URL);
		xhr.send();
	};
})();