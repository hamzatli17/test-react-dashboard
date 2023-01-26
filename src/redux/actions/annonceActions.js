const { ANNONCE_LIST_SUCCESS } = require("../constants/annonceConstant");

const setAnnonceData = (data) => {
 
  return {
    type: "ANNONCE_LIST_SUCCESS",
    data,
  };
};
export { setAnnonceData };
