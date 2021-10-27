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

function merge(arr, left, mid, right) {

	let result = [];

	let l = left, r = mid

	while(l < mid && r < right){
		if(arr[l] <= arr[r]){
			result.push(arr[l]);
			l++;
		}else{
			result.push(arr[r]);
			r++;		
		}		
	}

	while(l < mid){
		result.push(arr[l]);
		l++;
	}

	while(r < right){
		result.push(arr[r]);
		r++;
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