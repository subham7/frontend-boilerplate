export const validateBusiness = (formData, image) => {
  return new Promise((resolve, reject) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (formData === undefined) {
      reject("Form is empty")
    } else if (formData.name === undefined) {
      reject("Business name is required!")
    } else if (formData.city === undefined) {
      reject("City is required!")
    } else if (formData.locality === undefined) {
      reject("Locality is required!")
    } else if (formData.address === undefined) {
      reject("Address is required!")
    } else if (formData.state === undefined) {
      reject("State is required!")
    } else if (formData.phone === undefined) {
      console.log("tostring")
      reject("Phone number is required!")
    }
    // else if (formData.phone.toString().length != 10) {
    //   reject("Invalid phone number!")
    // }
    else if (formData.email === undefined) {
      reject("Email is required!")
    } else if (!re.test(formData.email)) {
      reject("Email is invalid!")
    } else if (formData.is_owner === "") {
      reject("Owner field is required!")
    } else if (image === null) {
      reject("Add an image!")
    } else {
      resolve("validate")
    }
  })
}
