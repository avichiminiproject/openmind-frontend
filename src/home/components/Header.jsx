import React from 'react'

const Header = () => {
  return (
    <>
    <header className='bg-litegrey'>
        <nav className='flex items-center justify-between px-3 py-2'>
            <img src="./src/assets/images/home/header_logo.png" alt="header logo" className='h-16 p-2' />
            <ul className='text-white flex items-center justify-between gap-5 font-semibold'>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul> 
        </nav>
    </header>
    </>
  )
}

export default Header