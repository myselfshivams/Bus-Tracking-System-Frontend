import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cards.css';

const Cards = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showDriverLogin, setShowDriverLogin] = useState(false);
  const [showStudentLogin, setShowStudentLogin] = useState(false);
  const navigate = useNavigate();

  const handleAdminLoginClick = () => {
    setShowAdminLogin(true);
  };

  const handleDriverLoginClick = () => {
    setShowDriverLogin(true);
  };

  const handleStudentLoginClick = () => {
    setShowStudentLogin(true);
  };

  const handleCloseClick = () => {
    setShowAdminLogin(false);
    setShowDriverLogin(false);
    setShowStudentLogin(false);
  };

  const handleLoginSubmit = (event, userType) => {
    event.preventDefault();
    if (userType === 'admin') {
      navigate('/admin');
    } else if (userType === 'driver') {
      navigate('/driver');
    } else if (userType === 'student') {
      navigate('/student');
    }
  };

  return (
    <>
      <h1 className="cards-heading">Access Your Dedicated Spaces</h1>
      <div className="cards">
        <div className="card">
          <img className="card-image" src="/assets/admin-img.jpg" alt="Card Image" />
          <div className="card-content">
            <h2 className="card-heading">Admin Login</h2>
            <p className="card-subheading">Secure access for system administrators to manage and oversee critical functionalities.</p>
            <button className="card-button" onClick={handleAdminLoginClick}>Login</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src="/assets/student-img.svg" alt="Card Image" />
          <div className="card-content">
            <h2 className="card-heading">Driver Login</h2>
            <p className="card-subheading">Log in portal tailored for drivers, facilitating efficient navigation and task management.</p>
            <button className="card-button" onClick={handleDriverLoginClick}>Login</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src="/assets/driver-img.svg" alt="Card Image" />
          <div className="card-content">
            <h2 className="card-heading">Student Login</h2>
            <p className="card-subheading">Customized login interface designed to provide students with seamless access to Bus services.</p>
            <button className="card-button" onClick={handleStudentLoginClick}>Login</button>
          </div>
        </div>
      </div>

      {showAdminLogin && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Admin Login</h2>
            <form className='submit-form' onSubmit={(e) => handleLoginSubmit(e, 'admin')}>
              <label>
                Username:
              </label>
              <input type="text" name="username" />
              <label>
                Password:
              </label>
              <input type="password" name="password" />
              <button type="submit">Login</button>
            </form>
            <button className="close-button" onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      )}

      {showDriverLogin && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Driver Login</h2>
            <form className='submit-form' onSubmit={(e) => handleLoginSubmit(e, 'driver')}>
              <label>
                Username:
              </label>
              <input type="text" name="username" />
              <label>
                Password:
              </label>
              <input type="password" name="password" />
              <button type="submit">Login</button>
            </form>
            <button className="close-button" onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      )}

      {showStudentLogin && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Student Login</h2>
            <form className='submit-form' onSubmit={(e) => handleLoginSubmit(e, 'student')}>
              <label>
                Username:
              </label>
              <input type="text" name="username" />
              <label>
                Password:
              </label>
              <input type="password" name="password" />
              <button type="submit">Login</button>
            </form>
            <button className="close-button" onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
