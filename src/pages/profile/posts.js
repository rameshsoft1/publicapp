import React, { Component } from "react";
import "./profile.css";
import profilePic from "./images/profile.png";
import wallpaperPic from "./images/walpaper.png";
import post from "./images/post.jpg";

class Posts extends Component {
  render() {
    return (
      <div className="section-6 box">
        <div className="post-header">
          <div className="iconTxtInline">
            <img src={profilePic} className="profileIcon" alt="image" />{" "}
            <h3>User Name</h3>
          </div>
        </div>
        <div className="post-content">
          <img src={post} />
        </div>
        <div className="post-footer">
          <a href="#">like</a> |<a href="#">Comment</a> | <a href="#">Share</a>
        </div>
      </div>
    );
  }
}

export default Posts;
