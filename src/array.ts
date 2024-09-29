const arr = [0, 123, -456 * 100];
console.log(arr);

const arr2: Array<{ name: string }> = [
  { name: '山田さん' },
  { name: '船山さん' },
  { name: '鈴木さん' },
];
//読み取り専用・数字のみの型だけ入れられる。
const arr3: readonly number[] = [1, 10, 100];

//push:配列の末尾に要素を追加
console.log('pushBefore', arr);
arr.push(1000);
console.log('pushAfter', arr);

//includes:配列が与えられた値を含んでいるかを真偽値で返すメソッド。
const arr4 = [1, 10, 100];
console.log('includes(100):', arr4.includes(100));
console.log('includes(50):', arr4.includes(50));

//for-of:配列の要素を全部順番に処理する
//constはループの中で変数が作れ直される。
//ループの中で変数に再代入したい場合はlet
const arr5 = [1, 10, 100];
for (const elm of arr) {
  console.log(elm);
}

//タプル型：要素数が固定化された配列
//要素の位置に応じて異なる型が得られる。
let tupple: [string, number] = ['foo', 0];
tupple = ['aiueo', -555];
//配列はインデックスアクセスの考慮をしないため、存在しないものにもアクセスできる
//タプル型では予め戸数が判明している場合の配列に適している。
const untupple: number[] = [1, 10, 100];
console.log('tupple', tupple[1]);
console.log('untupple', untupple[100]);
