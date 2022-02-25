

    

    
//Login and pop up full functionalities start

document.querySelector("#logo").addEventListener("click", ()=>{
    window.location.href = "../index.html";
})


// navbar popup functionality
document.querySelector("#giveOTP").style.visibility = "hidden";

const open = document.getElementById("nav2div");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", ()=>{
    modal_container.classList.add("show")
});

close.addEventListener("click", ()=>{
    modal_container.classList.remove("show")
});




//If user is logged in 
login()

function login(){
    console.log("test")
    let loginStatus = localStorage.getItem("login")
    console.log(typeof(loginStatus))
    if(loginStatus === "true"){
        let ph = localStorage.getItem("mobileNumber");
        console.log(ph)
        document.querySelector("#myBtn").textContent = ph;
        open.addEventListener("click", ()=>{
            modal_container.classList.remove("show")
            window.location.href = "login_profile.html";
        })
    
    }
    else{
        return false;
    }

}



//When user add mobile number to it
document.querySelector("#sendOTP").addEventListener("click", ()=>{
    let mobNo = document.querySelector("#input").value;
    if(mobNo.length != 10){
        alert("Please Give correct Mobile Number");
    }
    else{
        localStorage.setItem("mobileNumber", mobNo);
        // modal_container.style.visibility = "hidden";
        // document.querySelector(".loginp")
        document.querySelector("#entermobile").textContent = `We have sent an OTP to ${mobNo}`;
        document.querySelector("#rem1").style.visibility = "hidden";
        document.querySelector("#rem2").style.visibility = "hidden";
        document.querySelector("#countryDrop").style.visibility = "hidden";
        document.querySelector("#input").value = null;
        document.querySelector("#input").placeholder = "Enter OTP"
        document.querySelector("input").style.textAlign = "center";
        document.querySelector("#sendOTP").style.visibility = "hidden";
        document.querySelector("#giveOTP").style.visibility = "visible";

        document.querySelector("#giveOTP").addEventListener("click", ()=>{

            let otp = document.querySelector("input").value;
            if(otp == "123456"){
                // alert("success");
                modal_container.classList.remove("show")
                document.querySelector("#myBtn").textContent = mobNo;
                localStorage.setItem("login", true);


                open.addEventListener("click", ()=>{
                    modal_container.classList.remove("show")
                    window.location.href = "login_profile.html";
                    login()

                })


            }
            else{
                alert("Wrong OTP");
                document.querySelector("#entermobile").textContent = `Enter Your mobile number`;
                document.querySelector("#rem1").style.visibility = "visible";
                document.querySelector("#rem2").style.visibility = "visible";
                document.querySelector("#countryDrop").style.visibility = "visible";
                document.querySelector("#input").value = null;
                document.querySelector("#input").placeholder = "Enter Mobile Number"
                document.querySelector("#sendOTP").style.visibility = "visible";
                document.querySelector("#giveOTP").style.visibility = "hidden";

            }

        })
       
    }
})

//Login and pop up full functionalities end











    // importing footer part
    import footer from "../components/footer.js";
    let footer_div = document.getElementById("footer");
    footer_div.innerHTML = footer();

  



    let price = localStorage.getItem("finalPrice") * 100
    let user = localStorage.getItem("user_details")
    user = JSON.parse(user)
    console.log(user)


    let cart = localStorage.getItem("cart_details")
    cart = JSON.parse(cart)
    console.log(cart)

    // var options = {
    //     "key": "rzp_test_YRchQmUUNwRgXd", // Enter the Key ID generated from the Dashboard
    //     "amount": price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //     "currency": "INR",
    //     "name": "Playo",
    //     "description": "Test Payment",
    //     "image": "https://playo-website.gumlet.net/logo/playo-logo-header-website.png?auto=compress,format&q=90",
    //     // "order_id": "order_Ef80WJDPBmAeNt", //Pass the `id` obtained in the previous step
    //     // "account_id": "acc_Ef7ArAsdU5t0XL",
    //     "handler": function (response){
    //         alert(response.razorpay_payment_id);
    //         alert(response.razorpay_order_id);
    //         alert(response.razorpay_signature)
    //     }
    // };
    // var rzp1 = new Razorpay(options);
    // document.getElementById('rzp-button1').onclick = function(e){
    //     rzp1.open();
    //     e.preventDefault();
    // }











   var obj = {
       price: price
   }


    fetch("https://playo-backend.herokuapp.com/order/create",
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(obj)
    })
    .then((res)=>{
        return res.text()
    })
    .then((res)=>{
        //console.log(res);
        res = JSON.parse(res)
        console.log(res)

        var options = {
            "key": "rzp_test_YRchQmUUNwRgXd", 
            "currency": "INR",
            "name": "Playo-Clone",
            "description": "Test Transaction",
            "image": "https://playo-website.imgix.net/company/logo1.png?auto=compress,format",
            "order_id": res.id, 
            // "callback_url": "https://playo-backend.herokuapp.com/order/status",
            "theme": {
                "color": "#3399cc"
            },
            "handler": function (response){
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
                let payment ={
                    payment_id: response.razorpay_payment_id,
                    order_id:response.razorpay_order_id,
                }
                localStorage.setItem("payment_details" , JSON.stringify(payment));
                alert("Payment Successfull")
                window.location.href = "success.html"
            },
            "prefill": {
                "name": `${user.user.firstName} ${user.user.lastName}`,
                "email": user.user.email,
                "contact": user.user.mobileNumber
            },
            
            "theme": {
                "color": "#679F00"
            }

           
        };

        var rzp1 = new Razorpay(options);
        document.getElementById('rzp-button1').onclick = function(e){
            rzp1.open();
            e.preventDefault();
        }








    })
    .catch((e)=>{
        console.log(e);
    })

         