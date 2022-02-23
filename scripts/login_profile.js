
    import navbarsidebar from "../components/login_navbar.js";
    var body = document.querySelector("#body");
    body.innerHTML = navbarsidebar()

    import profile from "../components/login_form.js"
    
    var verticalbox2 = document.getElementById("verticalbox2");
    verticalbox2.innerHTML = profile()

//7001689064

 let n;
var mobnum = JSON.parse(localStorage.getItem("mobileNumber"))

  n = document.querySelector("#mobnum").textContent = mobnum;
  document.querySelector("#mob").textContent = mobnum;
  document.querySelector("#pp3").textContent = mobnum;

//Code start

// let array_data = [];
// document.getElementById("save").addEventListener("click" , saveval);

// function saveval(){

//  let f = document.querySelector(".firstname").value;
//  let l = document.querySelector(".lastname").value;
//  let e = document.querySelector(".email").value;

//  document.querySelector(".firstname").placeholder = f || "First Name*";
//  document.querySelector(".lastname").placeholder = l || "Last Name*";
//  document.querySelector(".email").placeholder = e || "Email*";



// function user_data(f,l,e,n){
    
//   this.First_name  = f;
//   this.Last_name   = l; 
//   this.Email       = e;
//   this.Mob_Number  = n;
// }    
//  let X = new user_data(f,l,e,n)

//  array_data.push(X)
//  localStorage.setItem("user_profle_data" , JSON.stringify(array_data));
//     console.log(array_data);

// // var placeholderdata = JSON.parse(localStorage.getItem("user_profle_data"));
// // placeholderdata.map((elem) =>{

// //     document.querySelector(".firstname").placeholder = elem.First_name //|| "First Name*";
// //  document.querySelector(".lastname").placeholder = elem.Last_name //|| "Last Name*";
// //  document.querySelector(".email").placeholder = elem.Email //|| "Email*";

// //})



// }


// var placeholderdata = JSON.parse(localStorage.getItem("user_profle_data"));
// placeholderdata.map((elem) =>{

//     document.querySelector(".firstname").placeholder = elem.First_name || "First Name*";
//  document.querySelector(".lastname").placeholder = elem.Last_name || "Last Name*";
//  document.querySelector(".email").placeholder = elem.Email || "Email*";
// })


// document.querySelector("#reset").addEventListener("click" , reset);
// function reset(){
//     document.querySelector(".firstname").placeholder =  "First Name*";
//  document.querySelector(".lastname").placeholder =  "Last Name*";
//  document.querySelector(".email").placeholder =  "Email*";
// }


//Code End

var obj ;


checkDone();


function checkDone(){

    let details = localStorage.getItem("givedetails")

  
    if(details === "true") {
        let loginstat = localStorage.getItem("login");
         if(loginstat === "true"){

             let data = JSON.parse(localStorage.getItem("user_details"));
             let {f , l , e} = data;
             document.querySelector(".firstname").placeholder = f;
             document.querySelector(".lastname").placeholder =  l;
             document.querySelector(".email").placeholder =  e;
        
       }
    }

    else{
        document.querySelector(".firstname").placeholder =  "First Name*";
        document.querySelector(".lastname").placeholder =  "Last Name*";
        document.querySelector(".email").placeholder =  "Email*";
    }
}


document.querySelector("#save").addEventListener("click", ()=>{


     let f = document.querySelector(".firstname").value;
     let l = document.querySelector(".lastname").value;
     let e = document.querySelector(".email").value;
     
     if(f == "" || l == "" || e == ""){
         alert("Please Fill All the details");
         return false
     }
    
     obj = {
         f: document.querySelector(".firstname").value,
         l : document.querySelector(".lastname").value,
         e : document.querySelector(".email").value
     }

     let userObj = {
         firstName: obj.f,
         lastName: obj.l,
         email: obj.e,
         mobileNumber: mobnum
     }

     let link = "https://playo-backend.herokuapp.com/login";
     fetch( link ,
     {
         headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
         },
         method: "POST",
         body: JSON.stringify(userObj)
     })
     .then((res)=>{
         return res.json()
     })
     .then((res)=>{
         console.log(res);
         if("erros" in res){
            console.log(res.erros[0].msg);
            for(let i =0; i<res.erros.length; i++){
                var value = res.erros[i].msg
                alert(value);
            }
             
         }
         else{

            localStorage.setItem("user_details", JSON.stringify(obj));
            localStorage.setItem("givedetails", true);


           let loginstat = localStorage.getItem("login");
           if(loginstat === "true"){

             let data = JSON.parse(localStorage.getItem("user_details"));
             let {f , l , e} = data;
             document.querySelector(".firstname").placeholder = f;
             document.querySelector(".lastname").placeholder =  l;
             document.querySelector(".email").placeholder =  e;
        
       }


         }
         
     })
     .catch((e)=>{
         console.log(e);
     })




     
     console.log(userObj)

     




})


document.querySelector("#reset").addEventListener("click", ()=>{

    document.querySelector(".firstname").placeholder =  "First Name*";
    document.querySelector(".lastname").placeholder =  "Last Name*";
    document.querySelector(".email").placeholder =  "Email*";
    window.localStorage.removeItem('user_details');
    localStorage.setItem("givedetails", false);
    alert("Please update the details you want")
    
})








// footer

let foot= document.getElementById("footer");
    import footer from "../components/footer.js";
    foot.innerHTML=footer();






//dropbox
// var dropboxshow = document.getElementById("mainm")

// dropboxshow.addEventListener("click" , dropbox)

// function dropbox(){
//     document.getElementById("menu").style.display ="block";


// }


document.querySelector("#menu").style.visibility = "hidden";
document.querySelector("#mainm").addEventListener("click", first);

function first(){
    document.querySelector("#menu").style.visibility = "visible";
    console.log("Test")
    this.removeEventListener("click", first);
    document.querySelector("#mainm").addEventListener("click", ()=>{
        document.querySelector("#menu").style.visibility = "hidden";
        document.querySelector("#mainm").addEventListener("click", first);
    })
}



// document.querySelector(".d2").addEventListener("click" , callback);

// function callback(){
//     localStorage.setItem("login" , false);
//     window.location.href = "venues.html";
// }
    document.querySelector("#logoutBtn").addEventListener("click", ()=>{
        localStorage.setItem("login", false);
        window.localStorage.removeItem('user_details');
        localStorage.setItem("givedetails", false);
        window.location.href = "venues.html";
    })



    //obj.mobilenum = mobnum;
    //console.log(obj)
