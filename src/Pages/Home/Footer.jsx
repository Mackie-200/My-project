import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img
            className="footer--logo"
            src="./img/don.png"
            alt="team code"
          />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61561673590551"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0zm4 16h-2.5v8h-3v-8H12v-2.5h2.5V12c0-2.21 1.79-4 4-4h2.5v2.5H19c-.55 0-1 .45-1 1v1.5h2.5L20 16z" fill="#5E3BEE"/>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mcd2.00/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0zm8 16c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8z" fill="#5E3BEE"/>
                  <circle cx="16" cy="16" r="5" stroke="#5E3BEE" strokeWidth="2" fill="none"/>
                  <circle cx="22" cy="10" r="1.5" fill="#5E3BEE"/>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mcdonald-chirumezani-810296376/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0zM12 24H8V12h4v12zM10 10.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM26 24h-4v-6c0-1.1-.9-2-2-2s-2 .9-2 2v6h-4V12h4v1.5c.8-1.1 2.1-1.5 3.5-1.5 2.5 0 4.5 2 4.5 4.5V24z" fill="#5E3BEE"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">
          Copyright {new Date().getFullYear()} McDonald
        </p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
