import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Sidebar } from './static';
import { HomePage, FloatingUi } from './pages';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/floating-ui" element={<FloatingUi />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
