

var bronname = document.getElementById("bronname")
var bronnumber = document.getElementById("bronnumber")
var brondan = document.getElementById("brondan")
var brongacha = document.getElementById("brongacha")
var bronbtn = document.getElementById("bronbtn")



bronbtn.addEventListener('click',()=> {
       var message = `<b>Бронировать</b> %0A <b>Имя:</b>${bronname.value} %0A <b>Номер телефона:</b> ${bronnumber.value} %0A <b>От:</b> ${brondan.value} %0A <b>До:</b> ${brongacha.value}`;
        
        let token = "6380737162:AAHKL3KxyRVHzqw6gPjVGi8Mm44zG7gO0N0";
        let chat_id = -1001949310369;
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=html`;
    
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.send();        
        
        bronname.value = ""
        bronnumber.value = ""
        brondan.value =" "
        brongacha.value = " "
})
