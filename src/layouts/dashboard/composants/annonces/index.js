import React from "react";
import styles from "./List.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// Material Dashboard 2 React Components
import MDButton from "components/MDButton";
import MDAvatar from "components/MDAvatar";
import ListItemAvatar from "@mui/material/ListItemAvatar"; // @mui material components
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PauseIcon from "@mui/icons-material/Pause";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Grid, ListSubheader } from "@mui/material";
function Annonce(props) {
  const annoncesData =props.value.annonceData
  return (
    <Grid xs={8} md={8}>
      <List
        className="list-group list-group-light  "
        subheader={<ListSubheader>Annonces</ListSubheader>}
      >
        {annoncesData.map((annonce) => {
        return (
          <>
        {" "}
        <ListItem className="list-group-item d-flex justify-content-between align-items-center">
          <ListItemAvatar className="d-flex align-items-center ">
            <MDAvatar className="avatar-list " bgColor="success">
              <PlayArrowOutlinedIcon className="play-icon" />
            </MDAvatar>
            <div className="ms-3">
              <p className="fw-bold mb-1">{annonce.count}</p>
              <p className="text-muted mb-0">{annonce.status}</p>
            </div>
          </ListItemAvatar>
          <div className="d-flex align-items-center p-3 ">
            <MDButton variant="gradient" color="info" iconOnly>
              <ArrowForwardIosIcon />
            </MDButton>
          </div>
        </ListItem>{" "}
        </>
         );
        })}
      </List>
    </Grid>
  );
}
export default Annonce;
