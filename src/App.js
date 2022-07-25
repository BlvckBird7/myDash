import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chart from './components/Chart';
import Sign_Up from './components/Sign_Up';
import { AuthProvider } from './components/utility/auth';
import { RequiredAuth } from './components/utility/RequiredAuth';

function App() {
  return ( <AuthProvider>
    <div className="App">
<Router>
  <Routes>
    <Route exact path="/" element={<Sign_Up />} />
    <Route path="/chart" element={<RequiredAuth><Chart /></RequiredAuth>} />
  </Routes>
  </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
