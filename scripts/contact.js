let foot = document.getElementById("footer");
import footer from "../components/footer.js";
foot.innerHTML = footer();


// name: { type: String, required: true},
//       mobileNumber: {type: Number , required: true},
//       email: {type : String , required: true },
//       message: {type: String , required: true}


//Send Emails
document.querySelector("#submitButton").style.cursor = "pointer"

document.querySelector("#submitButton").addEventListener("click" , ()=>{
  console.log("Test")
  //store value
  let name = document.querySelector("#uname").value;
  let mobileNumber = document.querySelector("#unumber").value;
  let email = document.querySelector("#uuemail").value;
  let message = document.querySelector("#query").value;

  let obj = {
    name,
    mobileNumber,
    email,
    message
  }
  console.log(obj)

  obj = JSON.stringify(obj);

  //Make Post request
  fetch("http://localhost:1232/contacts",
          {
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              },
              method: "POST",
              body: obj
          })
          .then((res)=>{
              return res.text()
          })
          .then((res)=>{
              console.log(res);
              
          })
          .catch((e)=>{
              console.log(e);
          })







})
