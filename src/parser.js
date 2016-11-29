const rxPage = /[?|&]page=(\d+)/;
const rxRel = /rel="(.+)"/;

const parser = str => {
  if (typeof str !== 'string'){
    throw new Error('srt must be a string');
  }
  return str.split(','). // Transforma em array de string separado por ';'
  map(section => section.split(';')). //Quebra em mais arrays
  map(section => {
    const page = Number(rxPage.exec(section[0])[1]);
    const rel = rxRel.exec(section[1])[1];
    return [page, rel];
  }).reduce((acc, value, index) => {
    acc[value[1]] = value[0];
    return acc;
  }, {});
}

module.exports = parser;
