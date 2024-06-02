import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import { Map, Marker } from "pigeon-maps";
import OtherHotels from "../components/HotelsIdPage/OtherHotels";
import FormReserve from "../components/HotelsIdPage/FormReserve";
import SliderImg from "../components/HotelsIdPage/SliderImg";
import './styles/HotelsIdPage.css'

const HotelsIdPage = () => {
  const { id } = useParams();

  const url = `https://booking-app-rtjk.onrender.com/hotels/${id}`;
  const [hotel, getHotel] = useFetch(url);

  useEffect(() => {
    getHotel();
  }, [id]);

  console.log(hotel)


  return (
    <div className="idPage__content">
      <h2 className="idPage__name">{hotel?.name}</h2>
      <h3>RATING - {hotel?.rating}</h3>
      <div className="sliderAndMap">
        <div className="slider">
          <SliderImg 
            images={hotel?.images}
          />
        </div>
        <div className="map">
          {hotel && (
            <Map
              height={320}
              defaultCenter={[+hotel.lat, +hotel.lon]}
              zoom={15}
              maxZoom={16}
              minZoom={10}
            >
              <Marker
                anchor={[+hotel.lat, +hotel.lon]}
                color="black"
                width={40}
              />
            </Map>
          )}
        </div>
      </div>
      <section className="idPage__location">
        <h3 className="location__title">
          {hotel?.city.name}, {hotel?.city.country}
        </h3>
        <p className="location__address">
          <i className="bx bx-map"></i>
          <span>{hotel?.address}</span>
        </p>
        <p>{hotel?.description}</p>
      </section>
      {
        localStorage.getItem('token')
        ? <FormReserve hotelId={hotel?.id} />
        : <h4>If you want to make a reservation, please <Link to='/login'>Login</Link></h4>
      }
      
      <OtherHotels 
        hotel={hotel}
      />
    </div>
  );
};

export default HotelsIdPage;
