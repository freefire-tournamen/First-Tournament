// document.getElementById('registrationForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     document.getElementById('confirmation').textContent = '✅ Registration submitted! We will contact you soon.';
//     this.reset();
//   });
  
//   const soloFields = document.getElementById('soloFields');
//   const squadFields = document.getElementById('squadFields');
//   const entryOptions = document.querySelectorAll('input[name="entryType"]');
  
//   entryOptions.forEach(option => {
//     option.addEventListener('change', () => {
//       if (option.value === 'solo') {
//         soloFields.style.display = 'block';
//         squadFields.style.display = 'none';
//       } else {
//         soloFields.style.display = 'none';
//         squadFields.style.display = 'block';
//       }
//     });
//   });
  
  //updated

document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  document.getElementById('confirmation').textContent = '✅ Registration submitted! We will contact you soon.';
  
  this.reset();

  // Redirect after 2 seconds
  setTimeout(() => {
    window.location.href = 'thank-you.html';
  }, 2000); // 2000 ms = 2 seconds
});
