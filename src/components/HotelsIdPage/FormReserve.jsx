import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";
import './styles/FormReserve.css'

const FormReserve = ({ hotelId }) => {

  const { handleSubmit, register, reset } = useForm()

  const [ ,,createBooking ] = useCrud()

  const submit = data => {
    const url = 'https://booking-app-rtjk.onrender.com/bookings'
    data.hotelId = +hotelId
    createBooking(url, data)
    reset({
      checkIn: '',
      checkOut: ''
    })
  }

  return (
    <section className="reserve__container">
      <h3 className="reserve__title">Do you want to reserve this hotel?</h3>
      <form className="reserve__form" onSubmit={handleSubmit(submit)}>
        <div className="reserve__formContainer" >
          <label className="reserve__label">
            <span className="reserve__item">Check-in</span>
            <input className="reserve__input" {...register('checkIn')} type="date" />
          </label>
          <div className="vertical__line"></div>
          <label className="reserve__label">
            <span className="reserve__item">Check-out</span>
            <input className="reserve__input" {...register('checkOut')} type="date" />
          </label>
        </div>
        <button className="card__btn reserve__btn">Submit</button>
      </form>
    </section>
  );
};

export default FormReserve;
