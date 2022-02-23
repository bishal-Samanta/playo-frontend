 

  // for (let x in data) {
  //   var cityx = data[x];
  // }
  // console.log(cityx);

  // let con = document.getElementById("con");

  // async function add(url) {
  //   try {
  //     var url = `http://127.0.0.1:5000/playo/cities`;
  //     let response = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     let d = await response.json();
  //     console.log("d:", d);
  //     display(d);
  //   } catch (err) {
  //     console.log("err:", err);
  //   }
  // }


  // display = (e) => {
  //   //  console.log('e:', e)
  //   e.forEach((el) => {
  //     for (x in data) {
  //       var c = data[x];
  //     }

  //     //   var div = document.getElementById("places");
  //     //   // div.setAttribute("id","places")
  //     //   var location= document.createElement("p");
  //     //   location.innerText= el.location
  //     //   let img= document.createElement("img")
  //     //   img.src= el.image
  //     //   img.setAttribute("id","conimage")

  //     //   let timing= document.createElement("p")
  //     //   timing.innerText=el.timing

  //     // // console.log(el.timing)

  //     //   var name = document.createElement("p");
  //     //   name.innerText=el.name

  //     //   Book= "BOOKABLE",
  //     //   safe= "Safe & Hygiene"

  //     if (el.city === c) {
  //       let y = `  <div onclick="details(${el.id})" id= "places">
  //       <div>
  //         <img src="${el.image}" alt="" class="conimage">
  //         <p class="imgtext">Coaching</p>
  //       </div>
  //       <p class="highlighttext">${el.name}</p>
  //       <p class="location">${el.location}</p>
  //       <p class="timing"><img src="./images/clock.png" alt="" class="clockicon">${el.timing}</p>
  //       <p class="coaching">${el.name}  Coaching</p>
  //     </div>`;

  //       let place = document.getElementById("place");
  //       place.setAttribute("class", "bold");
  //       place.innerHTML = el.city;
  //       con.innerHTML += y;
  //     } else {
  //       console.log("err");
  //     }
  //   });
  // };


  // add();
 









//Filtering array of objects from the data base start (With Debouncing Feature)

//=======================================================================>

    //Selectiong Html Content

   


    let my_value = JSON.parse(localStorage.getItem("name"));
    console.log(my_value.city)

    searchLocation();
    //Search Function Code 
    async function searchLocation(){
        //Getting the value again
        var search_value = my_value.city;


       

        let response = await fetch("https://playo-backend.herokuapp.com/events");
        let data = await response.json();
        //console.log(data);

        //Writing Function for filter data based on search results

        let filterData = data.filter((el)=>{
            let regex = new RegExp(`^${search_value}`, "gi" );
            return el.city.match(regex);
        })

        console.log(filterData);
       apprndData(filterData)
    }


  //===========================================================================>




   //Append Data Function 
   function apprndData(data){
     document.querySelector("#con").innerHTML = null;
     //console.log(data)
    data.map((el)=>{
      //console.log();
      // let mongoId = el._id
      // let y = `  <div onclick="details(${el.id})" id= "places" class="clickdiv">
      //   <div>
      //     <img src="${el.image}" alt="" class="conimage">
      //     <p class="imgtext">Coaching</p>
      //   </div>
      //   <p class="highlighttext">${el.name}</p>
      //   <p class="location">${el.location}</p>
      //   <p class="timing"><img src="./images/clock.png" alt="" class="clockicon">${el.timing}</p>
      //   <p class="coaching">${el.name}  Coaching</p>
      // </div>`;

      //   let place = document.getElementById("place");
      //   place.setAttribute("class", "bold");
      //   place.innerHTML = el.city;
      //   con.innerHTML += y;

      let mainDiv = document.createElement("div");
      mainDiv.setAttribute("class" , "clickdiv")
      mainDiv.setAttribute("id" , "places")

      let innerDiv = document.createElement("div");

      let img = document.createElement("img");
      img.setAttribute("class" , "conimage")

      let imageP = document.createElement("p");
      imageP.setAttribute("class" , "imgtext")  

      let highlightText = document.createElement("p");
      highlightText.setAttribute("class" , "highlighttext")  

      let locationText = document.createElement("p");
      locationText.setAttribute("class" , "location");


      let timingp = document.createElement("p");
      timingp.setAttribute("class" , "timing")  

      let clockImage = document.createElement("img");
      clockImage.setAttribute("class" , "clockicon" )  

      let coachingP = document.createElement("p");
      coachingP.setAttribute("class" , "coaching");
      
      coachingP.textContent = el.name +" "+  "Coaching";
      timingp.textContent = el.timing;
      locationText.textContent = el.location;
      highlightText.textContent = el.name
      imageP.textContent = "Coaching";
      img.src = el.image;

      innerDiv.append(img, imageP);
      timingp.append(clockImage);
      mainDiv.append(innerDiv , highlightText , locationText , timingp , coachingP )
      
      document.querySelector("#con").append(mainDiv);  
      
      mainDiv.addEventListener("click" , ()=>{
        console.log(el._id)
        details(el._id)
      })
        

    })
  

   }


   function details(x) {
    console.log("id:", x);
    let data = {
      id: x,
    };

    let location = localStorage.setItem("id", JSON.stringify(data));
    window.location.href = "singleEvent.html";
  }
   



   


