import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import TodayRoundedIcon from "@material-ui/icons/TodayRounded";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import PeopleOutlineRoundedIcon from "@material-ui/icons/PeopleOutlineRounded";
import EqualizerRoundedIcon from "@material-ui/icons/EqualizerRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import WorkOutlineRoundedIcon from "@material-ui/icons/WorkOutlineRounded";
import LiveHelpRoundedIcon from "@material-ui/icons/LiveHelpRounded";
import ArtTrackRoundedIcon from "@material-ui/icons/ArtTrackRounded";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import "./drawer.css";

const drawerWidth = "16%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 1,
    /*  [theme.breakpoints.up("xs")]: {
      display: 'none'
    },
    [theme.breakpoints.up("sm")]: {
      display: 'none'
     },
     [theme.breakpoints.up("md")]: {
      display: 'block'
     },*/
  },
  drawerContainer: {
    overflow: "hidden",
  },
  menuItem: {
    transition: "all 0.3s linear 0s",
    "&:hover": {
      background: "#761fc1",
      color: "#FFF",

      "& svg": {
        fill: "#FFF",
      },
    },
  },
  listItem: {
    padding: 0,
    border: "0px solid transparent",
    "& a": {
      padding: 0,
    },
  },
}));

const sidemenuList = {
  listItems: [
    {
      name: "News Feed",
      icon: <ArtTrackRoundedIcon />,
      routelink: "dashboard",
    },
    {
      name: "Messages",
      icon: <MailOutlineRoundedIcon />,
      routelink: "messages",
    },
    {
      name: "Events",
      icon: <TodayRoundedIcon />,
      routelink: "events",
    },
    {
      name: "Friends",
      icon: <PersonOutlineRoundedIcon />,
      routelink: "friendlist",
    },
    {
      name: "Groups",
      icon: <PeopleOutlineRoundedIcon />,
      routelink: "groups",
    },
    {
      name: "Stats",
      icon: <EqualizerRoundedIcon />,
      routelink: "statistics",
    },
    {
      name: "Settings",
      icon: <SettingsRoundedIcon />,
      routelink: "settings",
    },
    {
      name: "Privacy",
      icon: <WorkOutlineRoundedIcon />,
      routelink: "privacy",
    },
    {
      name: "Help",
      icon: <LiveHelpRoundedIcon />,
      routelink: "help",
    },
  ],
};

export default function ClippedDrawer() {
  const classes = useStyles();

  // If user cannot upload Profile Image, we use deafult image
  const selectedone = localStorage.getItem("gender");
  const username = localStorage.getItem("username");
  let imageStyle = null;
  /* const randomNumbers = Math.floor(Math.random() * 7) + 1;*/
  if (selectedone === "Female") {
    imageStyle = "female/female_1.png";
  } else {
    imageStyle = "male/male_1.png";
  }

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <div className="user-block">
            <div className="avatar-wrap">
              <img
                id="profileImg"
                src={require(`../../images/avatars/${imageStyle}`)}
                alt="DP"
              />
            </div>
            <h4>{username}</h4>
            <p>Chennai, INDIA</p>
            <div className="user-stats">
              <div className="stat-block">
                <span>Followers</span>
                <span>1K</span>
              </div>
              <div className="stat-block">
                <span>Following</span>
                <span>2.3K</span>
              </div>
            </div>
          </div>
          <div className="user-menu">
            <Scrollbars
              autoHide
              autoHeight
              autoHeightMax={350}
              autoHideTimeout={1000}
              autoHideDuration={200}
            >
              <List>
                {sidemenuList.listItems.map((list, index) => (
                  <li key={index} className={classes.listItem}>
                    <Link to={`/${list.routelink}`}>
                      <ListItem className={classes.menuItem} button key={index}>
                        <ListItemIcon>{list.icon}</ListItemIcon>
                        <ListItemText primary={list.name} />
                      </ListItem>
                    </Link>
                  </li>
                ))}
              </List>
            </Scrollbars>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
