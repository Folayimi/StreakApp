import React, {useEffect} from 'react';
import { StreakLogo } from '../../StyledComponents/styledComp';
import streak from "../Image/streak_logo.png"
import {motion,useCycle} from "framer-motion";

const ShakeVariants = {
    animationOne:{
        rotate:[-7,7],
        transition:{
            yoyo:Infinity,
            duration:0.2
        }
    }
}
const Streak = () => {
    const [animation,ShakeAnimation] = useCycle("animationOne")
    useEffect(()=>{
        ShakeAnimation()
    },[])
    return(
        <>
            <StreakLogo>
                <motion.div 
                    className="mobile"
                    variants={ShakeVariants}
                    animate={animation}
                >
                    <div className="logo">
                        <img src={streak} alt="" />
                    </div>
                    <div className="streakBtn"/>
                </motion.div>
                <div className="base">
                    <div className="line1"/>
                    <div className="line2"/>
                    <div className="line3"/>
                    <div className="line4"/>
                </div>
            </StreakLogo>
        </>
    )
}
export default Streak;