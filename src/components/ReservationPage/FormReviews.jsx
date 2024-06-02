import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"
import './styles/FormReviews.css'

const FormReviews = ({ reserveSelected, setReserveSelected, formIsClose, setFormIsClose }) => {

  const { handleSubmit, register, reset } = useForm()

  const [,, createReview] = useCrud()

  const submit = data => {
    const url = 'https://booking-app-rtjk.onrender.com/reviews'
    data.hotelId = reserveSelected?.hotel.id
    data.rating = +data.rating
    createReview(url, data)
    setReserveSelected()
    setFormIsClose(true)
  }

  const close = () => {
    setFormIsClose(true)
  }
  return (
    <article className={`review__content ${formIsClose && 'review__close'}`}>
      <div className="form__card">
        <div className="review__header">
          <h3 className="review__title">Reserve</h3>
          <h2 className="reviewHe__close" onClick={close}>X</h2>
        </div>
        <section className="review_container">
          <header className="review__header">
            <img className="formRev__img" src={reserveSelected?.hotel.images[0].url} alt="" />
          </header>
          <h4 className="review__name">{reserveSelected?.hotel.name}</h4>
          <p className="review__country">
            {reserveSelected?.hotel.city.name},{" "}
            {reserveSelected?.hotel.city.country}
          </p>
          <ul>
            <li className="contRev">
              <span className="review__item">Reservation Days</span>
              <span className="review__value">{reserveSelected?.reservationDays}</span>
            </li>
            <li className="contRev">
              <span className="review__item">subtotal Price</span>
              <span className="review__value">{reserveSelected?.subtotal}</span>
            </li>
          </ul>
        </section>
        <form className="review__form" onSubmit={handleSubmit(submit)}>
          <label className="review__label">
            <span className="label__items">Rating</span>
            <select className="label__values" {...register('rating')} >
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="2">⭐⭐</option>
              <option value="1">⭐</option>
            </select>
          </label>
          <label className="review__label">
            <span className="label__items">Comments</span>
            <textarea className="label__values texts" {...register('comment')} />
          </label>
          <button className="card__btn review__btn">Submit</button>
        </form>
      </div>
    </article>
  )
}

export default FormReviews
