import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer text-[20px] "
  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={liStyle}>Home</li>
            <li className={liStyle}>About</li>
            <li className={liStyle}>Our Goal</li>
            <li className={liStyle}>Contact Us</li>
        </ul>
    </div>
    )
}

export default CenterMenu