export function passwordValidation(pass) {
  if (!pass) return 'Password must be provided'
  if (pass.length < 3) return 'Minimum required password length is 4 characters'
  return true
}

export function emailValidation(email) {
  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(
    String(email).toLocaleLowerCase()
  )
  if (!email) return 'Email must be provided'
  if (!isValid) return 'This field must be a valid email'
  return true
}

export function nameValidation(name) {
  if (!name) return 'Name must be provided'
  if (name.length < 3) return 'Minimum required name length is 4 characters'
  return true
}
