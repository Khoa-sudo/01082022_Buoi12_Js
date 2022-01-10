
document.getElementById("btnTinhTien").onclick = () => {
    var tongTien = document.querySelector('#tongTien').value;
    var phanTramTip = document.querySelector("#phanTramTip").value; 
    var soNguoi = document.querySelector('#soNguoi').value;
    
    var tienTipTrenNguoi = (tongTien * phanTramTip / 100) / soNguoi;  
    
    document.querySelector("#tienTip").innerHTML = tienTipTrenNguoi.toFixed(2);
    
}
