import "./AboutContent.css";
import busImage from "/src/assets/teams/about/bus.png"; 
import tuneInImage from "/src/assets/teams/about/bus.png";

const AboutContent = () => {
  return (
    <>
    <div className="aboutcontainer">
      <h1 className="mainheading">ABOUT</h1>

      <div className="aboutsection">
        <div className="abouttext">
          <h2 className="cardheading">Introduction</h2>
          <p>
            In many educational institutions, managing transportation services
            efficiently poses a significant challenge. The lack of real-time
            tracking and effective management tools often leads to operational
            inefficiencies, safety concerns, and inconvenience for both students
            and administrative staff. To address these challenges, our
            comprehensive college bus tracking and management system is designed
            to streamline transportation services within educational
            institutions.
          </p>
        </div>
        <div className="about-image">
          <img src={busImage} alt="Bus Tracking" />
        </div>
      </div>

      <div className="aboutsection">
        <div className="about-image">
          <img src={tuneInImage} alt="Tune In" />
        </div>
        <div className="abouttext">
          <h2 className="cardheading">Objectives</h2>
          <p>
            Enhance Operational Efficiency: Improve the management of bus
            schedules and routes to ensure timely arrivals and departures.
            Ensure Student Safety: Provide real-time tracking to enhance the
            safety of students using the transportation services. Improve
            Communication: Facilitate timely notifications and alerts to keep
            students, parents, and staff informed about bus schedules and any
            changes.
          </p>
        </div>
      </div>

      <div className="aboutsection">
        <div className="abouttext">
          <h2 className="cardheading">Features</h2>
          <p>
            Real-Time Tracking: Track the exact location of buses in real-time.
            Data Analytics: Generate reports and insights for better decision
            making. Notifications and Alerts: Send timely notifications to users
            about bus schedules, delays, and changes. Secure Access: Ensure
            secure access to the system for all users.
          </p>
        </div>
        <div className="about-image">
          <img src={busImage} alt="Features" />
        </div>
      </div>

      <div className="aboutsection">
        <div className="about-image">
          <img src={tuneInImage} alt="Tune In" />
        </div>
        <div className="abouttext">
          <h2 className="cardheading">Conclusion</h2>
          <p>
            Our college bus tracking and management system aims to provide a
            seamless, efficient, and safe transportation experience for students
            and staff. By integrating advanced tracking and management features,
            we strive to address the current challenges and improve the overall
            efficiency of transportation services in educational institutions.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutContent;
