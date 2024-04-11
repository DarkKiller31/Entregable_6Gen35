import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import HotelCard from "../HomePage/HotelCard"
import './styles/OtherHotels.css'

const OtherHotels = ({ hotel }) => {

  const url = `https://hotels-api.academlo.tech/hotels?cityId=${hotel?.cityId}`
  const [ hotelsInCity, getHotelsInCity ] = useFetch(url)

  useEffect(() => {
    if (hotel) {
      getHotelsInCity()
    }
  }, [hotel])

  console.log(hotel, hotelsInCity)

  return (
    <section className="other__container">
      <h3 className="other__title">Other hotels in <span>{hotel?.city.name}</span></h3>
      <div className="other__cards">
        {
          hotelsInCity?.filter(hotelInfo => hotelInfo.id !== hotel.id).map(hotelInfo => (
            <HotelCard 
              key={hotelInfo.id}
              hotel={hotelInfo}
            />
          ))
        }
      </div>
    </section>
  )
}

export default OtherHotels
