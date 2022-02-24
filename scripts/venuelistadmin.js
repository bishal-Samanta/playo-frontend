// these function is for fetch venue data from herocu server
let url = "https://playo-backend.herokuapp.com/venues";
async function getvenues() {
    try {
            let res = await fetch(url);

            let response = await res.json();

            let venues = response;
            console.log(venues)
            appendvenues(venues);
    } 
    catch (err) {
        console.log("err:", err);
    }
}
getvenues();

// these is function for appending the fetched venues data to the table 
var tablebody = document.getElementById("venuestablebody");
function appendvenues(arr){
    arr.forEach(function(venue) {
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

        td1.textContent = venue._id;
        td2.textContent = venue.name ;
        td3.textContent = venue.location;
        td4.textContent = venue.filter_by;        

        tr.append(td1,td2,td3,td4);
        tablebody.append(tr);
    });

}