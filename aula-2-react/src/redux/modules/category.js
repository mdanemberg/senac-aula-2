const initialState = {
  data: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CATEGORIES':
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export const saveCategories = (data) => {
  return {
    type: 'LOAD_CATEGORIES',
    payload: data
  }
}
