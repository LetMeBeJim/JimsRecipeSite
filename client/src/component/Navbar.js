import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

    return (
    <>
        <div className="navbar-addon">
            <Link to="/" className="navbar-logo">
                <i className='fa fa-shopping-basket fa-2x'/>
            </Link>
            <Link className='site-name'>
                    <i/> Jim 
            </Link>
        </div>
        <nav className="navbar">
            <div className="navbar-container">
                
                
                <div className='menu-icon' onClick={handleClick}>
                   <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Recipes' className='nav-links' onClick={closeMobileMenu}>
                            Recipes
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Blog' className='nav-links' onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default Navbar
