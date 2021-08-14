import { lexer } from './lexer.js';

//returns abstract syntax tree

const parser = (tokens) => {
    while(tokens.length > 0) {
        let currentTokenIndex = 0;

        const parseNumber = () => ({
            value: parseInt(tokens[currentTokenIndex++]), 
            type: 'number',
        });
    }
}