import './styles/ReserveCard.css'

const ReserveCard = ({ reserve, setReserveSelected, deleteBooking, setFormIsClose }) => {

  console.log({reserve})

  const checkIn = new Date(reserve.checkIn)
  const checkOut = new Date(reserve.checkOut)
  const reservationDays = (checkOut - checkIn)/(1000 * 60 * 60 * 24)

  const handleReview = () => {
    const obj = {
      ...reserve,
      reservationDays,
      subtotal: reserve.hotel.price * reservationDays
    }
    setReserveSelected(obj)
    setFormIsClose(false)
  }

  const handleDeleteBooking = () => {
    const url = `https://booking-app-rtjk.onrender.com/bookings/${reserve.id}`
    deleteBooking(url, reserve.id)
  }


  return (
    <article className="resCard__container">
      <header className="resCard__header">
        <img className="resCard__img" src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section className="resCard__info">
        <h3>{reserve.hotel.name}</h3>
        <div>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
        <div className="resCard__rate" onClick={handleReview}>Rate and comment this visit...</div>
      </section>
      <section>
        <ul className="resCard__list">
          <li className="resCard__reserve"><span className="resCard__item">Reservation Days</span><span className="resCard__value">{reservationDays}</span></li>
          <li className="resCard__reserve"><span className="resCard__item">subtotal Price</span><span className="resCard__value">{reservationDays * reserve.hotel.price} USD</span></li>
        </ul>
      </section>
      <footer>
        <button className="card__btn resCard__btn" onClick={handleDeleteBooking}>
          <i className='bx bx-trash'></i>
        </button>
      </footer>
    </article>
  )
}

export default ReserveCard
