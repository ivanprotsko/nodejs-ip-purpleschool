import add from './add.js';
import multiply from './multiply.js';
export default function calculator(argv) {
  let [,, a, b, operator] = argv;

  switch (operator) {
    case 'add': return add(a, b);
    case 'multiply': return multiply(a, b);
  }
};
