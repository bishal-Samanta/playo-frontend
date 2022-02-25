// these is function for fetch events data from our heroku serever
let url = "https://playo-backend.herokuapp.com/orders";
async function getorders() {
  try {
          let res = await fetch(url);

          let response = await res.json();

          let orders = response;
          console.log(orders)
          appendorders(orders);
  } 
  catch (err) {
      console.log("err:", err);
  }
}
getorders();

// these function for display fetched data on admin page

var tablebody = document.getElementById("bookingtablebody");
function appendorders(arr)
{
  arr.forEach(function(order) {
      var tr = document.createElement("tr");
      tr.id="trow";
      var td1 = document.createElement("td");
      td1.id = "td1";
      var td2 = document.createElement("td");
      td2.id = "td2";
      var td3 = document.createElement("td");
      td3.id = "td3";
      var td4 = document.createElement("td");
      td4.id = "td4";
      var td5 = document.createElement("td");
      td5.id = "td5";

      td1.textContent = order._id;
      td2.textContent = order.user_id.firstName +" "+order.user_id.lastName;
      td3.textContent = order.user_id.mobileNumber;
      td4.textContent = order.club_id.name;
      td5.textContent = "successful";

      tr.append(td1,td2,td3,td4,td5);
      tablebody.append(tr);
      
  });
}