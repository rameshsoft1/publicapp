import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Popover from "@material-ui/core/Popover";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import Divider from "@material-ui/core/Divider";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import ListRoundedIcon from "@material-ui/icons/ListRounded";
import "./card.css";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  cardStyle: {
    padding: theme.spacing(1),
    "& span": {
      color: "#757a91",
    },
  },
  listicon: {
    minWidth: "20px",
    paddingRight: "1.2rem",
  },
}));

const friendlists = {
  friends: [
    {
      name: "Captain America",
      place: "Melbourne",
      thumbnail: "captainamerica.jpg",
    },
    {
      name: "Spidy",
      place: "New York",
      thumbnail: "spiderman2.jpg",
    },
    {
      name: "Captain Marvel",
      place: "Engayavathu Irupanga",
      thumbnail: "captainmarvel.jpg",
    },
    {
      name: "Thor",
      place: "Asgard",
      thumbnail: "thor.jpg",
    },
    {
      name: "Iron Man",
      place: "New York",
      thumbnail: "ironman.jpg",
    },
    {
      name: "Hulk",
      place: "India",
      thumbnail: "hulk.jpg",
    },
    {
      name: "Black Widow",
      place: "New York",
      thumbnail: "blackwidow.jpg",
    },
  ],
};

const activityList = {
  activity: [
    {
      name: "Vinoth",
      info: "got a new job",
      time: "5 mins ago",
      thumbnail: "male/male_10.png",
    },
    {
      name: "Ramesh",
      info: "updated his status",
      time: "1 hour ago",
      thumbnail: "male/male_8.png",
    },
    {
      name: "Anitha",
      info: "joins ZONE team",
      time: "15 hours ago",
      thumbnail: "female/female_1.png",
    },
  ],
};

const followerList = {
  follower: [
    {
      name: "Anitha",
      thumbnail: "female/female_1.png",
    },
    {
      name: "Vinoth",
      thumbnail: "male/male_10.png",
    },
    {
      name: "Ramesh",
      thumbnail: "male/male_8.png",
    },
    {
      name: "Gokul",
      thumbnail: "male/male_9.png",
    },
    {
      name: "Nayan",
      thumbnail: "female/female_2.png",
    },
  ],
};

function AddfriendList(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [snackbaropen, setSnackbaropen] = React.useState(false);
  const [message, setMessage] = React.useState(null);
  const [listcount, setlistCount] = React.useState(3);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleaddfriendClick = (e) => {
    setSnackbaropen(true);
    const requestsentDiv = e.target.closest(".add-friend-listWrapper");
    const getfriendlistname = requestsentDiv.querySelector(
      ".add-friend-name-list span"
    ).innerHTML;
    setMessage(getfriendlistname);
    setTimeout(() => {
      requestsentDiv.classList.add("hideList");
      setlistCount(listcount + 1);
    }, 2300);
  };

  const handlesnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbaropen(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box mb={3}>
      <Card>
        <CardHeader
          className={classes.cardStyle}
          titleTypographyProps={{ variant: "span" }}
          title={props.title}
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
        <Divider />
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
                <GroupRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <h5>All Suggestions</h5>
                <small>View all friend suggestions.</small>
              </ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon className={classes.listicon}>
                <SettingsRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <h5>Settings</h5>
                <small>Access widget settings.</small>
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
        <CardContent>
          {friendlists.friends.slice(0, `${listcount}`).map((list, index) => (
            <div key={index} className="add-friend-listWrapper">
              <Avatar
                alt={list.name}
                src={require(`../images/${list.thumbnail}`)}
              />
              <div className="add-friend-name-list">
                <span>{list.name}</span>
                <span>{list.place}</span>
              </div>
              <div className="add-friend-btn">
                <IconButton onClick={handleaddfriendClick}>
                  <PersonAddRoundedIcon style={{ color: "#000" }} />
                </IconButton>
                <Snackbar
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  open={snackbaropen}
                  autoHideDuration={2000}
                  onClose={handlesnackbarClose}
                  message={`Friend Request has been sent to ${message}`}
                  action={
                    <Fragment>
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={handlesnackbarClose}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Fragment>
                  }
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}

function Activity(props) {
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
      <Card>
        <CardHeader
          className={classes.cardStyle}
          titleTypographyProps={{ variant: "span" }}
          title={props.title}
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
        <Divider />
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
                <ListRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <h5>All updates</h5>
                <small>View my network's activity.</small>
              </ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon className={classes.listicon}>
                <SettingsRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <h5>Settings</h5>
                <small>Access widget settings.</small>
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
        <CardContent>
          {activityList.activity.map((list, index) => (
            <div key={index} className="add-friend-listWrapper">
              <Avatar
                alt={list.name}
                src={require(`../images/avatars/${list.thumbnail}`)}
              />
              <div className="activitylist">
                <p>
                  <label>{list.name}</label> {list.info}.
                </p>
                <span>{list.time}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}

function Followerscard(props) {
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
      <Card>
        <CardHeader
          className={classes.cardStyle}
          titleTypographyProps={{ variant: "span" }}
          title={props.title}
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
        <Divider />
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
                <ListRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <h5>All updates</h5>
                <small>View my network's activity.</small>
              </ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon className={classes.listicon}>
                <SettingsRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <h5>Settings</h5>
                <small>Access widget settings.</small>
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
        <CardContent>
          <div className="followersWrap">
            {followerList.follower.map((list, index) => (
              <Tooltip key={index} title={list.name} arrow>
                <button key={index} className="follower">
                  <img
                    src={require(`../images/avatars/${list.thumbnail}`)}
                    alt="img"
                  />
                </button>
              </Tooltip>
            ))}
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

function Adcard(props) {
  //  const classes = useStyles();

  return (
    <Box mb={3}>
      <Card>
        <img src={require("../images/ad-widget.gif")} alt="ad" />
      </Card>
    </Box>
  );
}

export default function ListCard(props) {
  let Output;

  switch (props.type) {
    case "addfriendlist":
      Output = <AddfriendList {...props} />;
      break;
    case "activity":
      Output = <Activity {...props} />;
      break;
    case "followers":
      Output = <Followerscard {...props} />;
      break;
    case "adcard":
      Output = <Adcard {...props} />;
      break;
    default:
      Output = null; // to return nothing, use null
      break;
  }

  return Output;
}
