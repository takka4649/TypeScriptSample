// コンパイル方法npx tsc
//実行node ファイル名

import { createInterface } from 'readline';
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('文字列を入力してください:', (line) => {
  const num = Number(line);
  console.log(num + 1000);
  rl.close();
});
