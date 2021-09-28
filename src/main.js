const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

console.log(promise);

const question = "";
const tellPromise = tell(question);

tellPromise.then((fortune) => {
    console.log(question);
    console.log(fortune);
}).catch((error) => {
    console.log(error)
})