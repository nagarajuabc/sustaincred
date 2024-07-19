import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/login';
import RegistrationForm from './Components/register';
import UploadComponent from './Components/home';

function App() {
  return (
    <>

      <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/home" element={<UploadComponent />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
