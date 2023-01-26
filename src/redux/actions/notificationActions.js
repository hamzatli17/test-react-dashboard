const { NOTIFICATION_LIST_SUCCESS } = require("../constants/notificationConstants");

const setNotificationData = (data) => {
 
  return {
    type: "NOTIFICATION_LIST_SUCCESS",
    data,
  };
};
export { setNotificationData };
