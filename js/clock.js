let Name = prompt("Adınız Nedir?");
let myName = document.querySelector("#myName");

if(Name){
    myName.innerHTML = `${Name} `
}else{
    alert("Bir isim giriniz.")
    location.reload();
}

function showTime(){
    let date = new Date().toLocaleString('tr-TR'); 
    document.getElementById('myClock').innerHTML=date;
    setTimeout(showTime, 1000);  
}

setInterval(showTime, 1000);