import {useState} from 'react'
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { BsPersonWorkspace } from 'react-icons/bs';
import { GiCash} from 'react-icons/gi';
import { MdOutlineLiveHelp } from 'react-icons/md';
import {  BiSolidOffer } from 'react-icons/bi';
import { HiChevronDown, HiChevronRight} from 'react-icons/hi';
import {  RiDashboardLine, RiSettingsLine } from 'react-icons/ri';

const icon1=(<RiDashboardLine style={{fontSize:'22px'}}/>)
const icon2=(<AiOutlineCodeSandbox   style={{fontSize:'22px'}}/>)
const icon3=(<BsPersonWorkspace  style={{fontSize:'22px'}}/>)
const icon4=(<GiCash  style={{fontSize:'22px'}}/>)
const icon5=(<BiSolidOffer  style={{fontSize:'22px'}}/>)
const icon6=(<MdOutlineLiveHelp  style={{fontSize:'22px'}}/>)


const data=[
    {
        text:"Dashboard",
        icon:icon1
    },{
        text:"product",
        icon:icon2
    },{
        text:"Customer",
        icon:icon3
    },{
        text:"Income",
        icon:icon4
    },{
        text:"Prompt",
        icon:icon5
    },{
        text:"Help",
        icon:icon6
    }
]

const SideBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const {show}=props
    const [activeItem, setActiveItem] = useState(0);
   
  return (
    <div >
    
<aside  className={!show?'fixed top-0 left-0 z-40 w-1/5 h-screen transition-transform -translate-x-full sm:translate-x-0':'fixed top-0 left-0 z-40 w-56 h-screen '} aria-label="Sidebar" >
   <div className="relative h-full px-3 py-4 overflow-y-auto bg-blue-950" >
        <div className='flex  p-2 items-center text-white '>
            <span className='mr-2'><RiSettingsLine style={{fontSize:'30px'}}/></span>
            <p className=' text-lg  font-bold'>Dashboard</p>
        </div>
        <ul className='my-4 p-2'>
                {data.map((items,index)=>{
                    return( 
                        <li key={index} className={`my-2 w-full text-sm items-center flex text-slate-400 p-2 hover:bg-indigo-600 hover:rounded-md  ${index === activeItem ? 'bg-indigo-900 rounded-md' : ''}`} onClick={() => setActiveItem(index)}>
                    <span className='mr-2'>{items.icon}</span>
                    <p className=' text-xs '>{items.text}</p>
                    {index>0?<span className='ml-auto'><HiChevronRight /></span>:" "}
                </li>)
})}
                
                
        </ul>
         <div className='absolute bottom-11  p-2 flex items-center bg-indigo-900 h-11  rounded  md:w-56 sm:w-52'>
         <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt='' className='w-8 h-8  rounded-full '></img>
         <div className='flex mx-2 flex-col items-start'><p className='text-xs gap-0 font-semibold m-0 text-white'>Evano</p><p className=' m-0 gap-0 text-slate-400' style={{fontSize:'10px'}}>project manager</p></div>
         <span className='ml-auto text-slate-400'><HiChevronDown /></span>
         </div>
   </div>
</aside>
    
    </div>
  )
}

export default SideBar;