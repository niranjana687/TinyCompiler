const lexer = (input) => {

    //Tracks the postion in the code like a cursor
    let current = 0;

    //For pushing tokens into
    let tokens = [];

    while (input < current.length) {

        let char = input[current];

        //check for open parenthesis.
        if (char === '(') {
            tokens.push({
                type: 'paren',
                value: '(',
            });
            
            current++;
            continue;
        }

        //check for close parenthesis
        if (char === ')') {
            tokens.push({
                type: 'paren',
                value: ')'
            });

            current++;
            continue;
        }

        //whitespace check since it aids in identifying tokens.
        let WHITESPACE = /\s/;
        if (WHITESPACE.test(char)) {
            current++;
            continue;
        }

        //check for numbers
        let NUMBERS = /[0-9]/;
        if (NUMBERS.test(char)) {
            let value = '';

            while(NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }

            tokens.push({
                type: 'number',
                value: value,
            });

            continue;
        }

        // strings
        if (char === '"') {

            let value = '';

            char = input[++current];

            while (char !== '"') {
                value += char;
                char = input[++current];
            }

            tokens.push({ 
                type: 'string',
                value: value,
            });

            continue;
        }

        //checks for names like 'add', 'sub', 'mul' and 'div'
        let LETTERS = /[a-z]/i;

        if (LETTERS.test(char)) {
            let value = '';

            while (LETTERS.test(char)) {
                value += char;
                char = input[++current];
            }

            tokens.push({
                type: 'name',
                value: value,
            }); 
        }

        throw new TypeError('Tiny Compiler does not understand this character' + char);
        
    }
    return tokens;
};

module.exports  = {
    lexer: lexer,
};