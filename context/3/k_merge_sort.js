function merge_sort(arr, left, right) {

	if(arr.length <= 1){
		return arr;
	}

	let middle =  Math.floor( (left + right) / 2 );

	let leftPart = arr.slice(left, middle);
	leftPart = merge_sort(leftPart, 0, middle);
	
	let rightPart = arr.slice(middle, right);
	rightPart = merge_sort(rightPart, 0, rightPart.length);

	let result = merge(leftPart.concat(rightPart), left, middle, right);
	for(i = left; i < right; i++){
		arr[i] = result[i];
	}

	return arr;
}

function merge(arr, left, mid, right) {
	
	let leftPart = arr.slice(left, mid);
	let rightPart = arr.slice(mid, right);

	let result = [];
	let l = 0, r=0;
	while(l < leftPart.length && r < rightPart.length){
		if( parseInt( leftPart[l] ) <= parseInt( rightPart[r] ) ) {
			result.push( leftPart[l] );
			l++;
		}else{
			result.push( rightPart[r] );
			r++;
		}
	}

	while(l < leftPart.length){
		result.push(leftPart[l]);
		l++;
	}

	while(r < rightPart.length){
		result.push(rightPart[r]);
			r++;	
	}

	return result;
}



function test() {
	let c = [ -6, -12, -14, 14 ];
	merge_sort(c, 0, 4);
	//expected = [1, 1, 2, 2, 4, 10];
	console.log(c);
}
 
test();   