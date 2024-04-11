import { useNavigate } from "react-router-dom"
import './styles/HotelCard.css'

const HotelCard = ({ hotel }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/hotels/${hotel.id}`)
  }

  return (
    <article className="card__hotel">
      <header className="card__header">
        <img className="card__img" src={hotel.images[0].url} alt="" />
      </header>
      <section className="card__info">
        <h3 className="card__name">{hotel.name}</h3>
        <p className="card__rating">{hotel.rating}</p>
        <span className="card__location">{hotel.city.name}, {hotel.city.country}</span>
        <div className="card__price">$ {hotel.price}</div>
      </section>
      <footer className="card__footer">
        <button className="card__btn" onClick={handleClick}>See more...</button>
      </footer>
    </article>
  )
}

export default HotelCard
