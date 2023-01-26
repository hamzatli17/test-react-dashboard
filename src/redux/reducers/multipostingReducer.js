const { MULTIPOSTING_LIST_SUCCESS } = require("../constants/multipostingConstant");
  
  const multipostingReducer = (state = {multipostingData:[]}, action) => {
    switch (action.type) {
      case 'MULTIPOSTING_LIST_SUCCESS':
        return {
            multipostingData: action.data
        };
      default:
        return state;
    }
  };
  export { multipostingReducer };