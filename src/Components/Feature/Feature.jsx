import './Feature.css';

const Feature = () => {
  return (
    <div id='feature-content'>
      <div className="header">
        <h1>Powered by Technology</h1>
      </div>
      <div className="row1-container">
        <div className="box box-down cyan">
          <h2>Real-Time Location Tracking</h2>
          <p>Track the live location of the school bus in real-time, ensuring parents and school administrators are always informed.</p>
          <img src="src/assets/realtime.svg" alt="Supervisor Icon" />
        </div>
        <div className="box red">
          <h2>Geofencing Alerts</h2>
          <p>Receive instant alerts when the bus enters or exits predefined virtual boundaries, providing added safety and security for students.</p>
          <img src="src/assets/geofencing.png" alt="Team Builder Icon" />
        </div>
        <div className="box box-down blue">
          <h2>Estimated Time of Arrival</h2>
          <p>Get accurate ETA updates, allowing parents to plan their schedules effectively and ensure students are ready for pickup/drop-off.</p>
          <img src="src/assets/estimated.png" alt="Calculator Icon" />
        </div>
      </div>
      <div className="row2-container">
        <div className="box orange">
          <h2>Customizable Notifications</h2>
          <p>Tailor notifications based on preferences, such as arrival at designated stops or unexpected delays, empowering parents with personalized updates for peace of mind.</p>
          <img src="src/assets/customizable.svg" alt="Karma Icon" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
