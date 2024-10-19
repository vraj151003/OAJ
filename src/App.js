import logo from './logo.svg';
import './App.css';
import FormPageController from './Pages/FormPageController';
import SuccessPage from './Pages/SuccessPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Change here

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<FormPageController />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  </Router>
  );
}

export default App;
