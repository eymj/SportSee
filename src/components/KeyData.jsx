import "./KeyData.css";
import useKeyData from "../hooks/useKeyData";
import DataCard from "./DataCard";
import caloriesIcon from '../assets/caloriesIcon.png'
import proteinIcon from '../assets/proteinIcon.png'
import carbsIcon from '../assets/carbsIcon.png'
import lipidIcon from '../assets/lipidIcon.png'

function UserInfos() {
  const { data } = useKeyData()

  const calories = data ? new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(data.calorieCount) + 'kCal' : null
  const protein = data ? data.proteinCount + 'g' : null
  const carbohydrate = data ? data.carbohydrateCount + 'g' : null
  const lipid = data ? data.lipidCount + 'g' : null

  return (
    <div className="key-data">
      <DataCard icon={caloriesIcon} title="Calories" value={calories} />
      <DataCard icon={proteinIcon} title="Proteines" value={protein} />
      <DataCard icon={carbsIcon} title="Glucides" value={carbohydrate} />
      <DataCard icon={lipidIcon} title="Lipides" value={lipid} />
    </div>
  );
}

export default UserInfos;
