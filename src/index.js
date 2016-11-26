const mock = require('../mock.js');
const sections = mock.split(',');
const values = sections.map( section => section.split(';'));
const rxPage = /[?|&]page=(\d+)/;
const rxRel = /rel="(.+)"/;

const data = mock.split(',') // Transforma em array de string separado por ';'
    .map(section => section.split(';')) //Quebra em mais arrays
    .map(section => { 
        const page = Number(rxPage.exec(section[0])[1]);
        const rel = rxRel.exec(section[1])[1];
        return [page, rel];
    })
    .reduce((acc, value, index) => {
       acc[value[1]] = value[0];
       return acc
    }, {});
    
console.log(data);

// ** Abaixo Código antes de ser refatorado, para referência futura **
// let data1 = values.map( section => {
//     const page = Number(rxPage.exec(section[0])[1]);
//     const rel = rxRel.exec(section[1])[1];
//     return [page, rel];
//     });

// console.log("Data1: ");
// console.log(data1);

// // No Reduce é parecido com MAP, mas necessita de 2 parâmetros.
// // 1o Parâmetro: Callback / 2o Parâmetro: Valor Inicial do reduce.
// // @acc = acumulador

// const data2 = data1.reduce((acc, value, index) => {
//     console.log({acc, index}); //Exibe a interação do reduce com objeto.
//     acc[value[1]] = value[0];
//     return acc;
// }, {}); // {}  é o objeto vazio que vai ser preenchido.

// console.log("Data2: ");
// console.log(data2);


