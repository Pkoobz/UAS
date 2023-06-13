import React from 'react';
import './styles.css';

function Login() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark shadow-5-strong navbar-blur justify-content-start">
        <div>
          <div>
            <ul>
              <li>
                <h1>TravelIndo</h1>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="page">
        <div className="page-1">
          <form>
            <h1>Hello Travelers!</h1>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="UserName" required />
              <label htmlFor="">UserName</label>
            </div>
            <button>Continue</button>
          </form>
        </div>
        <div className="page-2">
          <h1>Discover Your Next Destination</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
