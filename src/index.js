// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

  

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
// 1. Select the table body~

const threeContacts= contacts.splice(0, 3);

threeContacts.forEach(contact => {
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `

    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td> ${contact.name} </td>
    <td> ${contact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

tableBody.appendChild(exampleRow);
 });


  // ITERATION 2 - Delete Buttons
  
  const deleteBtn = exampleRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
     //exampleRow.style.display = "none";
    exampleRow.remove();
    });

  
  // ITERATION 3 - Like Buttons

    
const likeBtn = exampleRow.querySelector(".btn-like");

likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("selected");
    //exampleRow.style.display = "none";
});


// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * contacts.length)
    const randomContact = contacts[randomIndex]

    contacts.splice(randomIndex, 1);

    const myTableRow = document.createElement("tr");
    myTableRow.innerHTML = 
    `<td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td> ${randomContact.name} </td>
    <td> ${randomContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
    </td>`

  tableBody.appendChild(myTableRow);

  const deleteBtn = myTableRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    myTableRow.remove();
  })

  const likeBtn = myTableRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  })
});