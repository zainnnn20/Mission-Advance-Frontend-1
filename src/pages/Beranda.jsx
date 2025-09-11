import React, { useState, useEffect } from "react";
import "../assets/style/Beranda.css";
import Footer from "../components/organisems/Footer";
import Card from "../components/molecules/Card";
import logoVideobelajar from "../assets/image/Logo.png";
import heroBackgroundImage from "../assets/image/H1.jpg";
import ctaBackgroundImage from "../assets/image/H2.jpg";
import userProfileImageDesktop from "../assets/image/user.png";
import userProfileImageMobile from "../assets/image/Vector.png";

function Beranda({ onNavigate, courses, loading, error }) {
  const [activeFilter, setActiveFilter] = useState("Semua Kelas");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const filters = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];
  
  const profileImageToShow =
    currentUser?.profilePicture || userProfileImageDesktop;
  const profileImageMobileToShow =
    currentUser?.profilePicture || userProfileImageMobile;

  return (
    <div className="beranda-page">
      <header className="beranda-header">
        <div className="beranda-container header-content">
          <img
            src={logoVideobelajar}
            alt="Logo Videobelajar"
            className="header-logo"
          />
          <div className="header-right-nav">
            <p
              className="header-category-text"
              onClick={() => onNavigate("admin")}
            >
              Admin
            </p>
            <p className="header-category-text">Kategori</p>
            <div
              className="user-profile"
              onClick={() => onNavigate("profile")}
              title="Edit Profil"
            >
              {currentUser && currentUser.name ? (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div className="user-info">
                    <span className="user-greeting">
                      Hello, {currentUser.name}
                    </span>
                    <span className="user-email">{currentUser.email}</span>
                  </div>
                  <img
                    src={profileImageToShow}
                    alt="User Avatar"
                    className="profile-desktop"
                  />
                  <img
                    src={profileImageMobileToShow}
                    alt="User Avatar"
                    className="profile-mobile"
                  />
                </div>
              ) : (
                <>
                  <img
                    src={userProfileImageDesktop}
                    alt="User Avatar"
                    className="profile-desktop"
                  />
                  <img
                    src={userProfileImageMobile}
                    alt="User Avatar"
                    className="profile-mobile"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <section className="hero-section-wrapper">
        <div
          className="hero-section"
          style={{ backgroundImage: `url(${heroBackgroundImage})` }}
        >
          <div className="hero-content">
            <h1>
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
              Interaktif!
            </h1>
            <p>
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi.
            </p>
            <button className="hero-button">Temukan Video Course!</button>
          </div>
        </div>
      </section>
      <main className="beranda-container main-content">
        <h2 className="section-title">Koleksi Video Pembelajaran Unggulan</h2>
        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="course-grid">
          {loading && <p>.Loading courses...</p>}
          {error && (
            <p style={{ color: "red" }}>Gagal memuat kursus: {error.message}</p>
          )}
          {!loading && !error && courses && courses.length > 0
            ? courses.map((course, index) => (
                <Card key={course.id || index} course={course} />
              ))
            : !loading && !error && <p>Belum ada kursus yang tersedia.</p>}
        </div>
      </main>
      <section className="cta-section-wrapper">
        <div
          className="cta-section"
          style={{ backgroundImage: `url(${ctaBackgroundImage})` }}
        >
          <div className="cta-content">
            <h2>Mau Belajar Lebih Banyak?</h2>
            <p>
              Daftarkan dirimu untuk mendapatkan informasi terbaru dari kami.
            </p>
            <div className="cta-form">
              <input type="email" placeholder="Masukkan Emailmu" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Beranda;
