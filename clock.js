let updt_time = document.querySelector("#updt_time");
let updt_date = document.querySelector("#updt_date");
let am_pm = document.querySelector(".time-sub-text");

const d = new Date();
//condition ? value_if_true : value_if_false
function updater(){
    setInterval( () => {
        let hours = new Date().getHours();
        let minute = new Date().getMinutes();
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day = weekday[d.getDay()];
        let year = new Date().getFullYear()
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let up_month = month[d.getMonth()]
        let date = new Date().getDate()
        // updt_time.innerText=`${hours}:${minute}`;
        if(minute <10){
            updt_time.innerText=`${hours}:0${minute}`
        }else{
            updt_time.innerText=`${hours}:${minute}`
        }
        updt_date.innerText=`${day} , ${up_month} ${date} ${year}`
        if(hours>=12){
            am_pm.innerText = `PM`;
        }else{
            am_pm.innerText = `AM`;
        }
    },1000 )
}
updater()
