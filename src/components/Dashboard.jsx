import "./Dashboard.css";
import UserInfos from "./UserInfos";
import KeyData from "./KeyData";
import DailyActivity from "./DailyActivity";
import GoalProgress from "./GoalProgress";
import Performance from "./Performance";
import AverageSessions from "./AverageSessions";
//import logo from '../assets/logo.png'

function Dashboard() {
  return (
    <div className="dashboard">
      <UserInfos />
      <KeyData />
      <DailyActivity />
      <GoalProgress />
      <Performance />
      <AverageSessions />
    </div>
  );
}

export default Dashboard;

/*



*/