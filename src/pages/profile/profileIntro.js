import React, { Component } from 'react';
import './profile.css';


import worldIcon from './images/worldIcon.png';


class ProfileIntro extends Component {
  render(){
  return (

        <div  className="section-4 box">
                        <div className="intro iconTxtInline"><img src={worldIcon} className="icons"/><h4>Intro</h4></div>
                        <div className="addBio">
                             <img src={worldIcon} className="icons"/>
                             <p>Add a short bio to tell people more about yourself.</p>
                             <a href="#">Add Bio</a>
                        </div>

                        <div className="shortIntro">
                            <ul>
                                <li className="iconTxtInline">
                                     <img src={worldIcon} className="icons"/><span>Studied </span>
                                </li>
                                <li  className="iconTxtInline">
                                     <img src={worldIcon} className="icons"/><span>Studied </span>
                                </li>
                                <li  className="iconTxtInline">
                                     <img src={worldIcon} className="icons"/><span>Went to </span>
                                </li>
                                <li  className="iconTxtInline">
                                     <img src={worldIcon} className="icons"/><span>Went to </span>
                                </li>
                                <li  className="iconTxtInline">
                                     <img src={worldIcon} className="icons"/><span>Lives in </span>
                                </li>
                                <li  className="iconTxtInline">
                                     <img src={worldIcon} className="icons"/><span>From  </span>
                                </li>
                                <li  className="iconTxtInline">
                                     <img src={worldIcon} className="icons"/><span>Married  </span>
                                </li>
                            </ul>
                        </div>


         
        </div>

        


  )};
}

export default ProfileIntro;