import './style/UserLogged.css'

const UserLogged = ({ setUser, user }) => {

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser()
  }

  return (
    <div className="content__register">
      <article className="register__form">
        <header>
          <img className="image__userLo"
            src={
              user.gender === "female"
                ? "./avatar_woman.png"
                : "./avatar_man.png"
            }
            alt=""
          />
        </header>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <button className="register__btn" onClick={handleLogout}>Logout</button>
      </article>
    </div>
  );
};

export default UserLogged;
