import {useLocation} from 'react-router-dom'
function Page(){
    const userName = useLocation().state?.userName
    return(<>
    <h2 className="text-sky-400/100 place-items-center font-bold text-2xl">Welcome to my Page {userName}!</h2>
    <h2 className="text-sky-400/100 place-items-center font-bold text-2xl">Successfully logged In! </h2>
    </>)
}

export default Page