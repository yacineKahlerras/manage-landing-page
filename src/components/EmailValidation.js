function hasValue(input) {
  if (input.value.trim() === "") {
    return false;
  }
  return true;
}

export function validateEmail(input) {
  // check if the value is not empty
  if (!hasValue(input)) {
    console.log("trying to rob me of a value senior ? :(");
    return false;
  }
  // validate email format
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    console.log("no no...novalid senior :(");
    return false;
  }
  console.log("andaré andaré andarééééé :D");
  return true;
}
