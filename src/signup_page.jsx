import './signup.css'
import { useState,useRef}  from 'react'
import { db } from './firebaseConfig';
import { Link } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore"; 
function Signup_page(){



    const uName = useRef(null)
    const uEmail = useRef(null)
    const uNumber = useRef(null)
    const uPassWord = useRef(null)

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userNumber, setUserNumber] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [numberValid, setNumberValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    const [canSendData, setCanSendData] = useState(false);
    const [showFillAll, setShowFillAll] = useState(false);

   const Send_data = async (event) =>{
    event.preventDefault();
        if (!uName.current.value){
            setNameValid(false)
            setCanSendData(false)}
        if (!uEmail.current.value){
            setEmailValid(false)
            setCanSendData(false)}
        if (!uNumber.current.value){
            setNumberValid(false)
            setCanSendData(false)}
        if (!uPassWord.current.value){
            setCanSendData(false)
            setPasswordValid(false)}
        if (nameValid && numberValid && emailValid && passwordValid && uName.current.value &&
            uEmail.current.value && uNumber.current.value && uPassWord.current.value)
            setCanSendData(true)
        else{
            setShowFillAll(true)
        }
        
        if (canSendData){

            
        try{
         const docRef = await addDoc(collection(db,'data'),
         {'name':userName,
         'email':userEmail,
         'number':userNumber,
         'password':userPassword})
        console.log("Data sent to Firestore successfully!", docRef.id);
        alert('signed up successfully!')
        }
        catch{
            console.error('error happened')
        } 

            uName.current.value = ""
            uEmail.current.value = ""
            uNumber.current.value = ""
            uPassWord.current.value = ""
        }


    }

    function NameValiDate(){
        if (uName.current.value.length >=20 || uName.current.value.length <3){
            setNameValid(false)
        }  
        else setNameValid(true)
        
        setUserName(uName.current.value)

    }
    function EmailValiDate(){
        const re = /\S+@\S+\.\S+/;
        if (!re.test(uEmail.current.value) ){
            setEmailValid(false)
        }
        else setEmailValid(true)
        
        setUserEmail(uEmail.current.value)
    }
    function NumberValidate(){
        
        if (uNumber.current.value.length != 10)
            setNumberValid(false)
        else setNumberValid(true)
        
        setUserNumber(uNumber.current.value)
    }
    function PasswordValidate(){
        if (uPassWord.current.value.length < 5 || uPassWord.current.value.length >= 20)
        setPasswordValid(false)
        else setPasswordValid(true)
        
        setUserPassword(uPassWord.current.value)
    }

    return(
        <div className="container w-full max-w-90">
            <h3 className='text-sky-400/100 place-items-center font-bold text-2xl '>SIGNUP-Page</h3>
            <div >
                <label htmlFor='1' ><p className='text-sky-400/100 place-items-center  text-2xl mt-5'>Name:</p></label>
                <input id='1' className={nameValid ? 'rounded border-2 border-gray-500': ' border-2 border-rose-500 rounded'} type='text' onChange={NameValiDate} ref={uName}></input>
                <p className=' text-red-600'>{  nameValid?'':'name between 3 to 20 letters'}</p>
                <label htmlFor='2' ><p className='text-sky-400/100 place-items-center  text-2xl mt-5'>Email-id:</p></label>
                <input id='2' className={emailValid ? 'rounded border-2 border-gray-500': 'rounded border-2 border-rose-500'} type='email' onChange={EmailValiDate} ref={uEmail}></input>
                <p className=' text-red-600'>{  emailValid?'':'not a valid email'}</p>
                <p className='text-sky-400/100 place-items-center  text-2xl mt-5'>Phone-no:</p>
                <input className={numberValid ? 'rounded border-2 border-gray-500': 'rounded border-2 border-rose-500'} type='number' onChange={NumberValidate} ref={uNumber}></input>
                <p className=' text-red-600'>{  numberValid?'':'not a valid phone number'}</p>
                <p className='text-sky-400/100 place-items-center  text-2xl mt-5'>Password:</p>
                <input className={passwordValid ? 'rounded border-2 border-gray-500': 'rounded border-2 border-rose-500'} type='password' onChange={PasswordValidate} ref={uPassWord}></input>
                <p className=' text-red-600'>{  passwordValid?'':'password between 5 to 20 letters'}</p>
                <div>
                
                <button className='bg-blue-700 hover:bg-blue-500 text-white  font-bold py-2 px-4 border border-blue-700 rounded mt-5' onClick={Send_data}>SUBMIT</button>
                
                <p className=' text-red-700 font-bold text-lg'>{showFillAll ? 'please fill all correctly' : ''}</p>
                <div>
                <Link className=' bg-blue-400 rounded bg-cover font-bold mt-3' to='/test-web/login'>Login if you have an account</Link>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Signup_page