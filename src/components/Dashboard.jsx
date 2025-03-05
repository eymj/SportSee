import "./Dashboard.css";
import UserInfos from "./UserInfos";
import KeyData from "./KeyData";
import DailyActivity from "./DailyActivity";
import GoalProgress from "./GoalProgress";
import Performance from "./Performance";
import AverageSessions from "./AverageSessions";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-wrapper">
        <UserInfos />
        <KeyData />
        <DailyActivity />
        <GoalProgress />
        <Performance />
        <AverageSessions />
      </div>
    </div>
  );
}

export default Dashboard;
