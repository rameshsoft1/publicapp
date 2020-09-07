import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import HeaderBar from "../header";
import ClippedDrawer from "../../components/sidebar/drawer";
import "./settings.css";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: theme.spacing(0),
    flexGrow: 0,
    maxWidth: `100%`,
    flexBasis: `100%`,
    paddingTop: 70,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const useStylesReddit = makeStyles((theme) => ({
  root: {
    overflow: "hidden",

    backgroundColor: "transparent",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
  focused: {},
}));

function RedditTextField(props) {
  const classes = useStylesReddit();

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

export default function Settings() {
  const classes = useStyles();
  return (
    <Fragment>
      <HeaderBar />
      <Grid
        spacing={2}
        className={classes.grid}
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={false} sm={false} md={2}>
          <ClippedDrawer />
        </Grid>
        <Grid container spacing={3} item xs={12} sm={12} md={10}>
          <Paper>
            <div className="ad-Section">
              <h1> Settings Page</h1>

              <Grid item xs={12} sm={12} md={10}>
                <RedditTextField
                  label="First Name"
                  className={classes.margin}
                  defaultValue="Username"
                  variant="filled"
                  id="reddit-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <RedditTextField
                  label="Last Name"
                  className={classes.margin}
                  defaultValue="Username"
                  variant="filled"
                  id="reddit-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <RedditTextField
                  label="Email"
                  className={classes.margin}
                  defaultValue="xyz@gmai.com"
                  variant="filled"
                  id="reddit-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <RedditTextField
                  label="Backup Email"
                  className={classes.margin}
                  defaultValue="hiho@hotmail.com"
                  variant="filled"
                  id="reddit-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <Button variant="contained" color="primary">
                  Save
                </Button>
                <Button variant="contained">Cancel</Button>
              </Grid>
              <Grid item xs={12} sm={12} md={2}></Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}
