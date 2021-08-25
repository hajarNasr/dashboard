import { dashboardTopViewMembers } from "../../utils/data";
import { FACE_6, SLACK_ICO } from "../../utils/resources";
import TeamMembers from "../team-members";
import ThreeDots from "../three-dots";
import "./styles.scss";

const Dashboard = () => (
  <section id="dashboard">
    <TopView />
    <TopMemeber />
    <TeamMembers />
  </section>
);

const TopView = () => (
  <div id="top-view">
    <h1>My Dashboard</h1>
    <div id="top-view_members">
      {dashboardTopViewMembers.map((member) => (
        <div key={member.title}>
          <div style={{ position: "relative" }}>
            <img src={member.avatar} alt="" className="avatar" />
            <img src={SLACK_ICO} alt="slack" id="slack" />
          </div>
          <p className="name">{member.name}</p>
          <p className="title">{member.title}</p>
          <button>Send Message</button>
        </div>
      ))}
    </div>
  </div>
);

const TopMemeber = () => (
  <div id="top-member">
    <div>
      <div>
        <img src={FACE_6} alt="" className="avatar" />
      </div>
      <p className="name">Megan</p>
      <p className="title">Front-end Developer</p>
      <ul>
        <li>
          <span>23</span>
          <span>Clients</span>
        </li>
        <li>
          <span>#1</span>
          <span>Reputation</span>
        </li>
        <li>
          <span>17</span>
          <span>Members</span>
        </li>
      </ul>
    </div>
    <ThreeDots />
  </div>
);

export default Dashboard;
