import React from 'react';
import {useState} from 'react';
import "./ChatSpace.css"
import {Search,Menu,ChatAlt,ell} from "heroicons-react"
import {HiChatAlt, HiDotsVertical, HiOutlineSearch} from "react-icons/hi"
import streak from "../Resources/Image/streak_logo.png"
const ChatSpace = () =>{
    const [placeHolder,setPlaceHolder] = useState("Search or start new chat");
    const [chats,setChats] = useState(0)
    const [groups,setGroups] = useState(0)
    const [startChat, setStartChat] = useState(true);
    return(
        <>
            <div className="container">
                <div className="bdy">
                    <div className="chatList">
                        <div className="chatHead">
                            <div className="profileImg">
                                <img src={streak} alt="img"/>
                            </div>
                            <div className="other">
                                <div className="stats"/>
                                <div style={{cursor:"pointer"}}>
                                    <HiChatAlt size="30px"/>
                                </div>
                                <div style={{cursor:"pointer"}}>
                                    <HiDotsVertical size="25px"/>
                                </div>                                                                
                            </div>
                        </div>
                        <div className="searchSection">
                            <div className="chatSearch">
                                <div className="icon">
                                    <HiOutlineSearch size="25px" color="black"/>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder={placeHolder}
                                />
                            </div>
                            <div className="earth">
                                stuff
                            </div>
                        </div>
                    </div>
                    {
                        startChat ? 
                        <div className="chatMessage">
                            <div className="messageHead">
                                <div className="profileHead">
                                    <div className="profile">
                                        <img src="" alt="img"/>
                                    </div>
                                    <div className="info">
                                        <h3>User's Name</h3>
                                        <p>last seen today at 12:49</p>
                                    </div>
                                </div>
                                <div className="messageInfo">
                                    <div style={{cursor:"pointer"}}>
                                        <HiOutlineSearch size="25px"/>
                                    </div>
                                    <div style={{cursor:"pointer"}}>
                                        <HiDotsVertical size="25px"/>
                                    </div>                                    
                                </div>
                            </div>
                            <form className="messageCont">
                                <div className="postMessage">
                                    <div className="emoji">
                                        emoji
                                    </div>
                                    <textarea 
                                        type="text" 
                                        placeholder='Type your messages here'
                                    />                                                                  
                                </div>    
                                <button 
                                    type="submit"                                 
                                    className="send"
                                >
                                        send
                                </button>  
                            </form>                  
                        </div>
                        :
                        <div className="chatMessage">
                                             
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ChatSpace;