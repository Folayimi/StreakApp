import React from "react";
import { useState } from "react";
import {motion} from "framer-motion";

const StreakVariants = {
    hidden:{
        opacity:0,
    },
    visible:{
        opacity:1,
        transition:{
            duration:2
        }
    }
}
const barVariants = {
    hidden:{
        x:"0%",
        opacity:1
    },
    visible:{
        x:"100%",
        opacity:.5,
        transition:{
            duration:.5,
            repeat:Infinity
        }
    }
}
const Login = () =>{
    const [submit,setSubmit]=useState(false);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return(
        <>
            <div className="streakBox">
                <div className="loader">
                    <motion.div 
                        className={submit ? "streakBar" : ""}
                        variants={submit ? barVariants : ""}
                        initial="hidden"
                        animate="visible"
                    />
                </div>
                <motion.div 
                    className="streakIn"
                    variants={StreakVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h3>Let's get you streaked in!</h3>
                </motion.div>
                <form className="streakForm">
                    <input 
                        id="input"
                        placeholder="Email"
                        type="text"
                        required
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />
                    <input 
                        id="input"
                        placeholder="Password"
                        type="password"
                        required
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                    />
                    <button>
                        <h3>LogIn</h3>
                    </button>
                </form>
            </div>
        </>
    )
}
export default Login;