 // getting user inputs from add venue wala form
 document.getElementById("addvenueform").addEventListener("submit", collectvenuedata)
 function collectvenuedata(event){
     event.preventDefault();
     var venuename = document.getElementById("venuename").value;
     var lat = document.getElementById("lat").value;
     var lng = document.getElementById("lng").value;
     var venuecity = document.getElementById("venuecity").value;
     var venueimage = document.getElementById("venueimage").value;
     var sportname = document.getElementById("sportname").value;

     let addvenueobject = {
         name : venuename,
         lat : lat,
         lng : lng,
         location : venuecity,
         imgUrl : venueimage,
         filter_by : sportname,
     }

     // post request for add function code from bishal

     fetch("http://playo-backend.herokuapp.com/venues",
                 {
                     headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                     },
                     method: "POST",
                     body: JSON.stringify(addvenueobject)
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
     console.log(addvenueobject);
     console.log(venuename,lat,lng,venuecity,venueimage,sportname);

 }

     // getting user inputs from update venue wala form
 document.getElementById("updatevenueform").addEventListener("submit", updatevenuedata)
 function updatevenuedata(event){
     event.preventDefault();
     var venueid = document.getElementById("venueid").value;
     var venuename2 = document.getElementById("venuename2").value;
     var lat2 = document.getElementById("lat2").value;
     var lng2 = document.getElementById("lng2").value;
     var venuecity2 = document.getElementById("venuecity2").value;
     var venueimage2 = document.getElementById("venueimage2").value;
     var sportname2 = document.getElementById("sportname2").value;

     let updatevenueobject = {
         _id : venueid,
         name : venuename2,
         lat : lat2,
         lng : lng2,
         location : venuecity2,
         imgUrl : venueimage2,
         filter_by : sportname2,
     }

     //Update venues Code 
     fetch(`http://playo-backend.herokuapp.com/venues/${venueid}`,
                 {
                     headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                     },
                     method: "PATCH",
                     body: JSON.stringify(updatevenueobject)
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

                 
     //console.log(updatevenueobject);
     console.log(venueid,venuename2,lat2,lng2,venuecity2,venueimage2,sportname2)
 }