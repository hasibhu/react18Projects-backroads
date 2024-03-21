import navLogo from '../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pageLinks } from '../Data1';
import { socialicon } from '../dataSocialicon';

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

                {/* social icons */}
                <ul className="nav-icons">
                    {
                        socialicon.map((links) => {
                            return (
                                <li key={links.id}>
                                    <a  href={links.link} target="_blank" className="nav-icon">
                                        <FontAwesomeIcon icon={links.icon}/>
                                    </a>
                                </li>
                            )
                        })

                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;