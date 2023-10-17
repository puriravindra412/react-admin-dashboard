import {}from 'react'
import { MdSearch} from 'react-icons/md'

import { HiOutlineShoppingBag } from 'react-icons/hi'
import { TiDocumentText } from 'react-icons/ti'
import { RiExchangeDollarFill } from 'react-icons/ri'
import { GiReceiveMoney } from 'react-icons/gi'
import SmallCard from './SmallCard';
import BarChart from './BarChart';
import RoundChart from './RoundChart'
import ProductTableCard from './ProductTableCard'
const icon1=(<RiExchangeDollarFill  style={{fontSize:'4rem',color:'#00BE40'}}/>)
const icon2=(<TiDocumentText style={{fontSize:'4rem',color:'#4700E6'}}/>)
const icon3=(<GiReceiveMoney style={{fontSize:'4rem',color:'#0076F0'}}/>)
const icon4=(<HiOutlineShoppingBag  style={{fontSize:'4rem',color:'#DB00EC'}}/>)

const data=[
    {
        up:true,
        category:"Earning",
        sales:"$198K",
         profit:"37%", color:"green",
        icon:icon1

    },
    {
        up:false,
        category:"Order",
        sales:"$2.4K",
         profit:"2%", color:"purple",
        icon:icon2

    },
    {
        up:false,
        category:"Balance",
        sales:"$2.4K",
         profit:"2%", color:"sky",
        icon:icon3

    },
    {
        up:true,
        category:"Earning",
        sales:"$89K",
         profit:"11%", color:"pink",
        icon:icon4

    }

]
const Container = () => {
  return (
   
    <div className='w-full  sm:p-8 p-4  bg-slate-200 '>
    <div className='sm:flex hidden'>
    <p className='ttext-base ml-2 '>Hello Shahrukh </p>
    <span>👋,</span>
    <div className='ml-auto w-auto p-1 border rounded h-10 flex items-center bg-white mr-2 '>
        <MdSearch />
        <input className='text-xs h-8 p-1 ml-1 ' placeholder='Search'></input>
    
</div>
    </div>
    
       
        <div className='sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-7 gap-2 my-4 flex flex-col '>
        {
            data.map((cards,index)=>{
                return <SmallCard key={index}up={cards.up}  category={cards.category} sales={cards.sales} profit={cards.profit} color={cards.color} icon={cards.icon}/>
            })
        }
        
        
        </div>
        <div className='flex flex-col md:flex-row my-3 gap-6'>
        <BarChart />
        <RoundChart />
        </div>
        <ProductTableCard  />
     
     </div>
    
  )
}

export default Container;