import {Outlet} from "react-router-dom"

function App() {


  return (<>
        <h1 className='text-sky-400/100 place-items-center font-bold text-6xl text-center mb-8' >Hello World!</h1>
        <Outlet></Outlet>
        
  </>)
}

export default App
