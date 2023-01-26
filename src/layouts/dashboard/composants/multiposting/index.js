import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import MDBox from "components/MDBox";
import ListItemButton from "@mui/material/ListItemButton";
import MDButton from "components/MDButton";
import "./style.css";
import { ListSubheader } from "@mui/material";
function Multiposting(props) {
  console.log(props.value.multipostingData)
  const multipostings=props.value.multipostingData
  return (
    <>
      <List
        sx={{ width: "80%", bgcolor: "background.paper" }}
        className="list-group list-group-light  "
        subheader={<ListSubheader>Multiposting</ListSubheader>}
      >
          {multipostings.map((multiposting) => {
        return (
          <>
        <ListItem className="list-group-item d-flex justify-content-between align-items-center p-3">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src={multiposting.image}
            />
          </ListItemAvatar>{" "}
          <ListItemText
            primary={multiposting.title}
            secondary={
              <React.Fragment>
                <Typography sx={{ display: "inline" }} component="span" variant="body2">
                 {multiposting.subtitle}
                </Typography>
              </React.Fragment>
            }
          />
          <ListItemText
            primary={multiposting.description}
            className="sub-title"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                ></Typography>
              </React.Fragment>
            }
          />
        </ListItem>{" "}
      
        </>
          );
        })}
        <div style={{ width: "70%", marginLeft: "50%", marginBottom: "10%", marginTop: "10%" }}>
          <MDButton variant="gradient" color="info" width="70%">
            voir les annonces
          </MDButton>
        </div>
      </List>
    </>
  );
}
export default Multiposting;
