export const auth = () => {
  return new Promise((resolve, reject) => {
    resolve(localStorage.getItem("admin-api-key"))
  })
}
