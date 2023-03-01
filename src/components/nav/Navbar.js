import './style.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const activeLink = 'nav-list__link nav-list__link--active'
  const normalLink = 'nav-list__link'
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav-row'>
          <NavLink to='/' className='logo'>
          <img
            width='80px'
            src='https://cryptocurrencyjobs.co/startups/assets/logos/tokenwalk.803c331bb51321719796ef91381fdb507210e5efcd4a0904b7d496bba84518d3.jpg'
            alt=''
          />
            <div >Portfolio Fullstack Software Developer</div>
          </NavLink>

          <ul className='nav-list'>
            <li className='nav-list__item'>
              <NavLink
                to='/'
                className={({ isActive }) => {
                  return isActive ? activeLink : normalLink
                }}>
                Home
              </NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink
                to='/projects'
                className={({ isActive }) => {
                  return isActive ? activeLink : normalLink
                }}>
                Projects
              </NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink
                to='/contact'
                className={({ isActive }) => {
                  return isActive ? activeLink : normalLink
                }}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
