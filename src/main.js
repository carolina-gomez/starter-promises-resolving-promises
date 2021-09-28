const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

console.log(promise);

const question = "will the weather be nice today?";
const tellPromise = tell(question);
tellPromise.then(console.log)