import React, { Component, Fragment } from "react";
import HeaderBar from "./header";
import ProfileHeader from "./profile/profileHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ProfileIntro from "./profile/profileIntro";
import CreatePost from "./profile/createPost";
import Posts from "./profile/posts";

class Profilepage extends Component {
  render() {
    return (
      <Fragment>
        <HeaderBar />

        <Container fixed>
          <ProfileHeader />
        </Container>

        <Container fixed>
          <Grid container>
            <Grid item md={4}>
              <ProfileIntro />
            </Grid>
            <Grid item md={8}>
              <CreatePost />
              <h6>Posts</h6>
              <Posts />
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default Profilepage;
