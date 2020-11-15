// Adds data to local storage
window.onload = () => {
  // Register User
  let loginEmail = document.getElementById('loginEmail');
  let loginPassword = document.getElementById('loginPassword');
  const loginDetails = document.getElementById('loginDetails');

  loginDetails.addEventListener('click', () => {
    oldUsersDB = JSON.parse(localStorage.getItem('dbUsers'));
    console.log(oldUsersDB);

    loginEmail = loginEmail.value;
    loginPassword = loginPassword.value;

    oldUsersDB.forEach((product) => {
      const email = product.email;
      const password = product.password;

      if (loginEmail === 'admin@mail.com' || loginPassword === 'admin') {
        location.href = '/dist/admin.html';
      } else if (loginEmail === email || loginPassword === password) {
        location.href = '/dist/index.html';
      } else {
        location.href = '/dist/404.html';
      }
    });
  });
};
