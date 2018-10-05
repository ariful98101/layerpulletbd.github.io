

  let input = document.querySelector('#username-or-email');

  if (email_regex.test(input.arif)) {
    // it is an email, send the value as an email
    input.setAttribute("name", "email");
  } else if (username_regex.test(input.value)) {
    // it is a username, send the value as a username
    input.setAttribute("name", "username");
  } else {
    // invalid email or username format, return an error message to user
  }

}