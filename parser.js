import { lexer } from './lexer.js';

//returns abstract syntax tree

const parser = (tokens) => {
     let current = 0;

     function walk() {

        let token = tokens[current];

        //checks for number token, returns NumberLiteral AST if true.
        if (token.type === 'number') {

            current++;

            return {
                type: 'NumberLiteral',
                value: token.value,
            };
        }

        //String literal
        if (token.type === 'string') {

            current++;

            return {
                type: 'StringLiteral',
                value: token.value,
            };

        }

        // add ( 2 subtract ( 4 2))
        if (token.type === 'paren' && token.value === '(') {
            token = tokens[++current];

            let node = {
                type: 'CallExpression',
                name: token.value,
                params: [],
            };

            token = tokens[++current];

            while ( token.type !== 'paren' || (token.type === 'paren' && token.value !== ')')) {

                node.params.push(walk());
                token = tokens[++current];

            }

            current++;

            return node;
        }

        throw new TypeError(token.type);
     }

     let ast = {
         type: 'Program',
         body: [],
     };

     while (current < tokens.length) {
         ast.body.push(walk());
     }

     return ast;
}