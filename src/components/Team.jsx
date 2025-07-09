import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { name: "Dipesh Karki", role: "Finance Manager" },
    { name: "Prayusha Shrestha", role: "HR Officer" },
    { name: "Manta Lama", role: "Digital Marketing Co-ordinator" },
    { name: "Dipak B K", role: "Motion Graphics Designer & Video Editor" },
    { name: "Aman Shrestha", role: "Sr. Graphic Designer" },
    { name: "Rajan Sharma", role: "Marketing Officer" },
    { name: "Prajwol KC", role: "Software Engineer" },
  ];

  
  const getDescriptionByRole = (role) => {
    switch (role) {
      case "Finance Manager":
        return "Oversees the company’s financial operations, managing budgets and driving profitable growth.";
      case "HR Officer":
        return "Responsible for recruiting, employee relations, and ensuring a productive work environment.";
      case "Digital Marketing Co-ordinator":
        return "Plans and executes digital campaigns to increase brand awareness and customer engagement.";
      case "Motion Graphics Designer & Video Editor":
        return "Creates compelling visuals and edits videos to enhance the company’s marketing materials.";
      case "Sr. Graphic Designer":
        return "Leads graphic design projects with a focus on brand consistency and creativity.";
      case "Marketing Officer":
        return "Implements marketing strategies to promote products and expand the company’s market reach.";
      case "Software Engineer":
        return "Develops and maintains software solutions, ensuring efficient and scalable code.";
      default:
        return "A valuable team member contributing to the company’s success.";
    }
  };

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="team-header">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Meet the talented individuals who drive innovation at our company.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className={`team-card hover-color-${index + 1}`}>
              <div className="avatar-icon">
                <svg
                  className="avatar-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"
                  />
                </svg>
              </div>

              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{getDescriptionByRole(member.role)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
