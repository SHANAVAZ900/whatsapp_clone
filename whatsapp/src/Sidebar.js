import React,{ useState ,useEffect } from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from "@material-ui/core"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//search icons
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
import db from './firebase';
import {useStateValue} from './StateProvider';




function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [ { user }, dispatch]=useStateValue();

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )

            ))
        ));

        return () => {
            unsubscribe();
        }
    },[]);
    const createChat = () => {
        const roomName = prompt("Please Enter Name for Chat");

        if(roomName){
            db.collection("rooms").add({
                //should be same column name as firebase database
                name: roomName
            })
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                {/*Adding the photourl from the details of the user sign-up*/}
                <Avatar src={user?.photoURL}/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <div onClick={createChat} className="sidebarChat">
                            <ChatIcon />
                        </div>  
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    


                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or Start a new chat" type="text" />
                </div>
               

            </div>
            <div className="sidebar__chats">
                {rooms.map(room =>(
                   <SidebarChat key = {room.id} id={room.id}
                   name={room.data.name}/>
                ))}

                

            </div>

    

            
        </div>
    )
}

export default Sidebar
