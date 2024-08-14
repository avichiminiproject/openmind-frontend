import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
    <header className='bg-litegrey'>
        <nav className='flex items-center justify-between px-3 py-2'>
            <a href={'/'}><img src="./src/assets/images/home/header_logo.png" alt="header logo" className='h-16 p-2' /></a>
            <ul className='text-white flex items-center justify-between gap-5 font-semibold'>
                <li>
                <Link to={'/about'}>About</Link>
                </li>
                <li>
                <Link to={'/services'}>Services</Link>
                </li>
                <li>
                <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                    <button className="text-white bg-liteblue px-5 py-2.5 rounded-full">Login</button>
                </li>
                <li>
                    <button className="text-white border-2 border-liteblue px-5 py-2.5 rounded-full">Register</button>
                </li>
            </ul> 
        </nav>
    </header>
    </>
  )
}

export default Header