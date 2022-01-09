document.getElementById('btnLightOn').onclick = () => {
    var tagImg = document.getElementById('lightOn');
    tagImg.src = "/images/pic_bulbon.gif";
    //Active nút bật đèn
    var btnLightOn = document.getElementById('btnLightOn');
    btnLightOn.className = 'btn btn-success';

    //Disable nút tắt đèn
    var btnLightOff = document.getElementById('btnLightOff');
    btnLightOff.className = '';
}

document.getElementById('btnLightOff').onclick = () => {
    var tagImg = document.getElementById('lightOn');
    tagImg.src = "/images/pic_bulboff.gif";
    //Active nút tắt đèn
    var btnLightOff = document.getElementById('btnLightOff');
    btnLightOff.className = 'btn btn-success';

    //Disable nút bật đèn
    var btnLightOn = document.getElementById('btnLightOn');
    btnLightOn.className = '';
}