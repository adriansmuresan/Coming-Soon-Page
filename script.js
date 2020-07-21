const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailValue = form['email'].value;

  if(!emailValue) {
    // say it's empty
  } else if (!isValidEmail(email)) {
    //say invalid
  } else {
    //submit it
  }

});

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
