import React, { useState, useEffect } from "react";
import "../assets/style/Admin.css";
import "../assets/style/Beranda.css";
import EditModal from "./EditModal.jsx";
import Footer from "../components/organisems/Footer.jsx";
import {
  addCourse,
  deleteCourse,
  updateCourse,
} from "../services/courseAPI.js";
import { imageMap, avatarMap } from "../data.js";
import logoVideobelajar from "../assets/image/Logo.png";
import userProfileImageDesktop from "../assets/image/user.png";
import userProfileImageMobile from "../assets/image/Vector.png";

const BoxIcon = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
    />
  </svg>
);

const PencilIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>
);

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

function Admin({ onNavigate, courses, fetchCourses, loading, error }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [editingCourse, setEditingCourse] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const profileImageToShow =
    currentUser?.profilePicture || userProfileImageDesktop;
  const profileImageMobileToShow =
    currentUser?.profilePicture || userProfileImageMobile;

  const handlePriceChange = (increment) => {
    const currentValue = Number(price) || 0;
    const step = 1000;
    const newValue = increment
      ? currentValue + step
      : Math.max(0, currentValue - step);
    setPrice(String(newValue));
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    if (!title || !price) {
      alert("Nama produk dan harga harus diisi!");
      return;
    }

    const imageKeys = Object.keys(imageMap);
    const avatarKeys = Object.keys(avatarMap);
    const randomImageKey =
      imageKeys[Math.floor(Math.random() * imageKeys.length)];
    const randomAvatarKey =
      avatarKeys[Math.floor(Math.random() * avatarKeys.length)];

    const newCourseData = {
      title,
      price: Number(price),
      image: randomImageKey,
      subtitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      instructor_name: "Jenna Ortega",
      instructor_title: "Senior Accountant di Gojek",
      instructor_avatar: randomAvatarKey,
      rating: (Math.random() * (5 - 4) + 4).toFixed(1),
      ratingCount: Math.floor(Math.random() * 200) + 50,
    };

    try {
      await addCourse(newCourseData);
      alert("Produk berhasil ditambahkan!");
      fetchCourses();
      setTitle("");
      setPrice("");
    } catch (err) {
      alert(`Gagal menambahkan produk: ${err.message}`);
    }
  };

  const handleDeleteCourse = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      try {
        await deleteCourse(id);
        alert("Produk berhasil dihapus!");
        fetchCourses();
      } catch (err) {
        alert(`Gagal menghapus produk: ${err.message}`);
      }
    }
  };

  const handleEditCourse = (course) => setEditingCourse(course);
  const handleUpdateCourse = async (updatedCourse) => {
    try {
      await updateCourse(updatedCourse.id, {
        title: updatedCourse.title,
        price: Number(updatedCourse.price),
      });
      alert("Produk berhasil diperbarui!");
      setEditingCourse(null);
      fetchCourses();
    } catch (err) {
      alert(`Gagal memperbarui produk: ${err.message}`);
      setEditingCourse(null);
    }
  };

  return (
    <div className="admin-page-wrapper">
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
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
      <main className="admin-main-content">
        <div className="admin-header">
          <h1>Manajemen Produk</h1>
          <p>Tambah, edit, atau hapus produk dari daftar Anda.</p>
        </div>
        <div className="admin-card">
          <h2 className="card-title">Tambah Produk Baru</h2>
          <form onSubmit={handleAddCourse} className="add-product-form">
            <div className="form-group">
              <label htmlFor="title">Nama Produk</label>
              <input
                id="title"
                type="text"
                placeholder="Contoh: Full Stack Foundations"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Harga (Rp)</label>
              <div className="input-number-wrapper">
                <input
                  id="price"
                  type="number"
                  placeholder="Contoh: 99000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <div className="input-number-controls">
                  <button
                    type="button"
                    className="control-btn"
                    onClick={() => handlePriceChange(true)}
                  >
                    <ChevronUpIcon />
                  </button>
                  <button
                    type="button"
                    className="control-btn"
                    onClick={() => handlePriceChange(false)}
                  >
                    <ChevronDownIcon />
                  </button>
                </div>
              </div>
            </div>
            <button type="submit" className="btn-primary">
              Tambah Produk
            </button>
          </form>
        </div>
        <div className="product-list-container">
          {loading && (
            <p style={{ textAlign: "center" }}>Loading products...</p>
          )}
          {error && (
            <p style={{ textAlign: "center", color: "red" }}>
              Gagal memuat data: {error.message}
            </p>
          )}
          {!loading &&
            !error &&
            (courses.length === 0 ? (
              <div className="product-list-empty">
                {" "}
                <BoxIcon /> <h3>Belum ada produk</h3>{" "}
                <p>
                  Gunakan formulir di atas untuk menambahkan produk pertama
                  Anda.
                </p>{" "}
              </div>
            ) : (
              <div className="product-list-grid">
                {" "}
                {courses.map((course) => (
                  <div key={course.id} className="product-item">
                    {" "}
                    <img src={imageMap[course.image]} alt={course.title} />{" "}
                    <div className="product-item-content">
                      {" "}
                      <h4>{course.title}</h4>{" "}
                      <p className="product-price">
                        Rp {Number(course.price).toLocaleString("id-ID")}
                      </p>{" "}
                      <div className="product-item-actions">
                        {" "}
                        <button
                          className="btn-edit"
                          onClick={() => handleEditCourse(course)}
                        >
                          <PencilIcon /> Edit
                        </button>{" "}
                        <button
                          className="btn-delete"
                          onClick={() => handleDeleteCourse(course.id)}
                        >
                          <TrashIcon /> Hapus
                        </button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                ))}{" "}
              </div>
            ))}
        </div>
      </main>
      <Footer />
      <EditModal
        course={editingCourse}
        onClose={() => setEditingCourse(null)}
        onSave={handleUpdateCourse}
      />
    </div>
  );
}

export default Admin;
