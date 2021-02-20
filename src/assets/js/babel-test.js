/* Using some ES6 stuff to test that Babel transpile them and they get minified correctly */
const nums = [1,2,3,4];

const func = arr => console.log(...arr);

func(nums);