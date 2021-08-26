import { ARROW_NEXT_ICO } from "../../utils/resources";
import "./styles.scss";
const Today = () => (
  <section id="today">
    <h3>Today</h3>
    {["1st", "2nd"].map((el) => (
      <div key={el} className="today-item">
        <div id="today-date">
          <span>23</span>
          <span>Mon</span>
        </div>
        <div id="app-name">
          <span>App Name Here</span>
          <span>{el} Place</span>
        </div>
        <img src={ARROW_NEXT_ICO} alt="next" />
      </div>
    ))}
  </section>
);

export default Today;
