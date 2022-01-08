//Khai báo biến
//Tên biến không chứa ký tự đặc biệt (!@#$%^&*=-+/<>?)
//Tên biến không bắt đầu từ số
// console.log(`My name is ${hoTen}`);

//undefined = không xác định
//null = rỗng
// ---------------------------------

/*
var hoTen = `Maktup Arkad`;
var hopLe = false;
if(hopLe){
    console.log(`Welcome back ${hoTen}!!`);
} else{
    console.log(`Access denied!`);
}
*/
// ----------------------------------------

/*
var soThuTu = 5;
console.log(typeof soThuTu);

if(soThuTu != 5){
    console.log(`Đây không phải số năm`);
}else{
    console.log(`Đây là số năm`);
}
*/

// --------------------------------------
numberOdd = 5;
if (numberOdd % 2 != 0) {
  console.log(`Đây là số lẻ`);
} else {
  console.log(`Đây là số chẵn`);
}

//Nhập vào 1 số => in ra màn hình số đó bằng chữ

console.log(`Nhập số từ 1-5:`);
let n = 1;
// if (n == 1) {
//   console.log(`Một`);
// } else if (n == 2) {
//   console.log(`Hai`);
// } else if (n == 3) {
//   console.log(`Ba`);
// } else if (n == 4) {
//   console.log(`Bốn`);
// } else if (n == 5) {
//   console.log(`Năm`);
// } else {
//   console.log(`Invalid. Try again.`);
// }

switch (n) {
  case 1: {
    console.log(`One`);
  };break;
  case 2: {
    console.log(`Two`);
  };break;
  case 3: {
    console.log(`Three`);
  };break;
  case 4: {
    console.log(`Four`);
  };break;
  case 5: {
    console.log(`Five`);
  };break;
  default: {
      console.log(`Invalid.`);
  }
}
