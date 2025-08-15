import React, { useState } from 'react';
import './Beranda.css';
import logoVideobelajar from './assets/image/Logo.png';
import heroBackgroundImage from './assets/image/H1.jpg';
import ctaBackgroundImage from './assets/image/H2.jpg';
import courseImage1 from './assets/image/laptop-abu.jpg';
import courseImage2 from './assets/image/catatan.jpg';
import courseImage3 from './assets/image/ngitung.jpg';
import courseImage4 from './assets/image/laptop-putih.jpg';
import courseImage5 from './assets/image/laptop.jpg';
import courseImage6 from './assets/image/coffee.jpg';
import courseImage7 from './assets/image/peta.jpg';
import courseImage8 from './assets/image/gawe.jpg';
import courseImage9 from './assets/image/nyatet.jpg';
import avatarJenna from './assets/image/1.png';
import avatarJenna2 from './assets/image/2.png';
import avatarJenna3 from './assets/image/3.png';
import avatarJenna4 from './assets/image/4.png';
import avatarJenna5 from './assets/image/5.png';
import avatarJenna6 from './assets/image/6.png';
import avatarJenna7 from './assets/image/7.png';
import avatarJenna8 from './assets/image/8.png';
import avatarJenna9 from './assets/image/9.png';
import ratingIcon from './assets/image/Rating.png';
import userProfileImageDesktop from './assets/image/user.png'; 
import userProfileImageMobile from './assets/image/vector.png';
import arrowIcon from './assets/image/Vector 3.png';

const SearchIcon = () => ( <svg className="icon" xmlns="http://www.w.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> );
const ChartIcon = () => ( <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10M18 20V4M6 20V16" /></svg> );
const ClockIcon = () => ( <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> );
const LinkedinIcon = () => (
  <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const FacebookIcon = () => (
  <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
  <svg className="social-icon" xmlns="http://www.w.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const TwitterIcon = () => (
  <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

const courses = [
  { id: 1, category: 'Big 4 Auditor', title: 'Big 4 Auditor Financial Analyst', subtitle: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik', instructor: { name: 'Jenna Ortega', title: 'Senior Accountant di Gojek', avatar: avatarJenna }, rating: 3.5, ratingCount: 86, price: '300K', image: courseImage1 },
  { id: 2, category: 'Pemasaran', title: 'Big 4 Auditor Financial Analyst', subtitle: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik', instructor: { name: 'Jenna Ortega', title: 'Senior Accountant di Gojek', avatar: avatarJenna2 }, rating: 3.5, ratingCount: 86, price: '300K', image: courseImage2 },
  { id: 3, category: 'Pengembangan Diri', title: 'Big 4 Auditor Financial Analyst', subtitle: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik', instructor: { name: 'Jenna Ortega', title: 'Senior Accountant di Gojek', avatar: avatarJenna3  }, rating: 3.5, ratingCount: 86, price: '300K', image: courseImage3 },
  { id: 4, category: 'Bisnis', title: 'Big 4 Auditor Financial Analyst', subtitle: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik', instructor: { name: 'Jenna Ortega', title: 'Senior Accountant di Gojek', avatar: avatarJenna4  }, rating: 3.5, ratingCount: 86, price: '300K', image: courseImage4 },
  { id: 5, category: 'Pemasaran', title: 'Big 4 Auditor Financial Analyst', subtitle: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik', instructor: { name: 'Jenna Ortega', title: 'Senior Accountant di Gojek', avatar: avatarJenna5  }, rating: 3.5, ratingCount: 86, price: '300K', image: courseImage5 },
  { id: 6, category: 'Big 4 Auditor', title: 'Big 4 Auditor Financial Analyst', subtitle: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik', instructor: { name: 'Jenna Ortega', title: 'Senior Accountant di Gojek', avatar: avatarJenna6  }, rating: 3.5, ratingCount: 86, price: '300K', image: courseImage6 },
  { id: 7, category: 'Pengembangan Diri', title: 'Big 4 Auditor Financial Analyst', subtitle: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik', instructor: { name: 'Jenna Ortega', title: 'Senior Accountant di Gojek', avatar: avatarJenna7  }, rating: 3.5, ratingCount: 86, price: '300K', image: courseImage7 },
  { id: 8, category: 'Bisnis', title: 'Big 4 Auditor Financial Analyst', subtitle: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik', instructor: { name: 'Jenna Ortega', title: 'Senior Accountant di Gojek', avatar: avatarJenna8  }, rating: 3.5, ratingCount: 86, price: '300K', image: courseImage8 },
  { id: 9, category: 'Pemasaran', title: 'Big 4 Auditor Financial Analyst', subtitle: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik', instructor: { name: 'Jenna Ortega', title: 'Senior Accountant di Gojek', avatar: avatarJenna9  }, rating: 3.5, ratingCount: 86, price: '300K', image: courseImage9 },
];

function Beranda({ onLogout }) {
  const [activeFilter, setActiveFilter] = useState('Semua Kelas');
  const filters = ['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'];

  return (
    <div className="beranda-page">
      <header className="beranda-header">
        <div className="beranda-container header-content">
          <img src={logoVideobelajar} alt="Logo Videobelajar" className="header-logo" />
          <div className="header-right-nav">
            <p className="header-category-text">Kategori</p>
            <div className="user-profile" onClick={onLogout} title="Logout">
              <img src={userProfileImageDesktop} alt="User Avatar" className="profile-desktop" />
              <img src={userProfileImageMobile} alt="User Avatar" className="profile-mobile" />
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
            <h1>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
            <p>Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
            <button className="hero-button">Temukan Video Course untuk Dipelajari!</button>
          </div>
        </div>
      </section>
      <main className="beranda-container main-content">
        <h2 className="section-title">Koleksi Video Pembelajaran Unggulan</h2>
        <p className="section-subtitle">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="course-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-subtitle">{course.subtitle}</p>
                <div className="course-instructor">
                  <img src={course.instructor.avatar} alt={course.instructor.name} className="instructor-avatar" />
                  <div className="instructor-info">
                    <p className="instructor-name">{course.instructor.name}</p>
                    <p className="instructor-title">
                      <span className="title-desktop">
                        {course.instructor.title}
                      </span>
                      <span className="title-mobile">
                        Senior Accountant
                      </span>
                    </p>
                  </div>
                </div>
                <div className="course-stats">
                  <span className="rating-info">
                    <img src={ratingIcon} alt="Rating" className="rating-icon" />
                    <span className="rating-text-wrapper">
                      <span className="rating-score">{course.rating}</span>
                      <span className="rating-count">({course.ratingCount})</span>
                    </span>
                  </span>
                  <p className="course-price">Rp {course.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <section className="cta-section-wrapper">
        <div
          className="cta-section"
          style={{ backgroundImage: `url(${ctaBackgroundImage})` }}
        >
          <div className="cta-content">
            <h4 className="cta-eyebrow">NEWSLETTER</h4>
            <h2>Mau Belajar Lebih Banyak?</h2>
            <p>Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
            <div className="cta-form">
              <input type="email" placeholder="Masukkan Emailmu" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      <footer className="beranda-footer">
        <div className="beranda-container footer-grid">
          <div className="footer-about">
            <img src={logoVideobelajar} alt="Logo Videobelajar" className="footer-logo" />
            <p className="footer-tagline">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>
            <p className="footer-address">
              Jl. Usman Efendi No. 50 Lowokwaru, Malang
              <br />
              +62-877-7123-1234
            </p>
          </div>
          <div className="footer-links">
            <h4>Kategori <img src={arrowIcon} alt="Buka" className="footer-arrow-icon" /></h4>
            <ul>
              <li><a href="#">Digital & Teknologi</a></li>
              <li><a href="#">Pemasaran</a></li>
              <li><a href="#">Manajemen Bisnis</a></li>
              <li><a href="#">Pengembangan Diri</a></li>
              <li><a href="#">Desain</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Perusahaan <img src={arrowIcon} alt="Buka" className="footer-arrow-icon" /></h4>
            <ul>
              <li><a href="#">Tentang Kami</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Kebijakan Privasi</a></li>
              <li><a href="#">Ketentuan layanan</a></li>
              <li><a href="#">Bantuan</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Komunitas <img src={arrowIcon} alt="Buka" className="footer-arrow-icon" /></h4>
            <ul>
              <li><a href="#">Tips Sukses</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="beranda-container footer-bottom">
          <p>© 2023 Gerobak Sayur All Rights Reserved.</p>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Beranda;
