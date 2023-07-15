import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';

function ClimateStats() {
  const {humText, tempText } = useClimate()

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {tempText}°F
      </div>
      <div className="humidity">
        Humidity {humText}%
      </div>
    </div>
  )
}

export default ClimateStats;
