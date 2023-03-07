import { suma, multiplica } from './modulos/controller.js'
import chalk from 'chalk';

const sum = suma(4, 5);
console.log(sum);

const multi = multiplica(1, 2);
console.log(multi);

console.log(chalk.green(multi));


