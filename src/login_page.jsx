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

    const [userName,setUserName] = useState('')



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

            if ( userEmail== doc.data().email && userPassword== doc.data().password){
                setIdMatched(true)
                setUserName(doc.data().name)
                console.log(doc.data().name)

            }
});


        
        }

        if (idMatched){
            passwordRef.current.value = ''
            emailRef.current.value = ''
            console.log("successfully logged in! ")
            // not working don't know why
            navigate('/test-web/home',{ state: { userName } });
            
        }
        else   alert("try again!")


    }
    return(
        <>
        <div className='container w-full max-w-90'>
            <h3 className='text-sky-400/100 place-items-center font-bold text-2xl '>Login-Page</h3>
            <div>

                <p className='text-sky-400/100 place-items-center  text-2xl mt-5'>Email-Id:</p>
                <input type='text' className={emailValid ? 'rounded border-2 border-gray-500': 'border-2 border-rose-500 rounded'}  ref={emailRef} onChange={EmailValiDate}></input>
                <p className=' text-red-600'>{  emailValid?'':'not a valid email'}</p>
                <p className='text-sky-400/100 place-items-center  text-2xl mt-5'>Password:</p>
                <input type='password' className={passwordValid ? 'rounded border-2 border-gray-500': 'border-2 border-rose-500 rounded'}  ref={passwordRef} onChange={PasswordValidate}></input>
                <p className=' text-red-600'>{  passwordValid?'':'password between 5 to 20 letters'}</p>
                <div>
                    <button className='bg-blue-700 hover:bg-blue-500 text-white  font-bold py-2 px-4 border border-blue-700 rounded mt-5'  onClick={Check_data}>login</button>
                    
                </div>
                <div>
                <Link className=' bg-blue-500  rounded bg-cover font-bold mt-3' to='/test-web/'>SignUP if you do not have account</Link>
                </div>
    
            </div>
        </div>
        </>
    )
}

export default Login_page