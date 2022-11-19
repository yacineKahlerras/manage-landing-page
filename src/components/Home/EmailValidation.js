function hasValue(input) {
  if (input.value.trim() === "") {
    return false;
  }
  return true;
}

export function validateEmail(input) {
  // check if the value is not empty
  if (!hasValue(input)) {
    return "empty";
  }
  // validate email format
  const emailRegex =
    /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return "novalid";
  }
  return "valid";
}
