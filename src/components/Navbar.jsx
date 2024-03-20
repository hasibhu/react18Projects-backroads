import navLogo from '../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { pageLinks } from '../data';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={navLogo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                {/* <!-- left this comment on purpose --> */}
                <ul className="nav-links" id="nav-links">
                    {
                        pageLinks.map((link) => {
                            return (
                                <li key={link.id}>
                                    <a href={link.href} className="nav-link text-2xl font-bold"> {link.text} </a>
                                </li>
                            );
                        })
                    }
                    
                </ul>

                <ul className="nav-icons">
                    <li>
                        <a href="https://www.facebook.com" target="_blank" className="nav-icon">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.x.com" target="_blank" className="nav-icon">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" className="nav-icon">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;