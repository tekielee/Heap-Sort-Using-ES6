function heapSort(a) {
	let length = a.length;
	buildHeap(a);
	let heapSize = length - 1;
	for(let i = heapSize; i >= 0; i--) {
		let tmp = a[0];
		a[0] = a[heapSize];
		a[heapSize] = tmp;
		heapSize--;
		heapify(a, 0, heapSize);
	}
}

function buildHeap(a) {
	let length = a.length;
	let heapSize = length - 1;
	for(let i = heapSize; i >= 0; i--) {
		heapify(a, i, heapSize);
	}
}

function heapify(a, i, heapSize) {
	let largest = i;
	let l = 2 * i + 1;
	let r = 2 * i + 2;
	if(l <= heapSize && a[l] > a[i]) {
		largest = l;
	}
	if(r <= heapSize && a[r] > a[largest]) {
		largest = r;
	}
	if(largest != i) {
		let tmp = a[i];
		a[i] = a[largest];
		a[largest] = tmp;
		heapify(a, largest, heapSize);
	}
}

let numbers = [37, 44, 34, 65, 26, 86, 143, 129, 9];
heapSort(numbers);
console.log(numbers);