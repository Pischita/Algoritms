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
    let str = inputLines[0];

    let result = [];
    let registered = {};

    let maxSequance = 0;

    for(let j = 0; j < str.length - maxSequance; j++){
        let registered = {};
        let sequance = '';
        for(let i = j; i < str.length; i++){
            let letter = str[i];
            if( !registered[letter]){
                registered[letter] = true;
                sequance += letter 
            }else{
                break;            
            }
        }

        if(sequance.length > maxSequance){
            result.push(sequance);
            maxSequance = sequance.length;
        }
    }
    console.log(maxSequance);
    
    
}


let input = `ejkfuamrksxrqgsfnuubbkntgmgguqtmrpperyyafgnhsmymrajvowrlyjrvtizgowfkujcewwpypnjpipcdpfdoxuckrhvrzbsbxvxqoqwaqvsvvpptuqeunzqcmhiftlruxqxseqisxoszkrjrbmfdmlaaxaqjlzisedvfeprbnqyzxhvmdcjwfrqlcczywbdwoayatkbfowxclispgkelpuosgknuztrrlwidgppxtcfcjwgmkgkhdpqymbtiljnsnijiieoycvdgrsqeyytvrvpcvvxmupcuhiufzpgwmkcobgeoapuvycqbitlremumauhuhnlvnzaadmpugybktdfvkxwhldzpkqxndgvxgmlkczndnwbtvuzaadvpnylenbdelwthzgpoczwjfwxaqeoryrbbuzmlvwjwtivfbyeafdvstrcwlawjwrcfmsnzbbdgvgaktfvvfirynbzbquzekxjmcbaokldjjdmwaniznkmmmhluitefypvoasixvwxbgfxksnmxigrdpdgxdwacrijbkrzgxehiagirywvxosxykntgnxxgstanmeiydqcyyhgjktbycicmwtwzdwisxccvgjzgokvebmlngmonkdqeeozegtqzfqptqligfrpcxqhmveiwhjjnoicevcugwzvfityeheiirbwdrgdywwdgpxlvbbwszuqwuvniahtqytsbvtuqqybsxfxcmlzufpcbtkyptjjjpwfyfmyezvwnognhdzzdugdqymlrsxhqhywihmcilnbciizwnsnjakvcvfwzdbfboazbuaybaoeqgeutftdofrxypnxklysschvsqnpefkvpykoujzfmfetnwblunnluotrrjzrfhosoqbimdcmdhftqvimragczketsbumrfqwnpiiijplulyidmyxwoapgkvhrvxwnorloprhcoyfwczionqukbnzlxejjfeajpezdalmncupunfasxddgfstpziedqrllakbnbwbqtsiohxjw`;

inputLines = input.split('\n');

solve();