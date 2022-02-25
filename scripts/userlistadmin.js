// these is function for fetch users data from our heroku server 
let url = "https://playo-backend.herokuapp.com/login";
async function getUsers() {
    try {
            let res = await fetch(url);

            let response = await res.json();

            let users = response;
            console.log(users)
            appendUsers(users);
    } 
    catch (err) {
        console.log("err:", err);
    }
}
getUsers();

// these is function for appending the fetched users to the table 
var tablebody = document.getElementById("usertablebody");
function appendUsers(arr){
    arr.forEach(function(user) {
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

        td1.textContent = user._id;
        td2.textContent = user.firstName +" "+ user.lastName;
        td3.textContent = user.email;
        td4.textContent = user.mobileNumber;        

        tr.append(td1,td2,td3,td4);
        tablebody.append(tr);
    });

}