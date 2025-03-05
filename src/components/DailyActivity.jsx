import "./DailyActivity.css";
import useActivity from "../hooks/useActivity";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Text,
  ResponsiveContainer,
} from "recharts";

function DailyActivity() {
  const { data, error } = useActivity();

  if (!data && !error) {
    return (
      <div className="activity">
        <div className="loading">
          Chargement des données d'activité quotidienne...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="activity">
        <div className="error">
          Erreur pendant la récupération des données d'activité quotidienne
        </div>
      </div>
    );
  }

  const renderLegend = (props) => {
    const { payload } = props;

    const valueNameMap = {
      kilogram: "Poids (kg)",
      calories: "Calories brûlées (kCal)",
    };

    return (
      <div className="activity-legend">
        <h2>Activités quotidiennes</h2>
        <div className="legend-payload">
          {payload.map((entry, index) => (
            <div className="legend-entry" key={`item-${index}`}>
              <span className="dot" style={{ color: entry.color }}></span>
              {valueNameMap[entry.value]}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTooltip = (props) => {
    const { payload } = props;

    
    const valueNameMap = {
      kilogram: "kg",
      calories: "kCal",
    };
    
    return (
      <div className="activity-tooltip">
        <div className="tooltip-payload">
          {payload.map((entry, index) => (
            <div className="tooltip-entry" key={`item-${index}`}>
              {entry.value + valueNameMap[entry.name]}
            </div>
          ))}
        </div>
      </div>
    );
  };

  data.forEach((d, index) => (d.index = index + 1));

  return (
    <div className="activity">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart barGap="8" width={500} height={300} data={data}>
          <Legend verticalAlign="top" height={50} content={renderLegend} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Tooltip content={renderTooltip} />
          <YAxis
            stroke="#9B9EAC"
            yAxisId="0"
            axisLine={false}
            tickCount="3"
            tickSize="20"
            tickLine={false}
            datakey="kilogram"
            domain={["dataMin - 3", "auto"]}
            orientation="right"
          />
          <YAxis
            stroke="#9B9EAC"
            yAxisId="1"
            datakey="calories"
            domain={[0, "dataMax + 10"]}
            hide={true}
          />
          <XAxis
            stroke="#9B9EAC"
            dataKey="index"
            tickSize="20"
            tickLine={false}
            padding={{ left: -30, right: -52 }}
          />
          <Bar
            dataKey="kilogram"
            yAxisId="0"
            fill="#282D30"
            radius={[20, 20, 0, 0]}
            barSize="10"
          />
          <Bar
            dataKey="calories"
            yAxisId="1"
            fill="#E60000"
            radius={[20, 20, 0, 0]}
            barSize="10"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyActivity;
