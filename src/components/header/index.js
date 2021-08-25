import { BELL_ICO, FLAG_ICO, SEARCH_ICO } from "../../utils/resources";
import "./styles.scss";

const Header = () => (
  <header>
    <form className="search-form">
      <div>
        <img src={SEARCH_ICO} alt="" />
      </div>
      <input type="text" placeholder="Search" />
    </form>
    <div>
      <div className="notifications-wrapper">
        <img src={FLAG_ICO} alt="" />
        <span>England</span>
      </div>
      <div>
        <img src={BELL_ICO} alt="notifications" />
      </div>
    </div>
  </header>
);

export default Header;
