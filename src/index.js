//
// ※セクション４:モダンJavaScriptの機能に触れる
//

// const,let等の変数宣言

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数を再宣言
// var val1 = "var変数を再宣言";
// console.log(val1);

// ----------------------------------------------------------------------

// let val2 = "let変数";
// console.log(val2);

// // letはvarと同等上書きが可能
// val2 = "letは変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言"

// ----------------------------------------------------------------------

// const val3 = "cosnt変数";
// console.log(val3);

// constは変数は上書き不可
// val3 = "constは変数を上書き";

// const val3 = "const変数を再宣言";

// ----------------------------------------------------------------------

// const val4 = {
//   name: "たかひろ",
//   age: "38",
// };
// console.log(val4);

// constオブジェクト内では上書きは可能
// const val4 = {
//   name: "たかひろ",
//   age: "38",
// };
// val4.name = "TAKAHIRO";
// console.log(val4);

// constで定義したオブジェクトはプロパティの変更は可能
// const val4 = {
//   name: "たかひろ",
//   age: "38",
// };
// val4.name = "TAKAHIRO";
// val4.address = "matsukawa"
// console.log(val4);

// ----------------------------------------------------------------------

// 配列
// const val5 = ['dog','cat'];
// console.log(val5);

// const配列でも上書きは可能
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// console.log(val5);

// const配列でもオブジェクトでも上書きは可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "たかひろ";
// const age = 38;
// 「私の名前はたかひろです。年齢は38歳です。
// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// テンプレート文字列を用した方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// ----------------------------------------------------------------------
// アロー関数

// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function func1(str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

// アロー関数は引数が1つの時は（）を省略できる（プリティア補完してくれる場合がある）
// const func2 = str => {
//   return str;
// }
// console.log(func2("func2です"));

// アロー関数は {}の中が単一で1つの場合は{}とrerurnを省略できる
// const func2 = (str) => str;
// console.log(func2("func2です"));

// アロー関数で2つの引数がある場合
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func310, 20);

// アロー関数で同じく１行なので省略できる
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

// ----------------------------------------------------------------------
// 分割代入
// const myProfile = {
//   name: "たかひろ",
//   age: 38,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name,age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// 配列でも可能
// const myProfile = [`たかひろ`, 38];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// ----------------------------------------------------------------------
// デフォルト値、引数など
// const sayHello = (name) => console.log(`こんにちわ！${name}さん！`);
// sayHello("たかひろ");
// 引数が何も定義されていないと undefinedになる
// const sayHello = (name) => console.log(`こんにちわ！${name}さん！`);
// sayHello();

// デフォルト値（初期値）を設定しておく（バグにならないために）
// const sayHello = (name = "ゲスト") => console.log(`こんにちわ！${name}さん！`);
// sayHello();

// 引数を定義すると引数が反映される
// const sayHello = (name = "ゲスト") => console.log(`こんにちわ！${name}さん！`);
// sayHello("たかひろ");

// ----------------------------------------------------------------------
// スプレット構文 ...

// 配列の展開
// const arr1 =[1,2];
// console.log(arr1);
// 順番に処理してくれるのがスプレット構文
// console.log(...arr1);

// const sunFunc = (num1,num2) => console.log(num1 + num2);
// sunFunc(arr1[0],arr1[1]);
// sunFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// console.log(...arr3);

// 配列のコピー、結合（reactでよく使う）
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// コピーも出来るが・・・
// const arr8 = arr4;
// console.log(arr8);

// コピーも出来るが一番目の処理も上書きしてしまうのでバグの元になってしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);

// ----------------------------------------------------------------------
//

// mapやfilterを使った配列の処理
// const nameArr = ["田中", "山田", "takahiro"];
// for文を使用した例
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// mapの書き方(中身表示する)
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// });
// console.log(nameArr2);

// １行省略する書き方
// nameArr.map((name) => console.log(name));
// filterの書き方（一致した物だけを表示する）
// （奇数だけを）返すパターン
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num %2 ===1;
// });
// console.log(newNumArr);

// 使用例
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// mapの使用例
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));
// nameArr.map((name) => console.log(`${name}です`));

// const newNameArr = nameArr.map((name) => {
//   if (name === "takahiro") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// ----------------------------------------------------------------------
//
// 三項演算子
// ある条件を書いて『？』 条件がtrueの時 ：条件がfalseの時
// const val1 = 1 > 0 ? `trueです` : `falseです`;
// console.log(val1);

// とある関数の例 toLocaleStringは文字列には非対応
// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === `number` ?num.toLocaleString() : `数値を入力してください`;
// console.log(formattedNum);
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています！！` :`許容範囲内です`;
// };
// console.log(checkSum(50, 60));

// ----------------------------------------------------------------------
//
// 論理演算子の本当の意味を知ろう && ||
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もはtrueになります");
// }

// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定された";
// console.log(fee2);

// const num2 = null;
// const fee2 = num2 && "何か設定された";
// console.log(fee2);

// ----------------------------------------------------------------------
//

