const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

console.log(promise);

const question = "Hello?";

tell(question)
.then((fortune) => {
    console.log(question);
    console.log(fortune);
})
.catch(console.error);