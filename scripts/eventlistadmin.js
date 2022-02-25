
    // these is function for fetch events data from our heroku serever
    let url = "https://playo-backend.herokuapp.com/events";
    async function getevents() {
        try {
                let res = await fetch(url);

                let response = await res.json();

                let events = response;
                console.log(events)
                appendevents(events);
        } 
        catch (err) {
            console.log("err:", err);
        }
    }
    getevents();

    // these is function for appending the fetched events data to the table 
    var tablebody = document.getElementById("eventtablebody");
    function appendevents(arr){
        arr.forEach(function(event) {
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

            td1.textContent = event._id;
            td2.textContent = event.name ;
            td3.textContent = event.city;
            td4.textContent = 9423782429;        

            tr.append(td1,td2,td3,td4);
            tablebody.append(tr);
        });

    }