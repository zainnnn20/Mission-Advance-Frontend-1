import React, {
  useState,
  useEffect
} from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Beranda from './pages/Beranda';
import Admin from './pages/Admin';
import Profile from './pages/Profile';

const LOCAL_STORAGE_KEY = 'savedCourses';
const LOCAL_STORAGE_KEY_USER = 'currentUser';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [courses, setCourses] = useState(() => {
    try {
      const savedCourses = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedCourses) {
        return JSON.parse(savedCourses);
      } else {
        return initialCourses;
      }
    } catch (error) {
      console.error("Gagal memuat data", error);
      return initialCourses;
    }
  });

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem(LOCAL_STORAGE_KEY_USER);
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem(LOCAL_STORAGE_KEY_USER, JSON.stringify(currentUser));
      }
    } catch (error) {
      console.error("Gagal menyimpan data pengguna ke localStorage", error);
    }
  }, [currentUser]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(courses));
    } catch (error) {
      console.error("Gagal menyimpan data ke localStorage", error);
    }
  }, [courses]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };
  const handleLoginSuccess = () => {
    setCurrentPage('beranda');
  };
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
  }
  if (currentPage === 'register') {
    return <Register onNavigate = {
      handleNavigate
    }
    />;
  }

  if (currentPage === 'profile') {
    return <Profile onNavigate = {
      handleNavigate
    }
    />;
  }

  if (currentPage === 'admin') {
    return ( <
      Admin onNavigate = {
        handleNavigate
      }
      courses = {
        courses
      }
      setCourses = {
        setCourses
      }
      />
    );
  }
  if (currentPage === 'beranda') {
    return ( <
      Beranda onLogout = {
        handleLogout
      }
      onNavigate = {
        handleNavigate
      }
      courses = {
        courses
      }
      />
    );
  }
}

export default App;