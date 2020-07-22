const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form['email'];
  const emailValue = email.value;
  const small = form.querySelector('small');

  if(!emailValue) {
    // say it's empty
    email.classList.add('error');
    small.innerText = 'Email field cannot be blank!';
    small.style.display = 'inline-block';
  } else if (!isValidEmail(emailValue)) {
    //say invalid
    email.classList.add('error');
    small.innerText = 'Email is not valid!';
    small.style.display = 'inline-block';
  } else {
    //submit it
    email.classList.remove('error');
    small.innerText = '';
    small.style.display = 'none';
  }

});

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
