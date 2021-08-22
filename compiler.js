const fs = require('fs');

debugger 
const lexer = require('./lexer.js');
const parser = require('./parser.js');
const traverser = require('./traverser.js');
const transformer =  require('./transformer.js');
const codeGenerator = require('./codeGenerator.js');

let input = fs.readFileSync('./source.lisp').toString();
console.log(input);

const compiler = (input) => {
    let tokens = lexer(input);
    console.log(tokens);
    let ast = parser(tokens);
    console.log(ast);
    let newAST = transformer(ast);
    console.log(newAST);
    let output = codeGenerator(newAST);
    console.log(output);
    fs.writeFileSync('output.txt', output.toString());
}

compiler(input);



