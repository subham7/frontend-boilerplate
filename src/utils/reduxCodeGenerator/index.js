//  Reference url https://medium.com/skyshidigital/simplify-redux-request-success-failure-pattern-ce77340eae06
function reduxHelper(actionName, fn) {
    if (typeof actionName !== "string") {
      throw new Error("actionName must be a string")
    }
    if (typeof fn !== "function") {
      throw new Error("fn must be a function")
    }
    const actionNameUpper = actionName.toUpperCase()
    const actionRequest = actionNameUpper + "_REQUEST"
    const actionSuccess = actionNameUpper + "_SUCCESS"
    const actionFailure = actionNameUpper + "_FAILURE"
  
    const initialState = {
      response: null,
      loading: false,
      isLoaded: false,
      error: null
    }
  
    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case actionRequest:
          return {
            ...state,
            loading: true
          }
  
        case actionSuccess:
          return {
            ...state,
            loading: false,
            isLoaded: true,
            response: action.data !== undefined ? action.data : null
          }
  
        case actionFailure:
          return {
            ...state,
            loading: false,
            error: action.error
          }
  
        default:
          return state
      }
    }
  
    // we are not using arrow function, because there no arguments binding
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    const action = function() {
      console.log("working on action")
      const args = arguments
      // console.log(typeof args, args);
      return dispatch => {
        dispatch({
          type: actionRequest
        })
        try {
          const result = fn.apply(null, args)
          // It's a promise
          if (typeof result.then === "function") {
            return result
              .then(data => {
                dispatch({
                  type: actionSuccess,
                  data
                })
                return Promise.resolve(data.data)
              })
              .catch(error => {
                dispatch({
                  type: actionFailure,
                  error
                })
                return Promise.reject(error)
              })
          } else {
            dispatch({
              type: actionSuccess,
              data: result
            })
            return Promise.resolve()
          }
        } catch (error) {
          dispatch({
            type: actionFailure,
            error
          })
          return Promise.reject(error)
        }
      }
    }
  
    return {
      action,
      actionTypes: {
        request: actionRequest,
        success: actionSuccess,
        failure: actionFailure
      },
      reducer
    }
  }
  
  export default reduxHelper