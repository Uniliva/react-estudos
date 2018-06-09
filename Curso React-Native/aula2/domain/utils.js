const soma = (x, y) => somaDaSoma(x, y);

const somaDaSoma = (x, y) => x + y;

export const multiplica = (x, y) => x * y;

export const divide = (x, y) => x / y;

const concat = (text1, text2) => `o valor é ${text1} e ${text2}`;

const getAObject = ({ text, number }) => ({
  text,
  number,
  concat: concat(text, number),
});

export default {
  math: {
    soma,
    multiplica,
    divide,
  },
  text: {
    concat,
  },
  obj: {
    getAObject,
  },
};
