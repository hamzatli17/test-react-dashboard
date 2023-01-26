const {
    ANNONCE_LIST_SUCCESS
    } = require("../constants/annonceConstant");
  
  
  const annonceReducer = (state = {annonceData:[]}, action) => {
    switch (action.type) {
      case 'ANNONCE_LIST_SUCCESS':
        return {
          annonceData: action.data
        };
      default:
        return state;
    }
  };
  export { annonceReducer };