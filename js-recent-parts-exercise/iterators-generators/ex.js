var numbers = {
	*[Symbol.iterator]({
		start = 0,
		stop = 100,
		step = 1,
	} = {}) {
		for (let num = start; num <= stop; num += step){
			yield num;
		}
	}
};

// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

// should print 6..30 by 4s
console.log(`My lucky numbers are: ${[...numbers[Symbol.iterator]({
		start:6, 
		stop: 38, 
		step: 3
	})]}`
);

// Hint:
//     [...numbers[Symbol.iterator]( ?? )]
