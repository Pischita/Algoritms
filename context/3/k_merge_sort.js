function merge_sort(arr, left, right) {

	if( (right - left) === 1){
		return [arr[left]];
	}

	let middle =  Math.floor( (left + right) / 2 );
	
	let leftPart = merge_sort(arr, left, middle);

	let rightPart = merge_sort(arr, middle, right);
	
	let result =  merge(arr, left, middle, right);

	 for(i = 0; i < result.length; i++){
	 	arr[i+left] = result[i];
	}

	return arr;
}

function mergeLR(leftPart, rightPart){
	let result = [];

	while(leftPart.length && rightPart.length){	
		result.push( leftPart[0] > rightPart[0] ? rightPart.shift() : leftPart.shift() );		
	}

	while(leftPart.length){
		result.push(leftPart.shift() );
	}

	while(rightPart.length){
		result.push(rightPart.shift() );
	}

	return result;

}

function merge(arr, left, mid, right) {
	
	let leftPart = arr.slice(left, mid);
	let rightPart = arr.slice(mid, right);

	let result = [];


	while(leftPart.length && rightPart.length){	
		result.push( leftPart[0] > rightPart[0] ? rightPart.shift() : leftPart.shift() );		
	}

	while(leftPart.length){
		result.push(leftPart.shift() );
	}

	while(rightPart.length){
		result.push(rightPart.shift() );
	}

	return result;
}



// function test() {
// 	let c = [ -6, -12, -14, 1 ];
// 	merge_sort(c, 0, 4);
// 	//expected = [1, 1, 2, 2, 4, 10];
// 	console.log(c);
// }
 
// test();   