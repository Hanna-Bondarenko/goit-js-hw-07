const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit => {
  handleSubmit.preventDefault();
});
const { email, password } = handleSubmit.currentTarget.elements;
const emailValue = email.value.trim();
const passwordValue = password.value.trim();

if (!emailValue || !passwordValue) {
  alert('All form fields must be filled in');
  return;
}
const formData = {
  email: emailValue,
  password: passwordValue,
};
console.log(formData);
handleSubmit.currentTarget.reset();
