import { Link } from "react-router-dom"
import './styles/PrincipalHeader.css'
import { FaHotel } from "react-icons/fa6"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const PrincipalHeader = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const handleOpen = () => {
    setOpenMenu(true)
    if(openMenu){
      setOpenMenu(false)
    }
  }

  

  return (
    <header className="container__header">
      <Link className="header__title" to='/'><FaHotel className="icon"/><h1 className="title">Hotels VIP</h1></Link>
      <nav>
      <div className="nav__toggle" onClick={handleOpen}>
          <RxHamburgerMenu />
        </div>
        <ul className={`content__list ${openMenu ?'list__open' : ''}`}>
          <li className="list__value"><Link className="list__items" to='/reservations' >Reservations</Link></li>
          <li className="list__value"><Link className="list__items" to='/login' >Login</Link></li>
          <li className="list__value"><Link className="list__items" to='/register' >Register</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default PrincipalHeader
