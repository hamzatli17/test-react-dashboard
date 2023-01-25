import React from "react";
import TimelineList from "examples/Timeline/TimelineList";
import TimelineItem from "examples/Timeline/TimelineItem";
import MDButton from "components/MDButton";
export default function Notification() {
  return (
    <TimelineList title="Notifications">
      <TimelineItem
        color="info"
        icon="notifications"
        title="Heures à saisir pour 3 candidats"
        dateTime="28/03"
        description="Test Fribourg"
        badges={["design"]}
      />
      <TimelineItem
        color="warning"
        icon="notifications"
        title="Propositions de poste à 12 candidats"
        dateTime="28/03"
        description="Test Genève"
        badges={["order", "#1832412"]}
      />
      <TimelineItem
        color="info"
        icon="notifications"
        title="Documents à signer pour M.Philippot"
        dateTime=" 28/03"
        description="Test Genève"
        badges={["server", "payments"]}
      />

      <TimelineItem
        color="error"
        icon="notifications"
        title="Nouveau message de Emilie Philippot"
        dateTime="28/03"
        description="Bonjour Ahmed,  Je voulais savoir si vous aviez reçu mes relevés d’heures..."
        badges={["design"]}
       
      />
        <div style={{ width: "70%", marginLeft: "50%" }}>
          <MDButton variant="gradient" color="info" width="70%">
            voir les notifications
          </MDButton>
        </div>
    </TimelineList>
  );
}
