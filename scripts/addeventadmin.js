 // function for getting event data from admin
 document.getElementById("addeventform").addEventListener("submit", collecteventdata)
 function collecteventdata(event){
     event.preventDefault();
     var eventname = document.getElementById("eventname").value;
     var eventaddress = document.getElementById("eventaddress").value;
     var eventcity = document.getElementById("eventcity").value;
     var eventimage = document.getElementById("eventimage").value;
     var eventtime = document.getElementById("eventtime").value;
     var playid = document.getElementById("playid").value;
     var eventimage12 = document.getElementById("eventimage12").value;
     var eventoverview = document.getElementById("eventoverview").value;
     var eventgoals = document.getElementById("eventgoals").value;

     let addeventobject = {
         city : eventcity,
         name : eventname,
         location: eventaddress,
         image : eventimage,
         timing : eventtime,
         id : playid,
         image2 : eventimage12,
         overview : eventoverview,
         goals : eventgoals,
     }

     // post request for add function code from bishal

     fetch("https://playo-backend.herokuapp.com/events",
                 {
                     headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                     },
                     method: "POST",
                     body: JSON.stringify(addeventobject)
                 })
                 .then((res)=>{
                     return res.text()
                 })
                 .then((res)=>{
                     console.log(res);
                     // localStorage.setItem("user_details" , res);
                 })
                 .catch((e)=>{
                     console.log(e);
                 })
     console.log(addeventobject)
     console.log(eventname,eventaddress,eventcity,eventimage,eventtime,playid,eventimage12,eventoverview,eventgoals)
 }

     // function for update event data from admin
 document.getElementById("updateeventform").addEventListener("submit", updateeventdata)
 function updateeventdata(event){
     event.preventDefault();
     var eventid = document.getElementById("eventid").value;
     var eventname2 = document.getElementById("eventname2").value;
     var eventaddress2 = document.getElementById("eventaddress2").value;
     var eventcity2 = document.getElementById("eventcity2").value;
     var eventimage2 = document.getElementById("eventimage2").value;
     var eventtime2 = document.getElementById("eventtime2").value;
     var playid2 = document.getElementById("playid2").value;
     var eventimage22 = document.getElementById("eventimage22").value;
     var eventoverview2 = document.getElementById("eventoverview2").value;
     var eventgoals2 = document.getElementById("eventgoals2").value;

     let addeventobject = {
         _id : eventid,
         city : eventcity2,
         name : eventname2,
         location: eventaddress2,
         image : eventimage2,
         timing : eventtime2,
         id : playid2,
         image2 : eventimage22,
         overview : eventoverview2,
         goals : eventgoals2,
     }

     console.log(addeventobject)
     console.log(eventid,eventname2,eventaddress2,eventcity2,eventimage2,eventtime2,playid2,eventimage22,eventoverview2,eventgoals2)
 }

//  importing footer from component file
 let foot= document.getElementById("footer");

 import footer from "../components/footer.js";

 foot.innerHTML= footer();