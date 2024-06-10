
const inputBox = document.querySelector(".inputBox");
const clicktoAdd = document.querySelector(".addbtn")
const elements = document.querySelector(".elements");
const heading = document.querySelector(".heading");
clicktoAdd.addEventListener("click", (e) => {
   e.preventDefault();
   let userInput = inputBox.value.trim();
   if (userInput != "") {

      console.log(inputBox.value);
      const itemContainer = document.createElement("ul");
      itemContainer.classList.add("list")

      itemContainer.innerHTML = `<li class="element">${userInput}</li>
          <li>
            <button class="action">Delete</button>
          </li>`
       heading.textContent = "Todo App"
      elements.appendChild(itemContainer);
        

      inputBox.value = "";
      const deleteBtn = itemContainer.querySelector(".action");
      
      deleteBtn.addEventListener("click" , () =>{
         elements.removeChild(itemContainer);
         localSave();
      });
      

   }else{
      heading.textContent = "Hey Recall Please!"
   }


});

 



