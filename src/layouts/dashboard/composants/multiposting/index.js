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
function Multiposting() {
  return (
    <>
      <List
        sx={{ width: "80%", bgcolor: "background.paper" }}
        className="list-group list-group-light  "
        subheader={<ListSubheader>Multiposting</ListSubheader>}
      >
        <ListItem className="list-group-item d-flex justify-content-between align-items-center p-3">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/b6/87/24/b6872444-e262-6d44-5224-05d79cd6e41f/source/512x512bb.jpg"
            />
          </ListItemAvatar>{" "}
          <ListItemText
            primary="test.com"
            secondary={
              <React.Fragment>
                <Typography sx={{ display: "inline" }} component="span" variant="body2">
                  jobup free
                </Typography>
              </React.Fragment>
            }
          />
          <ListItemText
            primary="10 annonces"
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
        <ListItem className="list-group-item d-flex justify-content-between align-items-center p-3">
          <ListItemAvatar>
            <Avatar
              alt="Travis Howard"
              src="https://play-lh.googleusercontent.com/04KgpN4Mxclqmg5ojsQiksqlKIFvzvjZ_dJ9Pxq-mCc32ay66TL6Vf8wQrGJGqUkRNqe"
            />
          </ListItemAvatar>
          <ListItemText
            primary="jobup"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  jobup free
                </Typography>
              </React.Fragment>
            }
          />
          <ListItemText
            primary="6 annonces"
            className="sub-title"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.blue"
                ></Typography>
              </React.Fragment>
            }
          />
        </ListItem>{" "}
        <ListItem className="list-group-item d-flex justify-content-between align-items-center p-3">
          <ListItemAvatar>
            <Avatar src="https://uploads-ssl.webflow.com/61f830c0e555e517ed9c24fe/61f830c0e555e521dd9c2e96_AboutIndeed_logo.png" />
          </ListItemAvatar>
          <ListItemText
            primary="indeed"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  indeed free
                </Typography>
              </React.Fragment>
            }
          />
          <ListItemText
            className="sub-title"
            primary="4 annonces"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.blue"
                ></Typography>
              </React.Fragment>
            }
          />
        </ListItem>{" "}
        <ListItem className="list-group-item d-flex justify-content-between align-items-center p-3">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="https://media.glassdoor.com/sqll/3316040/talent-com-squarelogo-1586377194151.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="talent"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  talent free
                </Typography>
              </React.Fragment>
            }
          />{" "}
          <ListItemText
            className="sub-title"
            primary="2 annonces"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.blue"
                ></Typography>
              </React.Fragment>
            }
          />{" "}
        </ListItem>
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
