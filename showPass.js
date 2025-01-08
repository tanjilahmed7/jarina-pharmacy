// function togglePasswordVisibility() {
//     const passwordInput = document.getElementById('passwordInput');
//     const eyeIcon = document.getElementById('eyeIcon');
  
//     if (passwordInput.type === 'password') {
//       passwordInput.type = 'text'; 
//       eyeIcon.src = './assets/passeye.svg'; 
//     } else {
//       passwordInput.type = 'password'; 
//       eyeIcon.src = './assets/passeye.svg'; 
//     }
//   }
  
//   function togglePasswordVisibility2() {
//     const passwordInput = document.getElementById('passwordInput2');
//     const eyeIcon = document.getElementById('eyeIconConfirm');
  
//     if (passwordInput.type === 'password') {
//       passwordInput.type = 'text'; 
//       eyeIcon.src = './assets/passeye.svg'; 
//     } else {
//       passwordInput.type = 'password'; 
//       eyeIcon.src = './assets/passeye.svg'; 
//     }
//   }



  function togglePasswordVisibility(eyeIcon) {
    const passwordInput = eyeIcon.previousElementSibling; 
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.src = './assets/passeye.svg'; 
    } else {
      passwordInput.type = 'password';
      eyeIcon.src = './assets/passeye.svg'; 
    }
  }
  