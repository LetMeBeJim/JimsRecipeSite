import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

function Footer() {
    const [setClick] = useState(false);
    const closeMobileMenu = () => setClick(false)
    return (
    <>
        <div className="footer">
            <div className="footer-left">
                <Link to="/" className="footer-logo">
                    <i className='fa fa-shopping-basket fa-3x'/>
                </Link>
            </div>

            <div className="footer-right">
                <ul className="footer-info">
                    <li className="footer-items">
                        <Link to="/" className="footer-deco">
                            Jim
                        </Link>
                    </li>
                    <li className='footer-items'>
                        <a href="https://github.com/LetMeBeJim" className='footer-links' onClick={closeMobileMenu}>
                            Github
                        </a>
                    </li>
                    <li className='footer-items'>
                        <a href="https://www.linkedin.com/in/bojingyao/" className='footer-links' onClick={closeMobileMenu}>
                            LinkedIn
                        </a>
                    </li>
                    <li className='footer-items'>
                        <Link to='/New_Friend' className='footer-links' onClick={closeMobileMenu}>
                            Say Hi
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default Footer