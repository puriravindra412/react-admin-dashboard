
import {useState,useEffect} from 'react'
import { MdSearch} from 'react-icons/md'
import './App.css'
import Container from './components/Container'
import MuiDrawer from './components/MuiDrawer'
import SideBar from './components/SideBar'



function App() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 640) {
        setShow(true)
        
      } else {
        setShow(false)
        
      }
    };

    handleWindowResize(); // Set the initial anchor direction

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className='app h-screen m-0 p-0 flex  flex-col sm:grid sm:grid-cols-5  bg-slate-200 '>
      {show?<div className='flex items-center  h-16 bg-blue-950 text-slate-400'>
        <MuiDrawer />
        
        <p className='text-base text-white ml-2 '>Hello Shahrukh </p>
        <span>👋,</span>
        <div className='ml-auto w-auto p-1 border rounded h-10 flex items-center bg-white mr-2'>
            <MdSearch />
            <input className='text-xs h-8 p-1 ml-1 ' placeholder='Search'></input>
        
    </div>
    
        </div>:<SideBar show={show}/>}
      <div className="sm:col-span-4  h-screen">
      <Container className="w-full  "/>
      </div>
      
    </div>
    
  )
}

export default App
