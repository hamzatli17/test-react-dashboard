import React from "react";
import TimelineList from "examples/Timeline/TimelineList";
import TimelineItem from "examples/Timeline/TimelineItem";
import MDButton from "components/MDButton";
export default function Notification(props) {
  const notifications = props.value.notificationData;
  return (
    <TimelineList title="Notifications">
      {notifications.map((notification) => {
        return (
          <>
            <TimelineItem
              color={notification.color}
              icon={notification.icon}
              title={notification.title}
              dateTime={notification.dateTime}
              description={notification.description}
              badges={["design"]}
            />
          </>
        );
      })}

      <div style={{ width: "70%", marginLeft: "50%" }}>
        <MDButton variant="gradient" color="info" width="70%">
          voir les notifications
        </MDButton>
      </div>
    </TimelineList>
  );
}
