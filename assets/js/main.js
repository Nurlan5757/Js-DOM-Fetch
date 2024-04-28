const API_URL = "https://api.tvmaze.com/shows"
var area = document.getElementById("cards-area");
const result = fetch(API_URL)
result.then((result)=>{
  return result.json();
}).then((data)=>{
  console.log(data);
  data.map((show)=>{
    area.innerHTML+=`
    <div class="col-md-3 my-10px ">
   <div class="card" style="width: 18rem;">
      <img src="${show.image.original}"heigth="500px" class="card-img-top" alt="${show.name}">
       <div class="card-body">
         <h5 class="card-title">${show.name}</h5>
         <p class="card-text">${show.language} <br>${show.ended}<br>${show.status} </p>
         <a href="#" class="btn btn-primary">About</a>
      </div>
     </div>
   </div>
    `
  })
})





