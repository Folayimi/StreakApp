import React, { useState,useEffect,useRef } from 'react';
import $ from "jquery";

const Step3 = (props) =>{
    const [error,setError]=useState(false)
    const [message,setMessage] = useState("")
    const [valid,setValid] = useState(false)
    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const [success,setSuccess] = useState(false)
    const pref = useRef()
    const {
        firstName,
        lastName,
        email,
        dateOfBirth,
        phoneNo,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        setProceed,
        setThirdStep,
        setFourthStep
    } = props

    useEffect(()=>{
        pref.current.focus()
        setError(false)
    },[])

    useEffect(()=>{
        if(success){
            setProceed(false)
            setSuccess(false)
            setThirdStep(false)
            setFourthStep(true)
        }
    },[success])

    useEffect(()=>{
        if(password.length >= 8 && password === confirmPassword){   
            setError(false)         
            setValid(true)
        }
        if(password.length >= 8 && password !== confirmPassword){
            setValid(false)
            setError(true)
            setMessage("Password does not match!")
        }
        if(password.length < 8){
            setValid(false)
            setError(true)
            setMessage("Password must be at least 8 characters long!")
        }
    },[password,confirmPassword])

    const handleSubmit = async (e) =>{
        e.preventDefault();             
        setProceed(true)
        $.ajax({
            url: 'http://127.0.0.1:5000/signup/submitdetails',
            type: "POST",
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
              firstName: firstName.toUpperCase(),
              lastName: lastName.toUpperCase(),
              email:email.toLowerCase(),
              dateOfBirth:dateOfBirth,
              phoneNo:phoneNo,
              password:password
            }),
            xhrFields: {
              withCredentials: true
            },
            crossDomain: true,
            success: (result) => {
                if(result.success === true){
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
                    <section>
                        <input 
                            id="inputP"
                            type={show1 ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                            placeholder="Password"
                            ref={pref}
                        />
                        {
                            show1 ? 
                            <h4
                                onClick={()=>{
                                    setShow1(false)
                                }}
                            >
                                Hide
                            </h4> : 
                            <h4
                                onClick={()=>{
                                    setShow1(true)
                                }}
                            >
                                Show
                            </h4>
                        }
                    </section>
                    <section>
                        <input 
                            id="inputP"
                            type={show2 ? "text" : "password"}
                            required
                            value={confirmPassword}
                            onChange={(e)=>{
                                setConfirmPassword(e.target.value)
                            }}
                            placeholder="ConfirmPassword"
                        />
                        {
                            show2 ? 
                            <h4
                                onClick={()=>{
                                    setShow2(false)
                                }}
                            >
                                Hide
                            </h4> :
                                <h4
                                onClick={()=>{
                                    setShow2(true)
                                }}
                            >
                                Show
                            </h4>
                        }
                    </section>
                    {
                        error && 
                        <p className={valid ? "inValid" : "inValid"}>
                            {message}
                        </p>
                    }
                    <button 
                        disabled={valid ? false : true}
                        className={valid ? "enable" : "disable"}
                        onClick={handleSubmit}
                    >
                        <h3>Submit</h3>
                    </button>
            </form>
        </>
    )
}

export default Step3