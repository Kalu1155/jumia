import React, { useState } from 'react'
import Productpage from './Productpage'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [openModal, setOpenModal] = useState(false)

    const open = ()=>{
        setOpenModal(prev=>!prev)
    }

  return (
    <div className='fixed w-[80%] bg-white border-b border-gray-500 right-0 z-50 flex justify-between py-4 px-3'>
        <div>
            <h1 className='text-yellow-300 text-2xl font-bold'>JUMIA</h1>
        </div>
        <div>
            <Link to='/Product' className='px-3 text-white font-semibold text-sm cursor-pointer py-2 bg-blue-600 rounded-xl'>
                Create Product
            </Link>
        </div>
    </div>
  )
}

export default Nav