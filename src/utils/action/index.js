export const handleForm = data => dispatch => {
  dispatch({ type: "FORM_DATA", payload: data })
}
