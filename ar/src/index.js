import './assets/sass/styles.scss';
import 'normalize.css/normalize.css';
console.log("Hello from Webpack");

var student = require("./studentname");
var student1 = new student("Noor", "Hilles");

//console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);

setTimeout(function() { alert("Hello student!") }, 4000);