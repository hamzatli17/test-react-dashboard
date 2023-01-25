const {
  CANDIDATS_LIST_SUCCESS
  } = require("../constants/candidatsConstants");


const condidatReducer = (state = {condidatData:[]}, action) => {
  console.log('hi bb',action.type)
  switch (action.type) {
    case 'CONDIDATS_LIST_SUCCESS':
      return {
        condidatData: action.data
      };
    default:
      return state;
  }
};
export { condidatReducer };