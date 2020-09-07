import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import axios from "axios";

const useStyles = (theme) => ({
  root: {
    margin: theme.spacing(0, 0, 4),
    padding: theme.spacing(0, 2),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderRadius: "8px",
  },
  avatar: {
    backgroundColor: red[500],
  },
  divider: {
    margin: theme.spacing(0, 1),
  },
  actionBar: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

class FeedCard extends Component {
  state = {
    feedData: [],
  };

  componentDidMount() {
    const keyword = "hill+station"; // for testing purpose - if you add space in your text add +
    axios
      .get(
        `https://pixabay.com/api/?key=16561380-c94cd735f5abeee36931dd276&q=${keyword}&image_type=photo`
      )
      .then((res) => {
        const feedData = res.data;
        this.setState({ feedData: feedData.hits });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        {this.state.feedData.map((feed) => (
          <Card key={feed.id} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                  src={feed.userImageURL}
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              titleTypographyProps={{ variant: "h6" }}
              title={feed.user}
              subheaderTypographyProps={{ variant: "caption" }}
              subheader="September 14, 2016"
            />
            <Divider className={classes.divider} />
            <CardContent>
              <Typography variant="body1" color="textSecondary" component="p">
                {feed.tags}
              </Typography>
            </CardContent>

            <CardMedia
              className={classes.media}
              image={feed.largeImageURL}
              title={feed.type}
            />
            <CardActions className={classes.actionBar}>
              <p>
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderRoundedIcon />
                </IconButton>
                <label>{feed.likes}</label>
              </p>
              <p>
                <IconButton aria-label="comment">
                  <ChatBubbleOutlineRoundedIcon />
                </IconButton>
                <label>{feed.comments}</label>
              </p>
            </CardActions>
          </Card>
        ))}
      </Fragment>
    );
  }
}

export default withStyles(useStyles)(FeedCard);
