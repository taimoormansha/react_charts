import './App.css';
import BarChart from './Charts/BarChart';
import LineGraph from './Charts/LineGraph';
import PieChart from './Charts/PieChart';

const App = () => {
  return (
    <div className="app">
      <h2>Charts</h2>

      <div className="wrapper">
        <BarChart />
        <LineGraph />
        <PieChart />
      </div>
    </div>
  );
}

export default App;
