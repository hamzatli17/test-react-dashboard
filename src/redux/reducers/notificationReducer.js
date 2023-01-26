const { NOTIFICATION_LIST_SUCCESS } = require("../constants/notificationConstants");

  
  
  const notificationReducer = (state = {notificationData:[]}, action) => {
    switch (action.type) {
      case 'NOTIFICATION_LIST_SUCCESS':
        return {
            notificationData: action.data
        };
      default:
        return state;
    }
  };
  export { notificationReducer };