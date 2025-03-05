import "./GoalProgress.css";
import useScore from "../hooks/useScore";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

function GoalProgress() {
  const { data, error } = useScore();

  if (!data && !error) {
    return (
      <div className="goal-progress">
        <div className="loading">Chargement des objectifs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="goal-progress">
        <div className="error">Erreur</div>
      </div>
    );
  }

  const d = [
    {
      fill: "#FF0000",
      value: Object.values({ data })[0],
    },
    {
      fill: "transparent",
      value: 1.0,
    },
  ];

  return (
    <div className="goal-progress">
      <div className="goal-chart">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            barSize={15}
            data={d}
            endAngle={450}
            height={250}
            innerRadius="100%"
            startAngle={90}
            width={250}
          >
            <RadialBar cornerRadius="20" dataKey="value" />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="goal-text">
        <div className="goal-value">{Object.values({ data })[0] * 100}%</div>
        <div className="goal-label">de votre objectif</div>
      </div>
      <div className="goal-title">Score</div>
    </div>
  );
}

export default GoalProgress;
