var sections = document.getElementsByTagName('section');
console.log(sections);
// console.log('sections',sections);
sections[1].innerHTML = 'Thẻ đã được thay đổi nội dung'

for (let index = 0; index < sections.length; index++) {
    //Mỗi lần duyệt lấy ra một thẻ
    const element = sections[index];
    //Thay đổi style của từng mảng
    element.style.fontSize = "18px";
    element.style.background = "red";
    element.style.className = "alert alert-danger";
}


var tagClasses = document.getElementsByClassName('text');
console.log(tagClasses);

for (let index = 0; index < tagClasses.length; index++) {
    const element = tagClasses[index];
    
    element.style.background = 'yellow'
}

/*
    Truy xuất thẻ thông qua querySelector
    => khi DOM dựa vào selector của thẻ
    => kq trả về là giá trị đầu tiên khớp với selector
*/

var tagHeader = document.querySelector('p#header');
tagHeader.className = 'alert alert-success';

var tagHeader = document.querySelector('aside.item');
tagHeader.className = 'alert alert-danger';


var arrHeaderItem = document.querySelectorAll('aside.item');
arrHeaderItem[1].innerHTML = "Thẻ đã thay đổi"
console.log('arrHeaderItem',arrHeaderItem);

for (let index = 0; index < arrHeaderItem.length; index++) {
    const element = arrHeaderItem[index];
    
    //Thay đổi lần lượt class name cho các thẻ
    element.className = 'item alert alert-primary';    
}