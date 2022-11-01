import React from 'react';
import { useState,useRef,useEffect } from 'react';
import $ from 'jquery';

const Step1 = (props) =>{
    const fName = useRef();
    const lName = useRef();
    const Eml = useRef();

    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        setFirstStep,
        setSecondStep,
        setProceed,
        setUserIdentity
    } = props
    const [message,setMessage] = useState("");
    const [valid,setValid] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [emailUsed, setEmailUsed] = useState(false)
    const EMAIL_REGEX= /^(\w+)([\.\-]?\w+)*\@(\w+)([\.\-]?\w+)*(\.[a-z|A-Z]+)$/

    useEffect(()=>{
        fName.current.focus()
    },[])

    useEffect(()=>{        
        if(email && EMAIL_REGEX.test(email) && !emailUsed){
            setValid(true)
            setError(false)               
        }
        else if (email && EMAIL_REGEX.test(email) && emailUsed === true){
            setError(true)
            setMessage("Email already in use by another user!")
            setTimeout(()=>{
                setEmailUsed(false)
            },[5000])       

        }
        if(!EMAIL_REGEX.test(email) && firstName && lastName){               
            setError(true)     
            setMessage("Invalid Email!. Make sure the email you provided is valid.")        
            setValid(false)                                                            
        }      

        if(error === true && !firstName || !lastName){ 
            setMessage("Please fill in the First name and Last name")              
            return;                                         
        }        
    },[error,email])

    useEffect(()=>{        
        if(success){
            setProceed(false)
            setError(false)
            setValid(false)
            setSuccess(false)
            setFirstStep(false)
            setSecondStep(true)
        }        
    },[success])


    const handleChange = (e) =>{

        if(firstName && lastName){   
            setEmail(e.target.value)             
            return;
        }                      
        if((!firstName || !lastName) || (!firstName && !lastName)){                          
            setError(true)
            return;
        } 
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();             
        setProceed(true)
        $.ajax({
            url: 'http://127.0.0.1:5000/signup/check_email',
            type: "POST",
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              email:email.toLowerCase()
            }),
            xhrFields: {
              withCredentials: true
            },
            crossDomain: true,
            success: (result) => {
                if(result.success === false){
                    setError(true)
                    setEmailUsed(true)
                    setProceed(false)
                }
                else if(result.success === true){
                    setError(false)
                    setSuccess(result.success)
                    setProceed(true)
                }
            },
            error: (error) => {
                setProceed(false)
                alert('Unable to post your details. Please try your request again')
            }
        }) 
    }
    return(
        <>
            <form className="streakForm">
                    <input 
                        id="input"
                        placeholder="FirstName"
                        type="text"
                        required
                        value={firstName}
                        ref={fName}
                        onChange={(e)=>{
                            setFirstName(e.target.value)
                        }}
                    />
                    <input 
                        id="input"
                        placeholder="LastName"
                        type="text"
                        required
                        value={lastName}
                        ref={lName}
                        onChange={(e)=>{
                            setLastName(e.target.value)
                        }}
                    />
                    <input 
                        id="input"
                        placeholder="Email"
                        type="text"
                        required
                        value={email}
                        ref={Eml}
                        onChange={(e)=>{
                            handleChange(e)
                        }}
                    />
                    {
                        error && <p className={valid ? "inValid" : "inValid"}>
                            {message}
                        </p>
                    }
                    <button 
                        disabled={(valid && firstName && lastName) ? false : true}
                        className={valid ? "enable" : "disable"}
                        onClick={handleSubmit}
                    >
                        <h3>Continue</h3>
                    </button>
            </form>
        </>
    )
}

export default Step1;