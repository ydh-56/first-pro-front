import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';

function Header() {
    return <header className="header">
        <div class="nothing"></div>
        <img className="header-logo" src="/logo.png"></img>
        <div class="right">
            <div class="toggle">갓생</div>
            <img></img>
        </div>

    </header>;
  }
  
  export default Header;