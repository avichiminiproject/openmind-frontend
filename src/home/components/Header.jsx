import { Link } from "react-router-dom"
import HeaderImage from "../../assets/images/home/header_logo.png"

const Header = () => {
  return (
    <>
    <header className='bg-litegrey'>
        <DesktopNavbar/>
    </header>
    </>
  )
}

export default Header

function DesktopNavbar() {
    return (
        <>
        <nav className="hidden lg:block">
            <div className="flex items-center justify-between px-3">
                <Link to={'/'}>
                    <img src={HeaderImage} alt="Header Logo" className="h-20 p-1" />
                </Link>
                <ul className="flex items-center text-white">
                    <li>
                        <Link to={'/about'}>
                        <h1 className="text-xl hover:text-liteblue p-2">
                            About
                        </h1>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>
                        <h1 className="text-xl hover:text-liteblue p-2">
                            Contact
                        </h1>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/faq'}>
                        <h1 className="text-xl hover:text-liteblue p-2">
                            FAQ's
                        </h1>
                        </Link>
                    </li>
                </ul>
                <div className="inline-flex items-center gap-3 text-white font-semibold">
                    <Link to={'/login'}>
                    <button className="py-2 px-4 bg-cyan-200 rounded-lg">Login</button>
                    </Link>
                    <Link to={'/register'}>
                    <button className="py-2 px-4 bg-cyan-200 rounded-lg">Register</button>
                    </Link>
                    
                </div>
            </div>
        </nav>
        </>
    )
}