import React, { useState, useEffect, useCallback } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Beranda from "./pages/Beranda";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import { getAllCourses } from "./services/courseAPI.js";

const LOCAL_STORAGE_KEY_USER = "currentUser";

function App() {
  const [currentPage, setCurrentPage] = useState("beranda");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getAllCourses();
      setCourses(response);
    } catch (err) {
      setError(err);
      console.error("Gagal mengambil data kursus:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (currentPage !== "login" && currentPage !== "register") {
      fetchCourses();
    }
  }, [currentPage, fetchCourses]);

  useEffect(() => {
    const simulatedUser = { name: "A'lay", email: "zelensky@gmail.com" };
    localStorage.setItem(LOCAL_STORAGE_KEY_USER, JSON.stringify(simulatedUser));
  }, []);

  const handleNavigate = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login onNavigate={handleNavigate} />;
      case "register":
        return <Register onNavigate={handleNavigate} />;
      case "profile":
        return <Profile onNavigate={handleNavigate} />;
      case "admin":
        return (
          <Admin
            onNavigate={handleNavigate}
            courses={courses}
            fetchCourses={fetchCourses}
            loading={loading}
            error={error}
          />
        );
      case "beranda":
      default:
        return (
          <Beranda
            onNavigate={handleNavigate}
            courses={courses}
            loading={loading}
            error={error}
          />
        );
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
