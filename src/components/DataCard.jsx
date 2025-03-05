import './DataCard.css'


function DataCard({ icon, value, title }) {

    return (
      <div className="card">
        <img src={icon} alt="" />
        <div className="card-data">
            <div className="data-value">{value ?? "NO DATA"}</div>
            <div className="data-label">{title}</div>
        </div>
      </div>
    )
  }
  
  export default DataCard
  