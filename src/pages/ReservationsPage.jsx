import { useEffect, useState } from "react"
import useCrud from "../hooks/useCrud"
import ReserveCard from "../components/ReservationPage/ReserveCard"
import FormReviews from "../components/ReservationPage/FormReviews"
import './styles/ReservationsPage.css'

const ReservationsPage = () => {

  const [formIsClose, setFormIsClose] = useState(true)

  const [reserveSelected, setReserveSelected] = useState()

  const [bookings, getBookings,,deleteBooking ] = useCrud()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    getBookings(url)
  }, [])


  return (
    <section className="revPage__container">
      <FormReviews
        reserveSelected={reserveSelected}
        setReserveSelected={setReserveSelected}
        formIsClose={formIsClose}
        setFormIsClose={setFormIsClose}
      />
      <h2 className="revPage__title">Reservations</h2>
      <div>
        {
          bookings?.map(reserve => (
            <ReserveCard
              key={reserve.id}
              reserve={reserve}
              setReserveSelected={setReserveSelected}
              deleteBooking={deleteBooking}
              setFormIsClose={setFormIsClose}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ReservationsPage
