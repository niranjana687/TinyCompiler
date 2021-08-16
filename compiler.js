const fs = require('fs');

debugger 
const lexer = require('./lexer.js');
const parser = require('./parser.js');
const traverser = require('./traverser.js');
const transformer =  require('./transformer.js');
const codeGenerator = require('./codeGenerator.js');

let input = fs.readFileSync('./source.lisp').toString();

const compiler = (input) => {
    let tokens = lexer.lexer(input);
    let ast = parser.parser(tokens);
    let newAST = transformer.transformer(ast);
    let output = codeGenerator.codeGenerator(newAST);

    fs.writeFileSync('output.txt', output);
}

compiler(input);



