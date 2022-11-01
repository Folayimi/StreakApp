import React from 'react';
import { useState} from 'react';
import {motion} from "framer-motion";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

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

const Signup = () =>{
    const [proceed,setProceed] = useState(false);
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [dateOfBirth,setDateOfBirth] = useState("");
    const [phoneNo,setPhoneNo] = useState("");

    const[firstStep,setFirstStep] = useState(true);
    const[secondStep,setSecondStep] = useState(false);
    const[thirdStep,setThirdStep] = useState(false);
    const[fourthStep,setFourthStep] = useState(false);


    return(
        <>
            <div className="streakBox">
                <div className="loader">
                    <motion.div 
                        className={proceed ? "streakBar" : ""}
                        variants={proceed ? barVariants : ""}
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
                    <h3>Let's get you streaked up!</h3>
                </motion.div>
                {
                    firstStep == true && 
                    <Step1
                        firstName={firstName}
                        lastName={lastName}
                        setFirstName={setFirstName}
                        setLastName={setLastName}
                        email={email}
                        setProceed={setProceed}
                        setEmail={setEmail}
                        setFirstStep={setFirstStep}
                        setSecondStep={setSecondStep}
                    />
                }
                {
                    secondStep == true &&
                    <Step2                        
                        setProceed={setProceed}
                        setSecondStep={setSecondStep}
                        setThirdStep={setThirdStep}
                        dateOfBirth={dateOfBirth}
                        setDateOfBirth={setDateOfBirth}
                        phoneNo={phoneNo}
                        setPhoneNo={setPhoneNo}
                    />
                }
                {
                    thirdStep == true &&
                    <Step3
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        dateOfBirth={dateOfBirth}
                        phoneNo={phoneNo}
                        password={password}
                        setPassword={setPassword}
                        confirmPassword={confirmPassword}
                        setConfirmPassword={setConfirmPassword}
                        setProceed={setProceed}
                        setThirdStep = {setThirdStep}
                        setFourthStep = {setFourthStep}
                    />
                }
            </div>
        </>
    )
}
export default Signup;