
function isPlimeLinear(n){
    if (n === 1){
        return false;
    }
    
    i=2;
    while(i < n) {
        if( n % i === 0){
            return false;
        }

        i += 1;
    }

    return true;
}

function isPrime(n){
    if (n === 1){
        return false;
    }

    let i = 2;
    while( i * i <= n){
        if (n % i === 0){
            return false;
        }

        i += 1;
    }

    return true;
}

function getSmallerPrimes(n){
    const smallerPrimes = [];

    for( let num = 2; num < n + 1 ; num++){
        if (isPrime(num)){
            smallerPrimes.push(num);
        }
    }

    return smallerPrimes;
}


function erastosthenes(n) {
    const numbers = [];
    for( let i = 0; i <= n; i++){
        numbers.push(i);
    }

    numbers[0] = false;
    numbers[1] = false;

    for(let num = 2; num < n; num++ ){
        if(numbers[num]){
            for(let j = 2 * num; j < n; j+= num ){
                numbers[j] = false;
            }
        }
    }
    return numbers;
}

function getLeastPrimesLinear(n){
    const lp = new Array(n);
    lp.fill(0);
    
    const primes = [];

    for (let i = 2; i < n; i++){
        if(lp[i] === 0){
            lp[i] = i;
            primes.push(i);
        }

        for( let p of primes){
            let x = p * i;
            if(p > lp[i] || x > n){
                break;
            }

            lp[x] = p;
        }
    }

    console.log(lp);
    return primes;
}

//console.log(getSmallerPrimes(1000000) );
//console.log(erastosthenes(10000));
console.log(getLeastPrimesLinear(20) );