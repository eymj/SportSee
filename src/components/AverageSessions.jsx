import "./AverageSessions.css";
import useAverageSessions from "../hooks/useAverageSessions";
import {
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const CustomCursor = (props) => {
  const { points, width, height } = props;
  const { x, y } = points[0];
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.3)"
      stroke="#E60000"
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
};

function AverageSessions() {
  const { data, error } = useAverageSessions();

  if (!data && !error) {
    return (
      <div className="average-sessions">
        <div className="loading">Chargement des sessions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="average-sessions">
        <div className="error">Erreur de chargement des sessions</div>
      </div>
    );
  }

  const dayMap = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  data.forEach((s) => (s.label = dayMap[s.day]));
  console.log(data);

  return (
    <div className="average-sessions">
      <div className="sessions-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            margin={{ top: -15, right: 0, left: 0, bottom: -40 }}
            data={data}
            height={290}
            width={290}
          >
            <XAxis
              padding={{ left: 20, right: 20 }}
              stroke="#ffffff"
              axisLine={false}
              dataKey="label"
              tickLine={false}
              tickSize="-50"
            />
            <YAxis domain={[-30, 90]} hide={true} />
            <Tooltip content={() => <></>} cursor={<CustomCursor />} />
            <Line
              strokeWidth="2"
              dataKey="sessionLength"
              dot={false}
              stroke="#ffffff"
              type="monotone"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="sessions-title">Durée moyenne des sessions</div>
    </div>
  );
}

export default AverageSessions;
