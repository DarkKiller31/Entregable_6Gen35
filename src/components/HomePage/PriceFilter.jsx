import { useForm } from "react-hook-form";
import './styles/PriceFilter.css'

const PriceFilter = ({ setFromTo }) => {

  const { handleSubmit, register, reset } = useForm()

  const submit = data => {

    const from = data.from
    const to = data.to

    setFromTo({
      from: from === '' ? 0 : +from,
      to: to === '' ? Infinity : Number(to)
  })
  }

  return (
    <section className="price__container">
      <h3 className="price__title">Price</h3>
      <form className="price__form" onSubmit={handleSubmit(submit)}>
        <label className="price__label">
          <span className="price__item">From</span>
          <input className="price__value" {...register('from')} type="number" />
        </label>
        <label className="price__label">
          <span className="price__item">To</span>
          <input className="price__value" {...register('to')} type="number" />
        </label>
        <button className="card__btn price__btn">Apply</button>
      </form>
    </section>
  );
};

export default PriceFilter;
