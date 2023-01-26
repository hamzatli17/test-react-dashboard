const { CANDIDATS_LIST_SUCCESS } = require("../constants/candidatsConstants");

const setCondidatsData = (data) => {
 
  return {
    type: "CONDIDATS_LIST_SUCCESS",
    data,
  };
};
export { setCondidatsData };
