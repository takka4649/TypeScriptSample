type SampleType = {
  foo: number;
  bar: string;
};
const bObj: SampleType = {
  foo: 1,
  bar: '3',
};
//分割代入:　「：別名」
const { foo, bar: barVar } = bObj;

//ネストしたオブジェクトに対しても分割代入ができる。
const nested = {
  num: 123,
  obj: {
    sss: 'ssss',
    bar: 'pppp',
  },
};

const {
  num,
  obj: { sss },
} = nested;

//配列の分割代入
//空白を用いて要素をスキップできる。
const bArr = [1, 2, 3, 4, 5, 6, 7];
const [, ba, bb, , bc, , bd] = bArr;
console.log(ba, bb, bc, bd);

//タプル型の配列
const tuppleArray: [string, number] = ['kontiwa', 222];
