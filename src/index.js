const mock = require('../mock.js');

const sections = mock.split(',');

const teste = sections.map( i => i.split(';'));

const outro = teste.map ( i => i[0]);

console.log(outro);
