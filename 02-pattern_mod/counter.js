// Запишем ф-ю в переменную counter
var counter = (function () {
	// Приватные  перменные
	var _number;

	// Приватные  методы
	var _checkPositive = function (x) {
		if (x < 0 ) {
			return false;
		}
        else {
			return true;
		}
	}

	// Публичные  методы
	var setNumber = function (x) {
		if (_checkPositive (x)) {
			_number = x;
		}
        else {
			console.log('Неверное значение.');
		}
	}

	var increaseCounter = function () {
		_number++;
	}

	var decreaseCounter = function () {
		_number--;
	}

	var printCounter = function () {
		console.log(_number);
	}

	/* Возвращаем публичные методы и переменные */
	return {
		setNumber,
		increaseCounter,
		decreaseCounter,
		printCounter
	}
}())

counter.setNumber(-20);
counter.printCounter();

counter.setNumber(5); // 5
counter.increaseCounter(); // 6
counter.printCounter(); // 6
counter.decreaseCounter(); // 5
counter.printCounter(); // 5