export const formData = data => {
  let dataDeepCopy = Object.assign({}, data)
  return new Promise(function(resolve, reject) {
    resolve(dataDeepCopy)
  })
}
