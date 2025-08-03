import './App.css';
import HikeDetails from './components/HikeDetails';
import { thompsonPeakData } from './data/thompsonPeakData';

function App() {
  return <HikeDetails hikeData={thompsonPeakData} />;
}

export default App;