import { Avatar, Portal } from '@material-ui/core';
import React, { useEffect, useState} from 'react';
import './SidebarChat.css';


function SidebarChat({ addNewChat }) {
    const [seed, setSeed]= useState('');
    
    useEffect(() => {
        setSeed(Math.floor(Math.random()* 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("please enter name for chat");

        if (roomName){
            //need tp add stuff

        }
    };
    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div classname="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last mesaage...</p>
            </div>
        </div>
    ): (
       <div onclick={ createChat } 
       className="sidebarChat">
           <h2>Add New Chat</h2>
       </div>
    )
}

export default SidebarChat
