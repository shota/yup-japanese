
export let mixed = {
  default: '${path}は正しくありません',
  required: '${path}は必須です',
  oneOf: '${path}は以下の値のいずれかである必要があります: ${values}',
  notOneOf: '${path}は以下の値のいずれかであってはいけません: ${values}',
  notType: '${path}の種類は「${type}」である必要があります',
  defined: '${path}が定義されていません',
};

export let string = {
  length: '${path}は${length}文字でなくてはいけません',
  min: '${path}は${min}文字以上でなくてはいけません',
  max: '${path}は${max}文字以下でなくてはいけません',
  matches: '${path}は正しくありません',
  email: '${path}はメールアドレスである必要があります',
  url: '${path}はURLである必要があります',
  trim: '${path}に前後の空白は含まれてはいけません',
  lowercase: '${path}は小文字である必要があります',
  uppercase: '${path}は大文字である必要がありますg',
};

export let number = {
  min: '${path}は${min}以上である必要があります',
  max: '${path}は${max}以下である必要があります',
  lessThan: '${path}は${less}より大きい必要があります',
  moreThan: '${path}は${more}未満である必要があります',
  notEqual: '${path}は${notEqual}であってはいけません',
  positive: '${path}は０より大きい必要があります',
  negative: '${path}は０より小さい必要があります',
  integer: '${path}は整数でなくてはいけません',
};

export let date = {
  min: '${path}は${min}以後の日付である必要があります',
  max: '${path}は${max}以前の日付である必要があります',
};

export let boolean = {};

export let object = {
  noUnknown: '${path}には指定されているキー以外の属性情報を持つことができません',
};

export let array = {
  min: '${path}は${min}個以上のアイテムが必要です',
  max: '${path}は${max}個以下のアイテムに収める必要があります',
};

export default {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
};
