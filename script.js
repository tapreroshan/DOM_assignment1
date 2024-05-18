
let users = [
    { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv" },
    { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net" },
    { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org" },
    { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca" },
    { id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info" },
    { id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz" },
    { id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me" },
    { id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io" },
    { id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz" }
  ];
  
  // Function to create user card
  function createUserCard(user) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    `;
    return card;
  }
  
  // Function to display user cards
  function displayUserCards() {
    const userCardsContainer = document.getElementById('userCardsContainer');
    userCardsContainer.innerHTML = '';
    users.forEach(user => {
      const card = createUserCard(user);
      userCardsContainer.appendChild(card);
    });
  }
  
  // Function to add new user
  function addNewUser() {
    const nameInput = document.getElementById('name');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
  
    const newUser = {
      id: users.length + 1,
      name: nameInput.value,
      username: usernameInput.value,
      email: emailInput.value
    };
  
    users.push(newUser);
    displayUserCards();
  
    // Clear the input fields
    nameInput.value = '';
    usernameInput.value = '';
    emailInput.value = '';
  }
  
  // Event listener for the Add User button
  document.getElementById('addUserBtn').addEventListener('click', addNewUser);
  
  // Initial display of user cards
  displayUserCards();
  