var account = "cybersoft";
var pws = "cybersoft";

document.getElementById('notice').onclick = ()=>{
    var tagAccount = document.getElementById('taiKhoan').value;
    var tagPassword = document.getElementById('matKhau').value;
    if(tagAccount == account && tagPassword == pws){
        notice.className = "btn btn-success";
        notice.innerHTML = "Đăng nhập thành công";
    }else{        
        notice.className = "btn btn-danger";
        notice.innerHTML = "Đăng nhập không thành công";
        document.getElementById('taiKhoan').focus();
    }
}
