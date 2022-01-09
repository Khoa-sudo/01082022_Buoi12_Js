// Bài 3: XD chức năng xl cho nút button#btn_Change => 
// khi click vào thì thẻ p#p_Content sẽ ẩn đi
// Và thẻ h3#h3_Title sẽ thay đổi css => opacity 0.5
// border viền đen, background màu đỏ fontSize 30

document.getElementById('btn_Change').onclick = () => {
    var tagChange = document.getElementById('p_Content');
    tagChange.style.display = "none";

    var h3_Title = document.getElementById('h3_Title');
    h3_Title.style.fontSize = '30px';
    h3_Title.style.opacity = '0.7';
    h3_Title.style.border = "1px solid #333";
    h3_Title.style.background = "red";
    h3_Title.style.color = "#333";
}