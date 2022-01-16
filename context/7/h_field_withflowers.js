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

function solve() {
    let data = inputLines[0].split(' ');

    let countRows = Number(data[0]);
    let countColumns = Number(data[1]);
    
    const field = [];

    for(let i = 1; i<= countRows; i++){
        let rowData = Array.from(inputLines[i]).map(item => Number(item) );
        field.push(rowData);
    }

    let path = JSON.parse(JSON.stringify(field));

    // Обнуление массива
    for(let i = 0; i < path.length; i++){
        let row = path[i];
        for(let j = 0; j < row.length; j++){
            path[i][j] = 0;
        }
    }

    
    for(let i = path.length -1; i >= 0 ; i--){
        let row = path[i];

        let prevRowIndex = i+1;
        for(let j = 0; j < row.length; j++){
            let prevColumnIndex = j - 1;
            
            let prevRowValue = 0;
            let prevColumnValue = 0;
            if(prevRowIndex < countRows ){
                prevRowValue = path[prevRowIndex][j];
            }

            if(prevColumnIndex >= 0){
                prevColumnValue = path[i][prevColumnIndex];
            }

            if(prevColumnValue > prevRowValue){
                path[i][j] = field[i][j] + prevColumnValue
            }else{
                path[i][j] = field[i][j] + prevRowValue
            }
        }
    }

    console.log(path[0][countColumns-1]);
    //console.log(path);
}


let input = `3 3
100
110
001
`;

inputLines = input.split('\n');

solve();

