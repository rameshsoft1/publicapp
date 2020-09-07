import React, { Component, Fragment } from 'react';
import './profile.css';
import Grid from '@material-ui/core/Grid';

import profilePic from './images/profile.png';
import wallpaperPic from './images/walpaper.png';

class ProfileHeader extends Component {
  render(){
  return (

    <Fragment>
        <h2>Profile Header</h2>
        
        <Grid container className="section-1" direction="row" justify="center" alignItems="center">
              <Grid item xs={12} className="coverstory">
                <img src={wallpaperPic} />
              </Grid>
        </Grid>

        <Grid container className="section-2"  alignItems="center">
              <Grid item md={3} className="profileWrap" >
                <div className="profilePic"><img src={profilePic}/></div>   
              </Grid>
              <Grid item md={3} className="profileWrap">
                 <div className="profileName">
                
                     <a href="#" className="white-text">Profile Name </a>
                
                </div> 
              </Grid>
              
              <Grid item md={3}>
               <div className="info-pane"> <a href="#">Update Info <span className="notifyNum">1</span></a></div>
              </Grid>
              <Grid item md={3}>
                     <div className="info-pane"> <a href="#">Active Log<span className="notifyNum">23</span></a></div>
              </Grid>
        </Grid>

        <Grid container className="section-3"  alignItems="center">
              <Grid item xs={3}>
                  
              </Grid>
              <Grid item xs={9}>
                    <ul>
                        <li>
                            <a href="#">Timeline</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Friends <span className="count-frineds">390</span></a>
                        </li>
                        <li>
                            <a href="#">Archive</a>
                        </li>
                        <li>
                            <a href="#">Photos</a>
                        </li>
                        <li>
                            <a href="#">More</a>
                        </li>
                    </ul>
              </Grid>
        </Grid>

    </Fragment>

  )};
}

export default ProfileHeader;