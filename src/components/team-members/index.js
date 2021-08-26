import { teamMembersData } from "../../utils/data";
import ThreeDots from "../three-dots";
import "./styles.scss";
const TeamMembers = () => (
  <section id="team-members">
    <h2>Team Members</h2>
    {teamMembersData.map((member) => (
      <div className="team-member">
        <img src={member.avatar} alt="" />
        <div>
          <p className="name">{member.name}</p>
          <p className="title">{member.title}</p>
        </div>
      </div>
    ))}
    <ThreeDots />
  </section>
);

export default TeamMembers;
