
window.onload=function(){
    document.getElementById('knopkafeedback').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'block';
    })

    document.getElementById('knopkatelegram').addEventListener('click', function () {
        document.getElementById('telegram').style.display = 'block';
    })
    document.getElementById('knopkawhatsApp').addEventListener('click', function () {
        document.getElementById('whatsApp').style.display = 'block';
    })
    document.getElementById('knopkagmail').addEventListener('click', function () {
        document.getElementById('gmail').style.display = 'block';
    })
}
