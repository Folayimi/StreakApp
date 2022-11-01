import React,{useState,useEffect} from "react";

const Step2 = (props) =>{
    const PHONE_REGEX=/^([+]?[(]?[0-9]{1,3}?[)]?)?\(?([0-9]{3,4})\)?[\-\.\ ]?([0-9]{3,4})[\-\.\ ]?([0-9]{4})$/
    const [success,setSuccess]= useState(false)
    const [error,setError] = useState(false)
    const [message,setMessage] = useState("")
    const [valid,setValid] = useState(false)
    const {
        setProceed,
        setSecondStep,
        setThirdStep,
        dateOfBirth,
        setDateOfBirth,
        phoneNo,
        setPhoneNo,
    } = props

    useEffect(()=>{        
        if(success){
            setProceed(false)
            setSuccess(false)
            setSecondStep(false)
            setThirdStep(true)                        
        }        
    },[success])

    useEffect(()=>{
        if(PHONE_REGEX.test(phoneNo)){
            setError(false)
            setValid(true)
        }
        else if(!PHONE_REGEX.test(phoneNo)){
            setError(true)
            setMessage("Invalid Phone No!, Make sure you type in a valid phone number.")
        }
    },[phoneNo])
    
    useEffect(()=>{
        setError(false)
    },[])

    const handleChange = (e) =>{
        if(dateOfBirth){
            setPhoneNo(e.target.value)
        }
        else{
            setError(true)
            setMessage("!Select your date of birth")
        }
    }
    const handleSubmit = async (e) =>{        
        e.preventDefault();            
        setProceed(true);       
        setSuccess(true)
    }
    return(
        <>
            <form className="streakForm">
                    <input 
                        id="input"
                        type="date"
                        required
                        value={dateOfBirth}
                        onChange={(e)=>{
                            setDateOfBirth(e.target.value)
                        }}
                    />
                    <input 
                        id="input"
                        placeholder="Phone Number"
                        type="phone"
                        required
                        value={phoneNo}
                        onChange={(e)=>{
                            handleChange(e)
                        }}
                    />
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
                        <h3>Continue</h3>
                    </button>
            </form>
        </>
    )
}

export default Step2