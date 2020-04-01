export const validatePayment = formData => {
  return new Promise((resolve, reject) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (formData === undefined) {
      reject("Form is empty")
    } else if (formData.name === undefined) {
      reject("Full name is required!")
    } else if (formData.phone === undefined) {
      reject("Phone number is required!")
    } else if (formData.phone.length != 10) {
      reject("Invalid phone number!")
    } else if (formData.email === undefined) {
      reject("Email is required!")
    } else if (!re.test(formData.email)) {
      reject("Email is invalid!")
    } else if (formData.cart.length === 0) {
      reject("Please select a gift card!")
    } else {
      resolve("validate")
    }
  })
}
