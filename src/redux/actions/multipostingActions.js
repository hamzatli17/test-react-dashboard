const { MULTIPOSTING_LIST_SUCCESS } = require("../constants/multipostingConstant");

const setMultipostingData = (data) => {
 
  return {
    type: "MULTIPOSTING_LIST_SUCCESS",
    data,
  };
};
export { setMultipostingData };
