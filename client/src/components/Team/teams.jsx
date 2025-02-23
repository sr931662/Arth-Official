import React from "react";
import styles from "./teams.module.css";
import shivam from "../../assets/Teams/Shivam.jpg"

const teamMembers = [
  {
    name: "Mr. Shashwat Kashyap",
    role: "Co-Founder & CEO",
    image: "/images/shivam.jpg",
    description: "Visionary leader driving innovation and strategy.",
  },
  {
    name: "Mr. Shivam Singh",
    role: "Co-Founder & CTO",
    image: shivam,
    description: "Expert in technical architecture and management.",
  },
  {
    name: "Ms. Mansi Gupta",
    role: "Co-Founder",
    image: "/images/junior.jpg",
    description: "Expert in operations, legal, and company structure.",
  }

];

const Teams = () => {
  return (
    <div className={styles.teamSection}>
      <h2 className={styles.heading}>Meet Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamCard}>
            <img src={member.image} alt={member.name} className={styles.image} />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.description}>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
