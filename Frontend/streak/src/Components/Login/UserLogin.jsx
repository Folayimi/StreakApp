import React, {useState,useEffect,useRef} from "react";
import "./UserLogin.css"


// Regular Expression to validate Email.
const EMAIL_REGEX= /^(\w+)([\.\-]?\w+)*\@(\w+)([\.\-]?\w+)*(\.[a-z|A-Z]+)$/

const UserLogin = () =>{

    // Initializing useRefs...
    const fName = useRef();
    const lName = useRef();
    const Eml = useRef();



    // This is a demo. A endPoint should be used to get the refferral name
    // from the refferal link used.
    // ---------END POINT----------
    const [referralName,setRefferalName] = useState("Adeboye Isaac")

    // const [personDetail, setPersonDetail] = useState({
    //     firstName:"", lastName:"", email:""
    // })
                


    // USE_STATES

    // useStates for the Text Fields
    const [firstName, setFirstName] = useState("");    
    const [lastName, setLastName] = useState("")    
    const [email, setEmail] = useState("")    

    // Activates when the email matches the REGEX format.
    const [validEmail, setValidEmail] = useState(false)

    // Regulates the error 
    const [errMsg, setErrMsg] = useState("");    
    const [error, setError] = useState(false)
        
    // Activates when form is filled and email validated.
    const [success, setSuccess] = useState(false);



    // USE_EFFECTS

    // Activates the First name field focus, on rendering.
    useEffect(()=>{
        fName.current.focus()
    },[])

    // Displays the proper error message when conditions requires.
    useEffect(()=>{        
        if(email && EMAIL_REGEX.test(email)){
            setValidEmail(true)
            setError(false)                
        }

        if(!EMAIL_REGEX.test(email) && firstName && lastName){               
            setError(true)     
            setErrMsg("!Invalid Email")        
            setValidEmail(false)                                                            
        }
        else if(firstName && lastName){
            setError(false)
        }        

        if(error === true && !firstName || !lastName){ 
            setErrMsg("Please fill in the First name and Last name")              
            return;                                         
        }        
    },[error,email])

    // Assigns the form inputs to their proper constant and
    // resets the states to default.
    useEffect(()=>{        
        if(success){
            const firstFinal = firstName
            const lastFinal = lastName
            const emailFinal = email    
            setFirstName("")                        
            setLastName("")
            setEmail("")
            setErrMsg("")
            setError(false)
            setValidEmail(false)
            setSuccess(false)
        }        
    },[success])


    const handleChange = (e)=>{        
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
        if(firstName && lastName && validEmail){
            setSuccess(true)                        
        }                
    }
    return(
        <>
            {/* <div className="Header">
                <div className="headerCont">
                    <div className="logo">
                        <img src={logo} alt="brandLogo" width="100%" height="100%"/>
                    </div>                                
                </div>                 
            </div> */}
            <center className="sectionCont">
                <div className="section">
                    <form className="form">
                        <div className="refMsg">
                            <h3>You have been referred 
                            to join the wait list by <span>{referralName}</span></h3>
                        </div>
                        <p>Please complete your form and refer to get early bird access</p>
                        <div className="formInput">
                            <input 
                                
                                type="text" 
                                value={firstName}
                                placeholder="First name"
                                required
                                ref={fName}
                                onChange={(e)=>{
                                    setFirstName(e.target.value)                                    
                                }}                                                                

                            />
                            <input 
                                
                                type="text" 
                                value={lastName}
                                placeholder="Last name"
                                required
                                ref={lName}                                
                                onChange={(e)=>{
                                    setLastName(e.target.value)                                    
                                }}                                                                

                            />
                            <input 
                                
                                type="text" 
                                value={email}
                                placeholder="Email Address"
                                required
                                ref={Eml}
                                onChange={(e)=>{                                    
                                    handleChange(e)
                                }}                                                                

                            />
                            {
                                error && <p className="errorMsg">
                                    {errMsg}
                                </p>
                            }
                            <button 
                                className={validEmail ? "enable" : "disable"}                                
                                onClick={handleSubmit}                                                        
                            > 
                                Join
                            </button>
                        </div>
                    </form>
                </div>
            </center>
        </>
    )
}

export default UserLogin;