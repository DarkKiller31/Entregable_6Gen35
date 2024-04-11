import { useForm } from "react-hook-form"
import UseAuth from "../hooks/UseAuth"
import UserLogged from "../components/LoginPage/UserLogged"
import { useState } from "react";
import { PiUserCircleFill } from "react-icons/pi";


const LoginPage = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const { register, handleSubmit, reset } = useForm()

  const { loginUser } = UseAuth()

  const submit = data => {
    loginUser(data)
    reset({
      email: '',
      password: ''
    })
  }
  if (localStorage.getItem('token')) {
    return <UserLogged setUser={setUser} user={user}/>
  }

  return (
    <div className="content__register">
      <form className="register__form" onSubmit={handleSubmit(submit)}>
      <PiUserCircleFill className="icon__register" />
        <h2 className="register__title">Login</h2>
        <label className="register__label">
          <span className="form__item">Email</span>
          <input className="form__value" {...register('email')} type="email" placeholder="example@mail.com"/>
        </label>
        <label className="register__label">
          <span className="form__item">Password</span>
          <input className="form__value" {...register('password')} type="password" placeholder="********"/>
        </label>
        <button className="register__btn">Submit</button>
      </form>
    </div>
  )
}

export default LoginPage
