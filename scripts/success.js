

    let price = localStorage.getItem("finalPrice") * 100
    let user = localStorage.getItem("user_details")
    user = JSON.parse(user)
    console.log(user)


    let cart = localStorage.getItem("cart_details")
    cart = JSON.parse(cart)
   

    let payment = localStorage.getItem("payment_details");
    payment = JSON.parse(payment);
    console.log(payment)

    cart.payment_id = payment.payment_id
    cart.order_id = payment.order_id
    console.log(cart)


    fetch("http://localhost:1232/orders",
                    {
                        headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                        },
                        method: "POST",
                        body: JSON.stringify(cart)
                    })
                    .then((res)=>{
                        return res.text()
                    })
                    .then((res)=>{
                        console.log(res);
                        localStorage.setItem("order_success" , res);
                       
                    })
                    .catch((e)=>{
                        console.log(e);
                    })
