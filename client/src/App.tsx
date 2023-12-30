import { BrowserRouter as Router } from 'react-router-dom';
import {Routes} from "./routes";
import {TopBar} from "./components/topBar/TopBar";

function App() {
  return (
    <div>
      <Router>
        <TopBar/>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
