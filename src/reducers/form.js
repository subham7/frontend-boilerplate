const initialState = {
  formData: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FORM_DATA":
      return { ...state, formData: action.payload }

    default:
      return state
  }
}
