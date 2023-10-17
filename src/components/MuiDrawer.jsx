import {useState} from 'react'
import Box from '@mui/material/Box';


import {   SwipeableDrawer } from '@mui/material';
import { BiMenuAltLeft } from "react-icons/bi";
import SideBar from './SideBar';


const MuiDrawer = ()=>{
  const [open, setOpen] =useState(false);
  

  const list = (
    <Box  classNamerole="presentation">
      <SideBar show={true}/>
      
    </Box>
  );

  return (
    <div>
      < >
     
    <button className="inline-flex items-center p-2 m-2 ml-3 text-sm text-gray-500 rounded-lg h-12 w-12 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " onClick={()=>setOpen(true)}>
    <BiMenuAltLeft style={{fontSize:'2.5rem',color:'white'}} />
    </button>
    <SwipeableDrawer  className="w-56 "  anchor='left' open={open} onClose={() => setOpen(false)}>
          {list}
    </SwipeableDrawer>
      
    
    </>
    </div>
  )
};

export default MuiDrawer;