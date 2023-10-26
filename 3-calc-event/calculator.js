import { EventEmitter } from 'node:events';

import add from './add.js';
import multiply from './multiply.js';


export default function calculator(argv) {
  let [,, a, b, operator] = argv;
  const myEmitter = new EventEmitter();

  myEmitter.on('result', console.log);

  myEmitter.on('add',
    ({ a, b }) => myEmitter.emit('result', add(a, b))
  );
  myEmitter.on('multiply',
    ({ a, b }) => myEmitter.emit('result', multiply(a, b))
  );
  myEmitter.emit(operator, {a, b});
};
