const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    expr = expr.split('');

    let lettersArr = [];
    let letter = '';
    let charCounter = 0;

    for (let i = 0; i < expr.length; i++) {
        letter += expr[i];
        charCounter++;
        if (charCounter === 10) {
            lettersArr.push(letter);
            letter = '';
            charCounter = 0;
        }
    }


    lettersArr.forEach((element, index) => {
        if (element.includes('*')) {
            lettersArr[index] = ' '
        } else {
            element = element.split('');
            for (let i = 0; i < element.length; i++) {
                if (element[i] === '0') {
                    element[i] = '';
                } else if (element[i] === '1' && element[i + 1] === '0') {
                    element[i] = '.';
                    element[i + 1] = '';
                } else if (element[i] === '1' && element[i + 1] === '1') {
                    element[i] = '-';
                    element[i + 1] = '';
                }
                lettersArr[index] = element.join('') === ' ' ? ' ' : MORSE_TABLE[element.join('')];
            }
        }
    });

    return lettersArr.join('');
}

module.exports = {
    decode
}