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
function Multiposting() {
  return (
    <>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/b6/87/24/b6872444-e262-6d44-5224-05d79cd6e41f/source/512x512bb.jpg"
            />
          </ListItemAvatar>

          <ListItemText
            primary="test.com"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  test.com
                </Typography>
              </React.Fragment>
            }
          />
          <ListItemText
            textAlign="left"
            primary="10 annonces"
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
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
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
            textAlign="left"
            primary="6 annonces"
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
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
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
            textAlign="left"
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
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
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
            textAlign="left"
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
          />
        </ListItem>
        <div style={{ width: "70%", marginLeft: "50%" }}>
          <MDButton variant="gradient" color="info" width="70%">
            voir les annonces
          </MDButton>
        </div>
      </List>
    </>
  );
}

export default Multiposting;
