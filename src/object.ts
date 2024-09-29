// 型を宣言する
type FooBar = {
  foo: number;
  bar: string;
};

const obj: FooBar = {
  foo: 1,
  bar: '3',
};

// インターフェース宣言で扱えるのはオブジェクト型だけ
//オブジェクトの型のみを定義できるため、typeの方を使うのが無難
interface SampleBar {
  sample: number;
  sbar: string;
}
const obj2: SampleBar = {
  sample: 11,
  sbar: 'sfsf',
};
//インデックスシグネチャ
//プロパティが動的に決めることができる。
//便利ではあるが、型安全性に注意する必要がある。使うのは避けるべきMapオブジェクトを使用しよう。
type PriceData = {
  [key: string]: number;
};
const data: PriceData = {
  apple: 200,
  coffee: 232,
  lemon: 100,
};
data.sss = 111;

//オプショナルなプロパティの宣言
type MyObj = {
  readonly foo: boolean; //読み取り専用
  bar: boolean;
  baz?: number;
};

const mobj: MyObj = { foo: false, bar: true };
const mobj2: MyObj = { foo: false, bar: true, baz: 222 };

// 型引数を持つ方を宣言
//具体的な型に言及せずに「構造」にのみ言及している。
type Family<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};
const fobj: Family<number, string> = {
  mother: 0,
  father: 100,
  child: '1000',
};
