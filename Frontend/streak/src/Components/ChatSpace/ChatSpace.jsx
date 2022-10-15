import React from 'react';
import {useState} from 'react';
import "./ChatSpace.css"
import {Search,Menu} from "heroicons-react"

const ChatSpace = () =>{
    const [placeHolder,setPlaceHolder] = useState("Search for chats");
    const [chats,setChats] = useState(0)
    const [groups,setGroups] = useState(0)
    return(
        <>
            <div className="container">
                <div className="head">
                    <div className="section1">
                        <div className="brandName">
                            StreakApp
                        </div>
                        <div className="SnM">
                            <div className="searchSection">
                                <input 
                                    type="text" 
                                    placeholder={placeHolder}
                                />
                                <div className="icon">
                                    <Search size="20px" color="black"/>
                                </div>                            
                            </div>
                            <div className="menu">
                                <Menu size="40px"/>
                            </div>
                        </div>
                    </div>
                    <div className="section2">
                        <div className="chats">
                            CHATS
                            <div className="numb">
                                {chats}
                            </div>
                        </div>
                        <div className="groups">
                            GROUPS
                            <div className="numb">
                                {groups}
                            </div>
                        </div>
                    </div>
                    <div className="barSection">
                        <div className="movableBar"/>
                    </div>
                </div>                
                <div className="bdy">
                    <div className="chatList">

                    </div>
                    <div className="chatMessage">
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
                </div>
            </div>
        </>
    )
}

export default ChatSpace;