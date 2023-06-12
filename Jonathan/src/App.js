import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UsernameContext from "./UsernameContext";

export default function App() {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setErrorMessage("Maaf, tidak ada username");
    } else {
      // Lakukan logika lainnya jika input username telah diisi
      console.log("Username:", username);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setErrorMessage(""); // Menghapus pesan error saat pengguna mulai mengetik
  };

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      <div className="App">
        <div
          className="App"
          style={{
            backgroundImage: `url("https://i.ibb.co/0ffV60g/login.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <div className="container-fluid">
                <a
                  className="navbar-brand"
                  href="#"
                  style={{ fontSize: "30px" }}
                >
                  Travelindo
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsibleNavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="collapsibleNavbar"
                ></div>
              </div>
            </nav>
            <div className="page">
              <div className="page-1">
                <UsernameContext.Consumer>
                  {(usernameContext) => (
                    <form onSubmit={handleSubmit}>
                      <h1 style={{ color: "white" }}>Hello Travelers!</h1>
                      <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input
                          type="text"
                          value={usernameContext.username}
                          onChange={handleUsernameChange}
                          required
                        />
                        <label htmlFor="">Username</label>
                      </div>
                      {errorMessage && <p>{errorMessage}</p>}
                      <button>
                        <NavLink
                          to={{
                            pathname: "/map",
                            state: { username: usernameContext.username }
                          }}
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          Continue
                        </NavLink>
                      </button>
                    </form>
                  )}
                </UsernameContext.Consumer>
              </div>
              <div className="page-2">
                <h1 style={{ color: "white" }}>
                  Discover Your Next Destination
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UsernameContext.Provider>
  );
}
