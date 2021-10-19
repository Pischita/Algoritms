const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let inputLines = [];


_reader.on('line', line => {
    inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);

function findDays(accumulations, priceBicycle, left, right){
    if( left == right ){
        return left + 1;
    }

    if(Number(accumulations[right]) < Number(priceBicycle) ){
        return -1;
    }

    let middle = Math.floor( (left + right) / 2);

    if( Number(accumulations[middle]) < priceBicycle ){
        return findDays(accumulations, priceBicycle, middle+1, right);
    } else {
        return findDays(accumulations, priceBicycle, left, middle);
    }


}

function solve() {
    const countDays = Number(inputLines[0]);
    const accumulations = inputLines[1].split(' ');
    const priceBicycle = Number(inputLines[2] );

    const oneBicycle = findDays(accumulations, priceBicycle, 0, accumulations.length -1);
    let twoBicycle = findDays(accumulations, priceBicycle * 2, oneBicycle, accumulations.length -1);
    console.log(`${oneBicycle} ${twoBicycle}` );  
}


let input = `1000000
100001 100002 100002 100003 100005 100005 100005 100006 100006 100006 100007 100007 100008 100009 100010 100010 100011 100011 100013 100014 100015 100016 100016 100016 100018 100018 100019 100019 100020 100021 100021 100023 100025 100026 100030 100031 100031 100034 100035 100036 100036 100037 100037 100038 100038 100039 100039 100039 100039 100040 100041 100041 100042 100043 100044 100044 100045 100045 100046 100047 100047 100048 100048 100049 100050 100051 100053 100054 100054 100057 100059 100059 100059 100062 100062 100063 100063 100063 100064 100065 100065 100066 100066 100066 100066 100067 100067 100068 100068 100068 100069 100071 100071 100072 100072 100072 100073 100073 100075 100077 100082 100084 100084 100084 100086 100087 100087 100088 100088 100088 100088 100089 100090 100093 100094 100095 100095 100095 100098 100098 100100 100100 100100 100101 100101 100104 100107 100109 100109 100109 100110 100110 100111 100112 100113 100115 100116 100116 100118 100118 100118 100118 100119 100121 100122
100122`;


inputLines = input.split('\n');

solve();