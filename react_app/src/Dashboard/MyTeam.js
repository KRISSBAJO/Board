import React, { useState } from 'react';
import './MyTeam.css'; // Your CSS file to style the components

const teamMembers = [
  { id: 1, name: 'Chris Bajo', role: 'Manager', contact: 'krissbajo@gmail.com', info: 'An Elegant engineer with vast knowledge of market and market trends', address: '1108 Berry Sreet, Nashville', phoneNumber: '1236776777' },
  { id: 2, name: 'Francis Duke', role: 'Director', contact: 'francis@gmail.com', info: 'An Elegant engineer with vast knowledge of market and market trends', address: '45, Ibadan west', phoneNumber: '1236776777'},
    { id: 3, name: 'Gerald E', role: 'Executive', contact: 'gerald@gmail.com', info: 'An Elegant engineer with vast knowledge of market and market trends', address: '13 Main Street, New York, United States - 10002', phoneNumber: '1236776777' },
  // ... Add more team members as needed
];

const TeamMember = ({ member, onMemberClick, isActive }) => (
  <div 
    className={`team-member ${isActive ? 'active' : ''}`} 
    onClick={() => onMemberClick(member)}
  >
    {member.name}
  </div>
);

const MemberDetails = ({ member }) => (
  <div className="member-details">
    <h2>{member.name}</h2>
    <p>{member.role}</p>
    <p>{member.contact}</p>
    <p>{member.info}</p>
    <p>{member.address}</p>
    <p>{member.phoneNumber}</p>
    
  </div>
);

const MyTeam = () => {
  const [activeMember, setActiveMember] = useState(null);

  const handleMemberClick = (member) => {
    setActiveMember(member);
  };

  return (
    <div className="my-team-container">
      <aside className="team-sidebar">
        {teamMembers.map(member => (
          <TeamMember 
            key={member.id} 
            member={member} 
            onMemberClick={handleMemberClick} 
            isActive={activeMember && activeMember.id === member.id}
          />
        ))}
      </aside>
      <main className="team-details-content">
        {activeMember ? <MemberDetails member={activeMember} /> : <p>Select a team member to view their details.</p>}
      </main>
    </div>
  );
};

export default MyTeam;
