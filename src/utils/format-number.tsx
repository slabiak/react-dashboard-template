import numeral from 'numeral';

export type Input = number | string | null | undefined;

export function fNumber(number: Input) {
  return numeral(number).format();
}

function result(format: string, key = '.00') {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, '') : format;
}

export function fCurrency(number: Input) {
  const format = number ? numeral(number).format('$0,0.00') : '';

  return result(format, '.00');
}

export function fPercent(number: Input) {
  const format = number ? numeral(Number(number) / 100).format('0.0%') : '';

  return result(format, '.0');
}

export function fShortenNumber(number: Input) {
  const format = number ? numeral(number).format('0.00a') : '';

  return result(format, '.00');
}

export function fData(number: Input) {
  const format = number ? numeral(number).format('0.0 b') : '';

  return result(format, '.0');
}
