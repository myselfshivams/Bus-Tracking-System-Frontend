import './Cards.css';

const Cards = () => {
  return (
    <>
    <h1 className="cards-heading">Access Your Dedicated Spaces</h1>
    <div className="cards">
      <div className="card">
        <img className="card-image" src="./public/assets/admin-img.jpg" alt="Card Image" />
        <div className="card-content">
          <h2 className="card-heading">Admin Login</h2>
          <p className="card-subheading"> Secure access for system administrators to manage and oversee critical functionalities.</p>
          <button className="card-button">Login</button>
        </div>
      </div>
      <div className="card">
        <img className="card-image" src="./public/assets/student-img.svg" alt="Card Image" />
        <div className="card-content">
          <h2 className="card-heading">Driver Login</h2>
          <p className="card-subheading">Log in portal tailored for drivers, facilitating efficient navigation and task management.</p>
          <button className="card-button">Login</button>
        </div>
      </div>
      <div className="card">
        <img className="card-image" src="./public/assets/driver-img.svg" alt="Card Image" />
        <div className="card-content">
          <h2 className="card-heading">Student Login</h2>
          <p className="card-subheading">Customized login interface designed to provide students with seamless access to Bus services.</p>
          <button className="card-button">Login</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cards;
