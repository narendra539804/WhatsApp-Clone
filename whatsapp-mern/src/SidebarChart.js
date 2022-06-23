import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';
const SidebarChart = () => {
  return (
    <div className='sidebarChat'>
      <Avatar/>
      <div className="sidebarChat__info">
        <h2>Narendra Naidu</h2>
        <p>Bye mowaa</p>
      </div>

    </div>
  )
}

export default SidebarChart;