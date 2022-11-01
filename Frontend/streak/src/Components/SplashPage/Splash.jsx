import React from "react"
import {SplashCont} from "../StyledComponents/styledComp";
import {motion} from "framer-motion";
import Streak from "../Resources/StreakStraight/Streak"

const SplashVariants = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            duration:3,
        }
    },
    exit:{
        ease:'easeOut'
    }
}
const MottoVariants={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            delay:5,
            duration:3
        }
    }
}
const StreakVariants = {
    hidden:{
        opacity:0,
        y:"20vh"
    },
    visible:{
        opacity:1,
        y:"0",
        transition:{
            type:"spring",
            duration:5,
            delay:3,
            mass:0.6,
            damping:3
        }
    }
}

const Splash = () =>{
    return(
        <>
            <SplashCont>
                <motion.div 
                    className="splash"
                    variants={SplashVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <Streak/>
                    <motion.div 
                        className="text"
                        variants={StreakVariants}
                    >
                        <h2>STREAK</h2>
                    </motion.div>
                    <motion.p
                        className="motto"
                        variants={MottoVariants}
                    >
                        Get that conversation going
                    </motion.p>
                </motion.div>
            </SplashCont>
        </>
    )
}
export default Splash