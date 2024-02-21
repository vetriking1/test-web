import { useState,useRef}  from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebaseConfig';
import { useNavigate,Link } from 'react-router-dom';
import './signup.css'
function Login_page(){

    const navigate = useNavigate();

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    const [idMatched, setIdMatched] = useState(false);



    function EmailValiDate(){
        const re = /\S+@\S+\.\S+/;
        if (!re.test(emailRef.current.value) ){
            setEmailValid(false)
        }
        else setEmailValid(true)
        
        setUserEmail(emailRef.current.value)
    }
    function PasswordValidate(){
        if (passwordRef.current.value.length < 5 || passwordRef.current.value.length >= 15)
        setPasswordValid(false)
        else setPasswordValid(true)
        
        setUserPassword(passwordRef.current.value)
    }

    async function Check_data(){
        if (!emailRef.current.value){
            setEmailValid(false)
            }
        if (!passwordRef.current.value){
            setPasswordValid(false)
            }
        if (emailValid && passwordValid){
            const querySnapshot = await getDocs(collection(db, "data"));
querySnapshot.forEach((doc) => {

            if ( userEmail.localeCompare(doc.data().email)&& userPassword.localeCompare(doc.data().password)){
                setIdMatched(true)

            }
});
// Vetriselvan18 vking1060@gamil.com

        
        }

        if (idMatched){
            passwordRef.current.value = ''
            emailRef.current.value = ''
            console.log("successfully logged in! ")
            navigate('/test-web/home');
            
        }
        else   alert("try again")


    }
    return(
        <>
        <div className='container w-full max-w-90'>
            <h3 className='text-sky-400/100 place-items-center font-bold text-2xl '>Login-Page</h3>
            <div>

                <p className='text-sky-400/100 place-items-center  text-2xl mt-5'>Email-id:</p>
                <input type='text' className={emailValid ? 'rounded border-2 border-gray-500': 'border-2 border-rose-500 rounded'}  ref={emailRef} onChange={EmailValiDate}></input>
                <p className='text-sky-400/100 place-items-center  text-2xl mt-5'>Password:</p>
                <input type='password' className={passwordValid ? 'rounded border-2 border-gray-500': 'border-2 border-rose-500 rounded'}  ref={passwordRef} onChange={PasswordValidate}></input>
                <div>
                    <button className='bg-blue-700 hover:bg-blue-500 text-white  font-bold py-2 px-4 border border-blue-700 rounded mt-5'  onClick={Check_data}>login</button>
                    
                </div>
                <div>
                <Link className=' bg-blue-400  rounded bg-cover font-bold mt-3' to='/test-web/'>SignUP if you do not have account</Link>
                </div>
    
            </div>
        </div>
        </>
    )
}

export default Login_page