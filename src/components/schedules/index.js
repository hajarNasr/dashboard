import {
  LineChart,
  Line,
  XAxis,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "../../utils/data";
import "./styles.scss";

const Schedules = () => (
  <section id="schedules">
    <Charts />
  </section>
);

const Charts = () => (
  <div>
    <h2>Schedules</h2>
    <div className="chart-wrapper">
      <h5>Daily Tasks Status</h5>
      <ResponsiveContainer width="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="name" stroke="#7e858e" />
          <Bar dataKey="pv" fill="#00E4DB" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="chart-wrapper">
      <h5>Daily Tasks by Month</h5>
      <ResponsiveContainer width="100%">
        <LineChart data={chartData}>
          <XAxis dataKey="name" stroke="#7e858e" />
          <Line type="monotone" dataKey="pv" stroke="#7D40FF" />
          <Line type="monotone" dataKey="uv" stroke="#01F1E3" />
          <Line type="monotone" dataKey="sd" stroke="#FFA63F" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default Schedules;
