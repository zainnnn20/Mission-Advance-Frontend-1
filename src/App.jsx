import React, { useState, useEffect, useCallback } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Beranda from "./pages/Beranda";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import { getAllCourses } from "./services/courseAPI.js";

const LOCAL_STORAGE_KEY_USER = "currentUser";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [pageHistory, setPageHistory] = useState(["login"]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

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
    const savedUser = localStorage.getItem(LOCAL_STORAGE_KEY_USER);
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setCurrentUser(userData);
      setPageHistory(["beranda"]);
      setCurrentPage("beranda");
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(LOCAL_STORAGE_KEY_USER, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY_USER);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && currentPage !== "login" && currentPage !== "register") {
      fetchCourses();
    }
  }, [currentPage, currentUser, fetchCourses]);

  const handleNavigate = (page) => setCurrentPage(page);

  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData);
    setCurrentPage("beranda");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage("login");
  };

  useEffect(() => {
    const handleBrowserBack = () => {
      if (
        currentPage === "beranda" ||
        currentPage === "admin" ||
        currentPage === "profile"
      ) {
        handleLogout();
      }
    };
    window.addEventListener("popstate", handleBrowserBack);
    return () => {
      window.removeEventListener("popstate", handleBrowserBack);
    };
  }, [currentPage, handleLogout]);

  const renderPage = () => {
    if (!currentUser && currentPage !== "register" && currentPage !== "login") {
      return (
        <Login
          onNavigate={handleNavigate}
          onLoginSuccess={handleLoginSuccess}
        />
      );
    }

    switch (currentPage) {
      case "login":
        return (
          <Login
            onNavigate={handleNavigate}
            onLoginSuccess={handleLoginSuccess}
          />
        );
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
            onLogout={handleLogout}
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
