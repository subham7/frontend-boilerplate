export const auth = () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0cyI6dHJ1ZSwidGF4ZXMiOnRydWUsImRpc2NvdW50cyI6dHJ1ZSwiaG9tZSI6ZmFsc2UsImVtcGxveWVlcyI6dHJ1ZSwiY3VzdG9tZXJzIjp0cnVlLCJtb2RpZmllcnMiOnRydWUsImxvY2F0aW9ucyI6dHJ1ZSwicGVybWlzc2lvbiI6dHJ1ZSwicHVyY2hhc2UiOnRydWUsImF0dHJpYnV0ZXMiOnRydWV9.xIam7OScv3fc99XkLXsXqqDHeAkGQYaB-eSS1t6-lDM"
        // token:
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0cyI6dHJ1ZSwidGF4ZXMiOnRydWUsImRpc2NvdW50cyI6ZmFsc2UsImhvbWUiOmZhbHNlLCJlbXBsb3llZXMiOmZhbHNlLCJjdXN0b21lcnMiOnRydWUsIm1vZGlmaWVycyI6dHJ1ZSwibG9jYXRpb25zIjp0cnVlLCJwZXJtaXNzaW9ucyI6dHJ1ZX0.IV6tURRw4p3JBi1nbhMcdRUIi4fxSwb7Ckv-hVmMACc"
      }
    })
  })
}
