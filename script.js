const multiplier = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() =>{
    let day = new Date();
    let hour = day.getHours()*30;
    let minute = day.getMinutes()*multiplier;
    let second = day.getSeconds()*multiplier;
   
    hr.style.transform = `rotateZ(${hour + (minute/12)}deg)`
    mn.style.transform = `rotateZ(${minute}deg)`
    sc.style.transform = `rotateZ(${second}deg)`
    let dhr =hour/30;
    if(dhr >12){
        dhr = dhr % 12;
    }
    document.querySelector(".dhr p").innerHTML = dhr;
    document.querySelector(".dmn p").innerHTML = minute/multiplier;
    document.querySelector(".dsc p").innerHTML =second/multiplier;
})

