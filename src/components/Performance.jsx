import "./Performance.css";
import usePerformance from "../hooks/usePerformance";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  RadialBarChart,
  RadialBar,
  Tooltip,
  Legend,
  Text,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

function Performance() {
  const { data, error } = usePerformance();

  if (!data && !error) {
    return (
      <div className="performance">
        <div className="loading">
          Chargement des indicateurs de performance...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="performance">
        <div className="error">
          Erreur de chargement des indicateurs de performance
        </div>
      </div>
    );
  }

  const nameMap = {
    intensity: "Intensité",
    speed: "Vitesse",
    strength: "Force",
    endurance: "Endurance",
    energy: "Énergie",
    cardio: "Cardio",
  };

  const newData = [];
  data.forEach((v) => {
    const k = nameMap[v.kind];
    newData.push({
      value: v.value,
      kind: k,
    });
  });

  return (
    <div className="performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={newData} height={200} outerRadius={90} width={290}>
          <PolarGrid radialLines={false} stroke="#FFFFFF"/>
          <PolarAngleAxis tickSize='15' tick={{ fill: "white", fontSize: 12 }} axisLine={false} tickLine={false} stroke="#FFFFFF" dataKey="kind" />
          <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} name="18" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;
