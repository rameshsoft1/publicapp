import React, { Fragment, lazy, Suspense } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HeaderBar from "../header";
import ClippedDrawer from "../../components/sidebar/drawer";
import ColorCard from "../../cards/colorcard";
//import FeedCard from "../../cards/feedcard";
import ListCard from "../../cards/listcard";
import "./dashboard.css";

const FeedCard = lazy(() => import("../../cards/feedcard"));

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: theme.spacing(0),
    flexGrow: 0,
    maxWidth: `100%`,
    flexBasis: `100%`,
    paddingTop: 70,
  },
}));

function Dashboard() {
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

        <Grid container spacing={3} item xs={12} sm={12} md={8}>
          <Grid item xs={12} sm={8} md={8}>
            <Suspense
              fallback={<div style={{ textAlign: "center" }}>Loading...</div>}
            >
              <FeedCard />
            </Suspense>
          </Grid>
          <Grid item xs={false} sm={4} md={4}>
            <ListCard type="addfriendlist" title="Friends Suggestions" />
            <ListCard type="activity" title="Recent Activites" />
            <ListCard type="followers" title="Followers" />
          </Grid>
        </Grid>

        <Grid item xs={false} sm={false} md={2}>
          <div className="ad-Section">
            <ColorCard type="birthday" name="John Wick" />
            <ColorCard type="anniversary" name="Captain" />
            <ListCard type="adcard" />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Dashboard;
