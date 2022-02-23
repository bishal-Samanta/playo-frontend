
    function appendNews(data, location){
        location.innerHTML = "";
        data.map((el)=>{
            //Destructuring of object to get value

            let { title , description, url, image , publishedAt } = el;

            if(title == null || description == null || image == null || publishedAt == null){
                return false;
            }

            //Creating elements
            let mainDiv = document.createElement("div");
            let imgDiv = document.createElement("div");
            let img = document.createElement("img");
            let dateDiv = document.createElement("div");
            let titleDiv = document.createElement("div");
            let descriptionDiv = document.createElement("div");

            //Set all value
            img.src = image;
            titleDiv.textContent = title;
            descriptionDiv.textContent = description;
            dateDiv.textContent = publishedAt;


            //Append Properly
            imgDiv.append(img);
            mainDiv.append(imgDiv, dateDiv, titleDiv, descriptionDiv);
            location.append(mainDiv);

            //Go to the news url 
            mainDiv.addEventListener("click", ()=>{
                window.open( url , '_blank');
            })



        })
    }

    export default appendNews