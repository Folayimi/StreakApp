import React, {useState,useEffect} from 'react'
import Splash from "../SplashPage/Splash";
import { useNavigate } from 'react-router-dom';

const LandingPage = () =>{
    const [splash, setSplash] = useState(true)
    const navigate = useNavigate();
    useEffect(()=>{
        if(splash == true){
            setTimeout(()=>{
                setSplash(false)
            },10000)
        }
        else{
            navigate("/login")
        }
    },[splash])
    return(
        <>
            {
                splash && (
                    <>
                        <div>
                            <Splash/>
                        </div>
                        
                    </>
                )
            }
        </>
    )
}
export default LandingPage;