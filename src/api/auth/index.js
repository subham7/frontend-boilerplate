export const auth = () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0cyI6dHJ1ZSwidGF4ZXMiOnRydWUsImRpc2NvdW50cyI6dHJ1ZSwiaG9tZSI6dHJ1ZSwiZW1wbG95ZWVzIjp0cnVlLCJjdXN0b21lcnMiOnRydWUsIm1vZGlmaWVycyI6dHJ1ZSwibG9jYXRpb25zIjp0cnVlLCJwZXJtaXNzaW9uIjp0cnVlLCJwdXJjaGFzZSI6dHJ1ZX0.HSvDZVxB5VFJ6vFl4QzM3-GL86d-ulSTTdtHbycDLCk"
        // token:
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0cyI6dHJ1ZSwidGF4ZXMiOnRydWUsImRpc2NvdW50cyI6ZmFsc2UsImhvbWUiOmZhbHNlLCJlbXBsb3llZXMiOmZhbHNlLCJjdXN0b21lcnMiOnRydWUsIm1vZGlmaWVycyI6dHJ1ZSwibG9jYXRpb25zIjp0cnVlLCJwZXJtaXNzaW9ucyI6dHJ1ZX0.IV6tURRw4p3JBi1nbhMcdRUIi4fxSwb7Ckv-hVmMACc"
      }
    })
  })
}
