import '../index.css'
import logo from '../sh-logo-dark.png'
import React, { useState } from 'react';

function Logo(props){

  if (props.content === ""){
    return(
      <div id="sideHustleLogo">
        <img src={logo} alt="SideHustle logo" height="92px" width="300px"/>
      </div>
    );
  } else {
    const style = {
      color: 'green', fontFamily: 'cursive', fontSize: '5em'
    }
    return(
      <h1 style={style}>{props.content}</h1>
    )
  }
}

export default Logo;
