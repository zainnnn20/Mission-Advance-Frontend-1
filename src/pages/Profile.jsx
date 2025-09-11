import React, { useState, useEffect } from "react";
import "../assets/style/Profile.css";
import Footer from "../components/organisems/Footer";
import logoVideobelajar from "../assets/image/Logo.png";
import userProfileImageDesktop from "../assets/image/user.png";
import userProfileImageMobile from "../assets/image/Vector.png";

const ProfileHeader = ({ onNavigate, currentUser }) => {
  const profileImageToShow =
    currentUser?.profilePicture || userProfileImageDesktop;
  const profileImageMobileToShow =
    currentUser?.profilePicture || userProfileImageMobile;

  return (
    <header className="beranda-header">
      <div className="beranda-container header-content">
        <img
          src={logoVideobelajar}
          alt="Logo Videobelajar"
          className="header-logo"
          onClick={() => onNavigate("beranda")}
          style={{ cursor: "pointer" }}
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
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              {currentUser && currentUser.name ? (
                <div className="user-info">
                  <span className="user-greeting">
                    Hello, {currentUser.name}
                  </span>
                  <span className="user-email">{currentUser.email}</span>
                </div>
              ) : null}
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
          </div>
        </div>
      </div>
    </header>
  );
};

function Profile({ onNavigate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setCurrentUser(userData);
      setName(userData.name || "");
      setEmail(userData.email || "");
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const currentUserData =
      JSON.parse(localStorage.getItem("currentUser")) || {};
    const updatedUserData = { ...currentUserData, name, email };
    localStorage.setItem("currentUser", JSON.stringify(updatedUserData));
    alert("Profil berhasil diperbarui!");
    onNavigate("beranda");
  };

  return (
    <div className="page-container">
      <ProfileHeader onNavigate={onNavigate} currentUser={currentUser} />
      <div className="profile-page-wrapper">
        <div className="profile-card">
          <h1>Edit Profil</h1>
          <p>Perbarui nama dan email Anda di bawah ini.</p>
          <form onSubmit={handleSave} className="profile-form">
            <div className="form-group">
              <label htmlFor="userName">Nama</label>
              <input
                id="userName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama Anda"
              />
            </div>
            <div className="form-group">
              <label htmlFor="userEmail">Email</label>
              <input
                id="userEmail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
              />
            </div>
            <div className="profile-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => onNavigate("beranda")}
              >
                Kembali
              </button>
              <button type="submit" className="btn-primary">
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
