const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ERRORS':
      return {
        error: action.error
      };
    case 'RESET_ERRORS':
      return {};
    default:
      return state;
  }
};

export default errorsReducer;
