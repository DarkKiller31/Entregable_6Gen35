import { useForm } from "react-hook-form"
import UseAuth from "../hooks/UseAuth"
import './styles/RegisterPages.css'
import { PiUserCircleFill } from "react-icons/pi";

const RegisterPages = () => {

  const { register, handleSubmit, reset } = useForm()

  const { registerUser } = UseAuth()

  const submit = data => {
    registerUser(data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'unknown'
    })
  }

  return (
    <div className="content__register">
      <form className="register__form" onSubmit={handleSubmit(submit)}>
        <PiUserCircleFill className="icon__register" />
        <h2 className="register__title">Register</h2>
        <label className="register__label">
          <span className="form__item">First Name</span>
          <input className="form__value" {...register('firstName')} type="text" placeholder="Your name..." />
        </label>
        <label className="register__label">
          <span className="form__item">Last Name</span>
          <input className="form__value" {...register('lastName')} type="text" placeholder="Your last name ..." />
        </label>
        <label className="register__label">
          <span className="form__item">Email</span>
          <input className="form__value" {...register('email')} type="email" placeholder="example@mail.com" />
        </label>
        <label className="register__label">
          <span className="form__item">Password</span>
          <input className="form__value" {...register('password')} type="password" placeholder="********"/>
        </label>
        <label className="register__label">
          <span className="form__item">Gender</span>
          <select className="form__value" {...register('gender')} >
            <option value='unknown' >Unknown</option>
            <option value='male' >Male</option>
            <option value='female' >Female</option>
            <option value='other' >I prefer don't say it</option>
          </select>
        </label>
        <button className="register__btn">Submit</button>
      </form>
    </div>
  )
}

export default RegisterPages
