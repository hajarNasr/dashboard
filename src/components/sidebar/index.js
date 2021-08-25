import { useState } from "react";
import {
  AVATAR_ICO,
  BARS_ICO,
  CALENDER_ICO,
  COGS_ICO,
  CUBE_ICO,
  FACE_1,
  HOME_ICO,
  POWER_ICO,
  TASK_ICO,
} from "../../utils/resources";
import "./styles.scss";

const SideBar = () => {
  const [isSidebarTranformed, setIsSidebarTransformed] = useState(true);
  const handleToggleSidebar = () => {
    setIsSidebarTransformed(!isSidebarTranformed);
  };

  return (
    <section
      className="side-bar"
      style={{
        transform: isSidebarTranformed ? "translateX(-100%)" : "translateX(0)",
      }}
    >
      <div>
        <img src={CUBE_ICO} alt="" />
      </div>
      <nav>
        {icons.map((icon) => (
          <div key={icon.alt}>
            <img
              src={icon.src}
              aria-label={icons.alt}
              alt={`${icons.alt} icon`}
            />
          </div>
        ))}
      </nav>
      <div>
        <img src={FACE_1} alt="" />
      </div>
      <button id="sidebar-label" onClick={handleToggleSidebar}>
        <img src={BARS_ICO} alt="menu" />
      </button>
    </section>
  );
};

const icons = [
  { src: HOME_ICO, alt: "Home" },
  { src: CALENDER_ICO, alt: "Calender" },
  { src: AVATAR_ICO, alt: "Profile" },
  { src: COGS_ICO, alt: "settings" },
  { src: TASK_ICO, alt: "Tasks" },
  { src: POWER_ICO, alt: "Log out" },
];

export default SideBar;
