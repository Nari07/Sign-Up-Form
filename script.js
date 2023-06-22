const submitBtn= document.getElementById("submitButton");
const firstName= document.getElementById("firstName");
const lastName= document.getElementById("lastName");
const email= document.getElementById("email");
const password= document.getElementById("password");
const confirmPass= document.getElementById("confirmPass");
const passCheck= document.getElementById("passCheck");
const lastNameLabel = document.getElementById("LNameLabel");




submitBtn.addEventListener("click", function(){
	document.getElementById("form").className="submitted";
});

/* submitBtn.addEventListener("click", (e) => {
  let messages = [];
  if (firstName.value == '' || firstName.value == 'null'){
    messages.push('First name is required');
  }
}) */

submitBtn.addEventListener('click', function passwordCheck(){
  if (password.value !== confirmPass.value){
      passCheck.textContent = 'Passwords do not match';
      passCheck.style.fontSize = '13px';
      passCheck.style.color = 'red';
      lastNameLabel.style.marginTop = '13px';
      
  } else if (password.value !== '' && password.value === confirmPass.value){
      passCheck.textContent = 'Passwords match';
      passCheck.style.fontSize = '13px';
      passCheck.style.color = 'green';
      lastNameLabel.style.marginTop = '13px';
  }
});

