let hame = "はrpーワールド";

//Letは変数を宣言するもの後ろの言葉を変数にする

hame = "ハローワールド2";

//こんな感じで書き換えることもできる　これは文字列が上書きされる

console.log(hame);

//定数
const bighame="へローワールド" //consutは動かすことができない書き換えが発生する場合変数を使う

let inoki = ['一','ニノ','さん','ダー'];

// console.log(inoki)


//ループ文
//もしもindexの内容が5よりも小さかったら実行される
// let index =0;
// while(index < 5){
//   //繰り返したい命令
//   console.log(index)
//   index++;
// }



// let index =0;
// while(index < inoki){
//   //繰り返したい命令
//   console.log(inoki[index])
//   index++;
// }//inokiの中身をとっていくことができる

// //lengthは数を数える
// const x="mukai";
// console.log(x.length);
// console.log(x.length);

// if (inoki.length>5){
//    console.log('ボンバイア')
// } else {
//   console.log('盆梅')
// }


// //上は常に呼び出すことは難しいので、下の記述をする
// const test =() =>{
//   if (inoki.length>5){
//      console.log('ボンバイア')
//     } else {
//       console.log('盆梅')
//     }

// };
// test()


//同じ命令を一部だけ変える場合引数を使う

const test =(arg) =>{
  if (inoki.length>arg){
     console.log('ボンバイア')
    } else {
      console.log('盆梅')
    }

};
test(3)//←の()で帰る

//オブジェクト

const hamu2 ={
  color:'pink',
  size:'large',
  Perfume:'mint'
}
console.log(hamu2)
console.log(hamu2.size)
