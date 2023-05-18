import logo from "../images/logo.svg";
import { SectionLinks } from "./SectionLinks";
import { socialLinks } from "../data/data";
import { SocialLinks } from "./SocialLinks";
export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <SectionLinks parentClass='nav-links' itemClass='nav-link' />

        <ul className="nav-icons">
          {socialLinks.map((social) => {
            return (
              <SocialLinks key={social.id} social={social.link} itemClass='nav-icon'></SocialLinks>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
