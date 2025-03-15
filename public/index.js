//main container 


const mainContainer = document.querySelector(".main-container");
const addCardBtn = document.getElementById("add-card-btn");



addCardBtn.addEventListener("click",()=>{

const card = document.createElement("div")
card.classList.add("card")


card.innerHTML = `
<div class="img-container">
<input type="file" name="image" class="image" placeholder="+">
<img class="preview"  alt="image preview">
    </div>
    <input type = "text" placeholder="name">
    <input type = "text" placeholder="price">
<button class = "submit-btn">submit</button>

`



mainContainer.appendChild(card)


// image preview
const imageInput  = card.querySelector(".image");
const preview  = card.querySelector(".preview");

imageInput.addEventListener("change",()=>{


const file = imageInput.files[0];

if(file){

    const reader = new FileReader;
    
    reader.onload = (e)=>{
        preview.src = e.target.result;
        preview.style.display = "block"; 

        
    }
    reader.readAsDataURL(file)
}


})


})


