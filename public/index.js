const mainContainer = document.querySelector(".main-container");
const addCardBtn = document.getElementById("add-card-btn");

addCardBtn.addEventListener("click", () => {
  const card = document.createElement("div");
  card.classList.add("card");
  
  card.innerHTML = `
    <div class="img-container">
      <input type="file" name="image" class="image" accept="image/*">
      <img class="preview" alt="image preview" style="display: none;">
    </div>
    <input type="text" placeholder="name" class="name_input">
    <input type="text" placeholder="price" class="price_input">
    <button class="submit-btn">Submit</button>
  `;

  mainContainer.appendChild(card);

  // Image preview functionality
  const imageInput = card.querySelector(".image");
  const preview = card.querySelector(".preview");
  
  imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    if(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        preview.src = e.target.result;
        preview.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

  // Form submission - Moved inside the card creation
  const submitBtn = card.querySelector(".submit-btn");
  submitBtn.addEventListener("click", async () => {
    const name = card.querySelector(".name_input").value;
    const price = card.querySelector(".price_input").value;
    const imageFile = imageInput.files[0];

    if(!name || !price || !imageFile) {
      alert("All fields are required");
      return;
    }

    const formData = new FormData();  // Corrected capitalization
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", imageFile);

    try {
      const response = await fetch("http://localhost:3000/api/v1/products/add", {
        method: "POST",  // String literal, not variable
        body: formData   // No need for Content-Type header with FormData
      });

      if(!response.ok) {  // Check response.ok, not just response
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();  // Need to await json parsing
      console.log("Success:", result);
      alert("Product added successfully!");
      
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding product");
    }
  });
});