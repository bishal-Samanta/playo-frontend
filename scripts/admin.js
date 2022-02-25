
// these is function for fetch bookings count from our heroku serever
let url4 = "https://playo-backend.herokuapp.com/orders";
async function getorders() {
  try {
          let res = await fetch(url4);

          let response = await res.json();

          let orders = response;
          console.log(orders)
          document.getElementById("bookingnum").innerText= orders.length;
  } 
  catch (err) {
      console.log("err:", err);
  }
}
getorders();


// these is function for fetch users count from our heroku server 
let url = "https://playo-backend.herokuapp.com/login";
async function getUsers() {
    try {
            let res = await fetch(url);

            let response = await res.json();

            let users = response;
            // console.log(users.length)
            document.getElementById("usernum").innerText= users.length;
        
    } 
     catch (err) {
        console.log("err:", err);
    }
}
getUsers();


// these is function for fetch event count from our heroku server 
let url2 = "https://playo-backend.herokuapp.com/events";
async function getevents() {
    try {
           let res = await fetch(url2);

            let response = await res.json();

            let events = response;
            // console.log(events.length)
           document.getElementById("eventsnum").innerText= events.length;
        
    } 
    catch (err) {
        console.log("err:", err);
    }
}
getevents();

// these is function for fetch venues count from our heroku server 
let url3 = "https://playo-backend.herokuapp.com/venues";
async function getvenues() {
    try {
           let res = await fetch(url3);

            let response = await res.json();

            let venues = response;
            // console.log(venues.length)
           document.getElementById("venuesnum").innerText= venues.length;
        
    } 
    catch (err) {
        console.log("err:", err);
    }
}
getvenues();


// let foot= document.getElementById("footer");

//     import footer from "../components/footer.js";

//     foot.innerHTML= footer();