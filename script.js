const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailValue = form['email'].value;

  if(!emailValue) {
    // say it's empty
  } else if (emailValue(email)) {
    //say invalid
  } else {
    //submit it
  }

});
