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
    const sequance = inputLines[1].split(' ').map(item => Number(item) );
    const s1 = [];
    let sumS1 = 0;
    const s2 = [];
    let sumS2 = 0;

    const total = sequance.reduce((prevValue, item) =>{
        return prevValue += item;
    }, 0);

    sequance.sort((a, b) => b-a);

    if(total % 2 === 0){
        let residue = total / 2;
        
        let i = 0;
        while(residue > 0 && i < sequance.length){
            if(sequance[i] <= residue){
                residue -= sequance[i];
            }
            i++;
        }

        if(residue === 0){
            console.log('True');
        }else{
            console.log('False');
        }


    }else{
        console.log('False');
    }
    let middle = total / 2;



    // sequance.forEach(element => {
    //     if(sumS1 <= sumS2){
    //         s1.push(element);
    //         sumS1 += element;
    //     }else{
    //         s2.push(element);
    //         sumS2 += element
    //     }        
    // });

    // if(sumS1 === sumS2){
    //     console.log('True')
    // }else{
    //     console.log('False');
    // }
    //console.log(sequance);
 
}

let input = `190
243 169 158 96 146 237 300 10 39 287 281 38 103 264 81 33 259 98 278 160 98 217 209 153 55 215 93 299 128 62 254 139 261 124 27 107 155 90 255 127 148 244 49 71 291 161 199 40 145 61 70 225 244 100 3 17 83 22 144 149 179 70 153 90 232 1 247 218 61 9 42 151 190 243 256 154 28 20 18 152 146 59 132 134 165 80 53 175 157 292 186 164 71 97 225 143 216 251 153 116 79 84 156 265 151 98 24 61 192 74 80 57 281 202 7 162 150 150 222 147 150 177 233 221 242 14 95 214 201 15 144 18 143 129 266 195 77 230 189 67 196 101 235 106 289 149 260 258 35 254 33 284 187 51 49 192 5 61 262 262 292 201 8 264 241 137 156 101 210 151 187 284 255 166 101 65 16 238 256 66 73 231 148 232 138 254 240 146 171 176

`;

inputLines = input.split('\n');

solve();


