// E3 - Задание 1

const array = [1, 'one', 0 , '1', 2, 3, 4, NaN, 5, 6, null, 0, 10 ];

function arrayElemCounter(){
    let even = 0, 
        odd = 0,
        zero = 0;

	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === 'number' && !isNaN(array[i])) {
			if (array[i] === 0) {
				zero += 1;
			} else if (array[i] % 2 === 0) {
				even += 1;
			} else {
				odd += 1;
			}
		}
	}

console.log('четных элементов: ', even)
console.log('нечетных элементов: ', odd)
console.log('нулей: ', zero)
}

arrayElemCounter()