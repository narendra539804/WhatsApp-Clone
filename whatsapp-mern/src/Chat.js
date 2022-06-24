import React from 'react';
import "./Chat.css";
import { Avatar,IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AttachFile, SearchOutlined } from '@material-ui/icons';

const Chat = () => {
  return (
    <div className='chat'>
         <div className="chat__header">
            <Avatar/>
            <div className='chat__headerInfo'>
              <h3>Room name</h3>
              <p>Last Seen at...</p>
            </div>
            <div className='chat__headerRight'>
                <IconButton>
                        <SearchOutlined/>
                </IconButton>
                <IconButton>
                        <AttachFile/>
                </IconButton>
                <IconButton>
                        <MoreVertIcon />
                </IconButton>
            </div>
         </div>
        <div className='chat__body'>
          <p className='chat__message'>
            <span className='chat__name'>
             Naren
            </span>
            This is a message
            <span className='chat__timestamp'>
              {new Date().toUTCString()}
              </span></p>
          <p className='chat__message chat__reciever'>
            <span className='chat__name'>
             Naren
            </span>
            This is a message
            <span className='chat__timestamp'>
              {new Date().toUTCString()}
              </span></p>
        </div>
    </div>
  )
}

export default Chat;