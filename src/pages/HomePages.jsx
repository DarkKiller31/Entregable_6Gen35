import "./styles/HomePages.css";
import { useRef, useState } from "react";
import HotelCard from "../components/HomePage/HotelCard";
import { useSelector } from "react-redux";
import CategoryFilter from "../components/HomePage/CategoryFilter";
import PriceFilter from "../components/HomePage/PriceFilter";
import { BsSearch } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";

const HomePages = () => {
  const [inputName, setInputName] = useState("");
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const [openFilter, setOpenFilter] = useState(false)


  const hotels = useSelector((states) => states.hotels);

  const inputValue = useRef();

  const handleChange = () => {
    setInputName(inputValue.current.value);
  };

  console.log(hotels);

  const cbfilter = (hotelInfo) => {
    // Filter by name
    const filterName = hotelInfo.name
      .toLowerCase()
      .includes(inputName.toLowerCase().trim());
    // Filter by price
    const price = Number(hotelInfo.price)
    const filterPrice = price >= fromTo.from && price <= fromTo.to

    return filterName && filterPrice;
  };

  const handleOpen = () => {
    setOpenFilter(true)
    if(openFilter){
      setOpenFilter(false)
    }
  }

  return (
    <div className="home__content">
      <div className="searchAndFilter">
        <div className="search__cities">
          <BsSearch className="search__icon" />
          <input className="search__input"
            onChange={handleChange}
            value={inputName}
            ref={inputValue}
            type="text"
            placeholder="Search.."
          />
        </div>
        <IoFilter className="filters" onClick={handleOpen}/>
      </div>
      <aside className={`home__filters ${openFilter ?'filter__open' : ''}`}>
        <h2 className="home__title">Filters</h2>
        <PriceFilter 
          setFromTo={setFromTo} 
        />
        <CategoryFilter />
      </aside>
      <div className="home__cards">
        {hotels?.filter(cbfilter).map((hotelInfo) => (
          <HotelCard key={hotelInfo.id} hotel={hotelInfo} />
        ))}
      </div>
    </div>
  );
};

export default HomePages;
