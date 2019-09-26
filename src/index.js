const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let m=0;
    let j=0;
    let a="";
    let c="";
    let finalResult ="";

    for(let i = 10; i <= expr.length; i+=10) {
        a=expr.slice(j, i);
        let result = '';
        if (a === "**********") {
            result=" ";
        } else {
            for (let k=2; k <= a.length+1; k+=2) {
                c=a.slice(m, k);
                if (c == "00") {
                    m=k;
                    continue;
                };
                if (c == "10") result += ".";
                if (c == "11") result += "-";
                m=k;
            }
        }
        if (!MORSE_TABLE[result]) {
            finalResult=finalResult + " ";
        } else {
            finalResult=finalResult + MORSE_TABLE[result]; 
        }
        m=0;
        j=i; 
    }
    return finalResult;    
}

module.exports = {
    decode
}