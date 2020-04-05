export const validateBusiness = formData => {
  return new Promise((resolve, reject) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (formData === undefined) {
      reject("Form is empty")
    } else if (formData.name === undefined) {
      reject("Business name is required!")
    } else if (formData.state === undefined) {
      reject("State is required!")
    } else if (formData.city === undefined) {
      reject("City is required!")
    }
    // else if (formData.locality === undefined) {
    //   reject("Locality is required!")
    // }
    // else if (formData.address === undefined) {
    //   reject("Address is required!")
    // }
    else if (formData.phone === undefined) {
      reject("Phone number is required!")
    } else if (formData.email === undefined) {
      reject("Email is required!")
    } else if (!re.test(formData.email)) {
      reject("Email is invalid!")
    } else if (formData.is_owner === "") {
      reject("Owner field is required!")
    } else {
      if (formData.description != undefined) {
        if (formData.description.length > 200) {
          reject("Description has to be below 200 characters.")
        }
      } else if (formData.address != undefined) {
        if (formData.address.length > 150) {
          reject("Address has to be below 150 characters.")
        }
      } else if (formData.phone != undefined) {
        if (formData.phone.toString().length != 10) {
          reject("Invalid phone number!")
        }
      } else if (formData.discount != undefined) {
        switch (formData.discount) {
          case "15":
            reject("validate")
          case "20":
            resolve("validate")
          case "25":
            resolve("validate")
          case "30":
            resolve("validate")
          case "40":
            resolve("validate")
          case "50":
            resolve("validate")
          default:
            reject("Invalid discount amount.")
        }
      }
      resolve("validate")
    }
  })
}
