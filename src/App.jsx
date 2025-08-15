import React, {
  useState
} from 'react';
import Login from './Login';
import Register from './Register';
import Beranda from './Beranda';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  // Fungsi untuk pindah ke Beranda
  const handleLoginSuccess = () => {
    setCurrentPage('beranda');
  };

  // Fungsi untuk kembali ke Login
  const handleLogout = () => {
    setCurrentPage('login');
  };


  if (currentPage === 'login') {

    return <Login onNavigate = {
      handleNavigate
    }
    onLoginSuccess = {
      handleLoginSuccess
    }
    />;
  } else if (currentPage === 'register') {
    return <Register onNavigate = {
      handleNavigate
    }
    />;
  } else {

    return <Beranda onLogout = {
      handleLogout
    }
    />;
  }
}

export default App;