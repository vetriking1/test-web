import Signup_page from "./signup_page"
import Login_page from "./login_page"
import Page from "./home_page"
import {Route,Routes} from "react-router-dom"
function App() {


  return (<>
        <h1 className='text-sky-400/100 place-items-center font-bold text-6xl text-center mb-8' >Hello World!</h1>
        <Routes>
          <Route path='/' element={<Signup_page/>}></Route>
          <Route path='/login' element={<Login_page/>}></Route>
          <Route path='/home' element={<Page/>}></Route>
        </Routes>
        
  </>)
}

export default App
