// Adds data to local storage
window.onload = () => {
  // Register User
  const signUpName = document.getElementById('signUpName');
  const signUpEmail = document.getElementById('signUpEmail');
  const signUpPassword = document.getElementById('signUpPassword');
  const signUp = document.getElementById('signUpDetails');

  signUp.addEventListener('click', () => {
    let dbUsersArray = [];
    let oldUsersDB;
    let userObject = {
      name: signUpName.value,
      email: signUpEmail.value,
      password: signUpPassword.value,
    };

    if (localStorage.getItem('dbUsers') === null) {
      localStorage.setItem('dbUsers', JSON.stringify(dbUsersArray));
    }
    oldUsersDB = JSON.parse(localStorage.getItem('dbUsers'));
    console.log(oldUsersDB);
    oldUsersDB.push(userObject);

    localStorage.setItem('dbUsers', JSON.stringify(oldUsersDB));
    window.location.reload();
  });
};
