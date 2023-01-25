import React from "react";
import styles from "./style.css";
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
function Multiposting() {
  return (
    <Grid item xs={8} md={6}>
      <List
        className="list-group list-group-light  "
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        subheader={<ListSubheader>Annonces</ListSubheader>}
      >
        <ListItem className="list-group-item d-flex justify-content-between align-items-center">
          <ListItemAvatar className="d-flex align-items-center ">
            <MDAvatar className="avatar-list " bgColor="success">
              <PlayArrowOutlinedIcon className="play-icon" />
            </MDAvatar>{" "}
            <div className="ms-3">
              <p className="fw-bold mb-1">23</p>
              <p className="text-muted mb-0">En ligne</p>
            </div>
          </ListItemAvatar>
          <div className="d-flex align-items-center m-2 ">
            <MDButton variant="gradient" color="info" iconOnly>
              <ArrowForwardIosIcon />
            </MDButton>
          </div>
        </ListItem>{" "}
        <ListItem className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <MDAvatar className="avatar-list " bgColor="info">
              <BorderColorIcon className="edit-icon" />
            </MDAvatar>
            <div className="ms-3">
              <p className="fw-bold mb-1">23</p>
              <p className="text-muted mb-0">Brouillon</p>
            </div>
          </div>{" "}
          <div className="d-flex align-items-center m-2 ">
            <MDButton variant="gradient" color="info" iconOnly>
              <ArrowForwardIosIcon />
            </MDButton>
          </div>
        </ListItem>{" "}
        <ListItem className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <MDAvatar className="avatar-list " bgColor="light">
              <PauseIcon className="pause-icon" />
            </MDAvatar>
            <div className="ms-3">
              <p className="fw-bold mb-1">23</p>
              <p className="text-muted mb-0">Désactivées</p>
            </div>
          </div>{" "}
          <div className="d-flex align-items-center m-2 ">
            <MDButton variant="gradient" color="info" iconOnly>
              <ArrowForwardIosIcon />
            </MDButton>
          </div>
        </ListItem>{" "}
        <ListItem className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <MDAvatar className="avatar-list " bgColor="primary">
              <RunningWithErrorsIcon className="erreur-icon" />
            </MDAvatar>
            <div className="ms-3">
              <p className="fw-bold mb-1">23</p>
              <p className="text-muted mb-0">Expirées</p>
            </div>
          </div>{" "}
          <div className="d-flex align-items-center m-2 ">
            <MDButton variant="gradient" color="info" iconOnly>
              <ArrowForwardIosIcon />
            </MDButton>
          </div>
        </ListItem>{" "}
        <ListItem className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <MDAvatar className="avatar-list " bgColor="light">
              <InventoryIcon className="archives-icon" />
            </MDAvatar>
            <div className="ms-3">
              <p className="fw-bold mb-1">23</p>
              <p className="text-muted mb-0">Archivées</p>
            </div>
          </div>{" "}
          <div className="d-flex align-items-center m-2 ">
            <MDButton variant="gradient" color="info" iconOnly>
              <ArrowForwardIosIcon />
            </MDButton>
          </div>
        </ListItem>
      </List>
    </Grid>
  );
}

export default Multiposting;
