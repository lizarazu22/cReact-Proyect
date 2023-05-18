import { socialLinks } from '../data/data'
import { SectionLinks } from './SectionLinks'
import { SocialLinks } from './SocialLinks'
const Footer = () => {
  return (
    <footer className='section footer'>
      <SectionLinks parentClass='footer-links' itemClass='footer-link' />
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return <SocialLinks key={link.id} {...link} itemClass='footer-icon' />
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Universidad Privada Boliviana 
        <span id='date'>{new Date().getFullYear()}</span>. Todos los derechos reservados 
      </p>
    </footer>
  )
}
export default Footer;
