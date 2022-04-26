/////////////
//データ
/////////////
const SDATA = [
  5,2,1,6,7,4,9,8,3
];
var data = [
  5,2,1,6,7,4,9,8,3
];

///////////
//メソッド
///////////
function retLength(){
  return SDATA.length;
}

function main(){
  console.log("hello world");
}

//データ配列の初期化
function reSet(){
  data = SDATA;
  console.log("正常にデータを書き換えました。");
}

//データ配列の表示
function show(){
    console.log(data);
}

//データの入れ替え
function temp(a, b){
  var temp = data[a];
  data[a] = data[b];
  data[b] = temp;
}
