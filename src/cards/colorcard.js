import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import CakeRoundedIcon from "@material-ui/icons/CakeRounded";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Popover from "@material-ui/core/Popover";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import Divider from "@material-ui/core/Divider";
import MicNoneRoundedIcon from "@material-ui/icons/MicNoneRounded";
import Tooltip from "@material-ui/core/Tooltip";
import "./card.css";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    padding: theme.spacing(1),
  },
  sideBtn: {
    color: "#FFF",
  },
  listicon: {
    minWidth: "20px",
    paddingRight: "1.2rem",
  },
}));

function BirthdayCard(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box mb={3}>
      <Card className="birthdaycard">
        <CardHeader
          className={classes.cardStyle}
          avatar={<CakeRoundedIcon />}
          action={
            <IconButton
              className={classes.sideBtn}
              aria-label="settings"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          }
        />
        <Fragment>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>
              <ListItemIcon className={classes.listicon}>
                <AccessTimeRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <h5>Remind me</h5>
                <small>Remind me of this later today.</small>
              </ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon className={classes.listicon}>
                <ChatBubbleOutlineIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <h5>Message</h5>
                <small>Send an automatic greeting message.</small>
              </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon className={classes.listicon}>
                <DeleteOutlineRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <h5>Remove</h5>
                <small>Removes this widget from your feed.</small>
              </ListItemText>
            </MenuItem>
          </Popover>
        </Fragment>
        <CardContent className={classes.cardStyle}>
          <div className="card-body" style={{ padding: 0 }}>
            <div className="birthday-avatar">
              <img src={require("../images/john.jpg")} alt="img" />
              {/*<div className="birthday-indicator">30</div> */}
            </div>
            <div className="card-content">
              <span>Today is</span>
              <h3>{props.name}'s Birthday</h3>
              <p>Send him your best wishes by leaving something on his wall.</p>
            </div>
          </div>
        </CardContent>
        <CardActions className={classes.cardStyle}>
          <Tooltip title="Write a Message">
            <IconButton>
              <CreateRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Send a Voice Note">
            <IconButton>
              <MicNoneRoundedIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Box>
  );
}

function Anniversarycard(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box mb={3}>
      <Card className="anniversarycard">
        <CardHeader
          className={classes.cardStyle}
          avatar={<BusinessCenterIcon />}
          action={
            <IconButton
              className={classes.sideBtn}
              aria-label="settings"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          }
        />
        <Fragment>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>
              <ListItemIcon className={classes.listicon}>
                <AccessTimeRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <h5>Remind me</h5>
                <small>Remind me of this later today.</small>
              </ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon className={classes.listicon}>
                <ChatBubbleOutlineIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <h5>Message</h5>
                <small>Send an automatic greeting message.</small>
              </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon className={classes.listicon}>
                <DeleteOutlineRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <h5>Remove</h5>
                <small>Removes this widget from your feed.</small>
              </ListItemText>
            </MenuItem>
          </Popover>
        </Fragment>
        <CardContent className={classes.cardStyle}>
          <div className="card-body" style={{ padding: 0 }}>
            <div className="work-avatar">
              <img src={require("../images/captainmarvel.jpg")} alt="img" />
              {/*<div className="birthday-indicator">30</div> */}
            </div>
            <div className="card-content">
              <h4>{props.name} has a new job!</h4>
              <p>Send her message congratulating for getting this job.</p>
            </div>
          </div>
        </CardContent>
        <CardActions className={classes.cardStyle}>
          <Tooltip title="Write a Message">
            <IconButton>
              <CreateRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Send a Voice Note">
            <IconButton>
              <MicNoneRoundedIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Box>
  );
}

export default function ColorCard(props) {
  let Output;

  switch (props.type) {
    case "birthday":
      Output = <BirthdayCard {...props} />;
      break;
    case "anniversary":
      Output = <Anniversarycard {...props} />;
      break;
    default:
      Output = null; // to return nothing, use null
      break;
  }

  return Output;
}
