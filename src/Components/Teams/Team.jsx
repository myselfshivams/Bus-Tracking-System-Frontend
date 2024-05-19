import "./Team.css";

const teamMembers = [
  {
    name: "   Shivam",
    role: "Cloud & Back-End Dev",
    imageUrl: "/src/assets/teams/shivam.png",
  },
  {
    name: "Sanskar Soni",
    role: "UI/UX Designer",
    imageUrl: "/src/assets/teams/sans.png",
  },
  {
    name: "  Ritik Gupta",
    role: "Front-End Dev",
    imageUrl: "/src/assets/teams/ritik.png",
  },
  {
    name: "Saksham Gupta",
    role: "Android Dev",
    imageUrl: "/src/assets/teams/saksham.png",
  },
  {
    name: "Divyanshi Sengar",
    role: "Content Writer",
    imageUrl: '/src/assets/teams/divyanshi.png',
  },
];

function Team() {
  return (
  <>
    <div className="team-container">
      <h1 className="team-title">Our Team:-</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="circle-image">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="profile-pic"
              />
            </div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">({member.role})</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Team;
