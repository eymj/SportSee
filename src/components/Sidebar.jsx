import './Sidebar.css'
import meditation from '../assets/meditation.png'
import swimming from '../assets/swimming.png'
import cycling from '../assets/cycling.png'
import workout from '../assets/workout.png'


function Sidebar() {

    return (
      <div className="sidebar">
        <div className="activities">
            <img src={meditation} alt="Méditation" />
            <img src={swimming} alt="Natation" />
            <img src={cycling} alt="Cyclisme" />
            <img src={workout} alt="Musculation" />
        </div>
        <div className="copyright">
            <span>Copyright, SportSee 2020</span>
        </div>
      </div>
    )
  }
  
  export default Sidebar
  