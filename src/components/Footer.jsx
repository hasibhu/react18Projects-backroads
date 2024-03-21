import { pageLinks } from '../Data1';

const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {
                    pageLinks.map((link) => {
                        return (
                            <li key={link.id}>
                                <a href={link.href} className="nav-link text-2xl font-bold" id='footerName'> {link.text} </a>
                            </li>
                        );
                    })
                }

                {/* <li>
                    <a href="#home" className="footer-link">home</a>
                </li>
                <li>
                    <a href="#about" className="footer-link">about</a>
                </li>
                <li>
                    <a href="#services" className="footer-link">services</a>
                </li>
                <li>
                    <a href="#featured" className="footer-link">featured</a>
                </li> */}
            </ul>
            <ul className="footer-icons">
                <li>
                    <a href="https://www.twitter.com" target="_blank" className="footer-icon"
                    // ><i className="fab fa-facebook"></i
                    ></a>
                </li>
                <li>
                    <a href="https://www.twitter.com" target="_blank" className="footer-icon"
                    // ><i className="fab fa-twitter"></i
                    ></a>
                </li>
                <li>
                    <a href="https://www.twitter.com" target="_blank" className="footer-icon"
                    // ><i className="fab fa-squarespace"></i
                    ></a>
                </li>
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    );
};

export default Footer;