setInterval(()=>{
    let dateObject=new Date();
    console.log(dateObject);
    let day=document.getElementById("day_container");
    let date=document.getElementById("dates_container");
    let monthContainer=document.getElementById("month_container");
    let dateContainer=document.getElementById("dat_container");
    let yearContainer=document.getElementById("year_container");
    let hourContainer=document.getElementById("hour_container");
    let minContainer=document.getElementById("min_container");
    let msContainer=document.getElementById("ms_container");
    let backtime=document.getElementById("background_time");

    let monthArray=["January","February","March","April","May","June","July","August","Sepetember","October","November","December"];
    let dayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    for(let da=0;da<=dayArray.length-1;da++)
    {
    if(dateObject.getDay()==da)
    {
            day.textContent=dayArray[da];
    }
    }

    for(let da=0;da<=monthArray.length-1;da++)
    {
    if(dateObject.getMonth()==da)
    {
            monthContainer.textContent=monthArray[da];
    }
    }
    dateContainer.textContent=dateObject.getDate();
    yearContainer.textContent=dateObject.getFullYear();
    hourContainer.textContent=dateObject.getHours();
    minContainer.textContent=dateObject.getMinutes();
    msContainer.textContent=dateObject.getSeconds();
    backtime.textContent=dateObject.getSeconds();
    if(dateObject.getSeconds()==0)
    {
        backtime.textContent='00';
    }

},1000);