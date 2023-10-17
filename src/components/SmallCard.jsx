/* eslint-disable react/prop-types */
import { AiOutlineArrowDown, AiOutlineArrowUp, } from 'react-icons/ai'
import{useState,useEffect} from 'react'
const Color={
    sky:{
        background:'#BCDDFF',
    },  
    green:{
        background:'#B7FECF',
        },
    pink:{
        background:'#FBC8FF',
        
    },
    purple:{
        background:'#DBCBFF',
        
    }
}
const SmallCard = (props) => {
    const {up,category,sales,profit,color,icon}=props
  
   const [bgColor, setBgColor] = useState('');
   
    console.log(color)
   useEffect(() => {
     setBgColor(Color[color].background)
    
     return () => {
       setBgColor('')
     }
   }, [ color])
   console.log(bgColor)
   

   
    
 
    
  return (
    <div className='flex  h-40  my-1 rounded-lg border  bg-white items-center justify-center  shadow-slate-100 shadow-md hover:cursor-pointer hover:scale-105'>
        <div className='w-28 h-28  md:h-26 md:w-26  lg:w-28 lg-28 rounded-full m-2 flex items-center justify-center ' style={{backgroundColor:bgColor}}>
            {icon}
        </div>
        <div className='flex flex-col mx-1'>
            <p className='text-xs text-slate-300'>{category}</p>
            <p className='text-xl font-extrabold'>{sales}</p>
            <div className='flex items-center '><span className={up?'text-green-700 font-bold text-xs':'text-red-700 font-bold text-xs'}>{up?<AiOutlineArrowUp />:<AiOutlineArrowDown />}</span><span className={up?'text-green-700 font-bold mr-1 text-xs':'text-red-700 font-bold mr-1 text-xs'}>{profit}</span><p className='text-xs'>{'this month'} </p></div>
        </div>
   
    </div>
  )
}

export default SmallCard