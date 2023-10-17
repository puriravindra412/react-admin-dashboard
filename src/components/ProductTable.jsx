

const ProductTable = () => {
  return (
    <div className='mt-2 '>
    <table className="w-full border-collapse">
    <thead className="text-xs text-slate-400">
        <tr>
            <th className="sm:w-3/5 w-1/2 p-2 pl-4 text-start">Products</th>
            <th className="sm:w-1/1 w-1/6 p-2 text-center">Stock</th>
            <th className="sm:w-1/10 w-1/6 p-2 text-center">Price</th>
            <th className="sm:w-1/10  w-1/6 p-2 text-center">Total sale</th>
        </tr>
    </thead>
    <tbody className="border-t">
        <tr>
            <td className="w-3/5 p-2 pl-4 ">
                <div className="flex sm:flex-row flex-col">
                    <img src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="prouct1" className="h-12 w-16 rounded-md"></img>
                        <div className="flex flex-col sm:ml-2 mt-1 justify-center p-0 sm:p-2 ">
                        <p className="text-sm font-extrabold">Abstract 3D</p>
                        <p className="text-xs text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                
                </div>
            </td>
            <td className="w-1/10 p-2 text-sm text-center">32 in stock</td>
            <td className="w-1/10 p-2 text-sm text-center">$ 45.99</td>
            <td className="w-1/10 p-2 text-sm text-center">20</td>
        </tr>
        <tr>
            <td className="w-3/5 p-2 pl-4 ">
                <div className="flex sm:flex-row flex-col">
                    <img src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="prouct1" className="h-12 w-16 rounded-md"></img>
                        <div className="flex flex-col sm:ml-2 mt-1 justify-center p-0 sm:p-2 ">
                        <p className="text-sm font-extrabold">Abstract 3D</p>
                        <p className="text-xs text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                
                </div>
            </td>
            <td className="w-1/10 p-2 text-sm text-center">32 in stock</td>
            <td className="w-1/10 p-2 text-sm text-center">$ 45.99</td>
            <td className="w-1/10 p-2 text-sm text-center">20</td>
        </tr>
       
       
    </tbody>
</table>
    </div>
  )
}

export default ProductTable;