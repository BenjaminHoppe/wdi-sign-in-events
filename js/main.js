document.addEventListener('DOMContentLoaded',function() {

const modal = document.querySelector('.modal')
const signIn = document.querySelector('.signin')
const close = document.querySelector('.close')
const submit = document.querySelector('.submit')
const user = document.querySelector('#user');
const password = document.querySelector('#pass')

  //  1:
  signIn.addEventListener('click', function() {
    modal.style.display = "inline-block";
  });

  // 2:
  close.addEventListener('click', function () {
    modal.style.display='none';
  });

  // 3:
  submit.addEventListener('click', function() {
    document.getElementById('user').classList.add('error');
    document.getElementById('user').classList.add('error');
  });

  // 4:
  user.addEventListener('click', function(event) {
    if (user.classList.contains('error') === true) {
      user.classList.remove('error');
    }});

  password.addEventListener('click', function(event) {
      if (password.classList.contains('error') === true) {
        password.classList.remove('error');
  }});
});
