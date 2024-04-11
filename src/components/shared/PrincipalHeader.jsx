import { Link } from "react-router-dom"
import './styles/PrincipalHeader.css'
import { FaHotel } from "react-icons/fa6"

const PrincipalHeader = () => {
  return (
    <header className="container__header">
      <Link className="header__title" to='/'><FaHotel className="icon"/><h1 className="title">Hotels VIP</h1></Link>
      <nav>
        <ul className="content__list">
          <li className="list__value"><Link className="list__items" to='/reservations' >Reservations</Link></li>
          <li className="list__value"><Link className="list__items" to='/login' >Login</Link></li>
          <li className="list__value"><Link className="list__items" to='/register' >Register</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default PrincipalHeader
