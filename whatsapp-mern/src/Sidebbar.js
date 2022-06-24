import React from 'react';
import  './Sidebar.css';
import DonutlargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import { Avatar,IconButton } from '@material-ui/core';
import SidebarChart from './SidebarChart';
const Sidebbar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
         <Avatar src="https://avatars.githubusercontent.com/u/64107227?v=4" />
         <div className='sidebar__headerRight'>
            <IconButton>
              <DonutlargeIcon/> 
            </IconButton>
            <IconButton>
                <ChatIcon/>
            </IconButton>
            <IconButton>
                  <MoreVertIcon />
            </IconButton>
         </div>
      </div>

      <div className='sidebar__search'>
           <div className='sidebar__searchContainer'>

            <SearchOutlined/>
            <input type="text" placeholder='Seaarch or Start new Chat'/>

           </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChart/>
        <SidebarChart/>
        <SidebarChart/>
        <SidebarChart/>
      </div>
    </div>
  )
}

export default Sidebbar;