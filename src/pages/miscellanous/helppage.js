import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import HeaderBar from "../header";
import ClippedDrawer from "../../components/sidebar/drawer";

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: theme.spacing(0),
    flexGrow: 0,
    maxWidth: `100%`,
    flexBasis: `100%`,
    paddingTop: 70,
  },
}));

export default function HelpPage() {
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

        <Grid item xs={12} sm={12} md={10}>
          <div className="ad-Section">
            <h1> Help Page</h1>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
