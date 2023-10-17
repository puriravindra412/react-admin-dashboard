
import { MdSearch} from 'react-icons/md'
import ProductTable from './ProductTable'
const ProductTableCard = () => {
  return (
    <div className='bg-white rounded-lg shadow-slate-100 shadow-md flex flex-col p-2 mt-4'>
        <div className="flex p-3">
            <p className=" text-lg font-bold">Product sell</p>
            <div className='ml-auto w-auto p-1 border-none rounded h-7 flex items-center bg-slate-50 max-w-xs'>
                        <MdSearch  className='text-slate-400'/>
                        <input className='text-xs ml-1  bg-slate-50 max-w-sm w-11'  placeholder='Search'></input>
            </div>
            <select className='ml-2 text-slate-400 text-xs bg-slate-50 rounded-md h-7 p-1 w-auto max-w-sm'>
                <option value="quartely">last 30 days</option>
                <option value="quartely">Half-yearly</option>
                <option value="quartely">Yearly</option>
            </select>
        </div>
        <ProductTable />
    

    </div>
  )
}

export default ProductTableCard