import React, {useState} from "react";
import { Signin } from '../StyledComponents/styledComp';
import Streak from '../Resources/Image/streak_logo.png';
import Login from "./Login";
import Signup from "./Signup";
import Themes from "../ThemeColors/Theme";

const UserSignin = () =>{
    const [login,setLogin] = useState(true);
    const [signUp,setSignUp] = useState(false);
    const [suborder,setSuBorder] = useState("0px")
    const [siborder,setSiBorder] = useState(`2px solid ${Themes.golden}`)
    
    return(
        <>
            <Signin>
                <div className="head">
                    <div className="brand">
                        <img src={Streak} alt="logo" />
                    </div>
                </div>
                <div className="pageStatus">
                    <div 
                        className="stat1"
                        style={{border:`${suborder}`}}
                        onClick={()=>{
                            setSignUp(true);
                            setLogin(false);
                            setSuBorder(`2px solid ${Themes.golden}`);
                            setSiBorder("0px");
                        }}
                    >
                        <h3>Sign Up</h3>
                    </div>
                    <div 
                        className="stat2"
                        style={{border:`${siborder}`}}
                        onClick={()=>{
                            setLogin(true);
                            setSignUp(false);
                            setSiBorder(`2px solid ${Themes.golden}`);
                            setSuBorder("0px")
                        }}
                    >
                        <h3>Log In</h3>
                    </div>
                </div>
                <div className="streakCont">
                    {
                        signUp===true && <Signup signUp={signUp} setSignUp={setSignUp}/>
                    }
                    {
                        login===true && <Login login={login} setLogin={setLogin}/>
                    }
                </div>
            </Signin>
        </>
    )
}

export default UserSignin;