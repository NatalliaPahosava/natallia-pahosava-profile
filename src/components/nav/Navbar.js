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
            <strong>Fullstack Software Developer</strong> portfolio
          </NavLink>

          {/* <button className="dark-mode-btn">
                    <img src="./img/icons/sun.svg" alt="Light mode" className="dark-mode-btn__icon"/>
                    <img src="./img/icons/moon.svg" alt="Dark mode" className="dark-mode-btn__icon"/>
                </button> */}

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
                to='/contacts'
                className={({ isActive }) => {
                  return isActive ? activeLink : normalLink
                }}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar