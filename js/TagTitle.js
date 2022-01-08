//Truy xuất thẻ thông qua id
var tagTitle = document.getElementById('title');

//.innerHTML: nội dung giữa 2 thẻ đóng mở
tagTitle.innerHTML = 'Hello frontend 70';

//.value: thuộc tính người dùng nhập liệu trên thẻ
var tagInput = document.getElementById('txtInput');
tagInput.value = 'Frontend 70 class';

//.src: thuộc tính qui định hình ảnh load trên thẻ
var tagImg = document.getElementById('avatar');
tagImg.src = 'images/anh_2.jpg'

//.className: thuộc tính qui định class của thẻ
var button = document.getElementById("btnSubmit");
button.className = 'btn btn-outline-success';

//Sự kiện trong js
function handleClickBtn(){
    alert('Hello front-end 70');
}
function handleClickImg(){
    alert('Sấp mặt vào tường');
}

// Xây dựng chương trình ng dùng click vào btnClickMe => Nội dung thẻ p thay đổi
var thayDoiNoiDung = () => {
    let noiDung = document.getElementById("content");
    noiDung.innerHTML = "đã thay đổi rồi nhé!";
}

// Cách cài đặt sự kiện onclick cho thẻ
// Cách 1:
// .onclick = callbackFunction

var tagBtn = document.getElementById('btnClickMe');
// tagBtn.onclick = thayDoiNoiDung;

tagBtn.onclick = function(){
    //Thay đổi nội dung thẻ p
    var tagP = document.getElementById('content');
    tagP.innerHTML = 'Đã thay đổi rồi nhé!';
}

// Cách 2:
document.getElementById("btnClickMe").addEventListener('click',()=>{
    var tagP = document.getElementById('content');
    tagP.innerHTML = "Đã thay đồi rồi nhé!";
})