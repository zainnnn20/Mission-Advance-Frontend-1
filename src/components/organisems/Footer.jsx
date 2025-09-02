import React from 'react';
import '../../assets/style/Beranda.css';
import logoVideobelajar from '../../assets/image/Logo.png';
import arrowIcon from '../../assets/image/Vector 3.png';

const LinkedinIcon = () => ( <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> );
const FacebookIcon = () => ( <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> );
const InstagramIcon = () => ( <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> );
const TwitterIcon = () => ( <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> );

function Footer() {
  return (
    <footer className="beranda-footer">
      <div className="beranda-container footer-grid">
        <div className="footer-about">
          <img src={logoVideobelajar} alt="Logo Videobelajar" className="footer-logo" />
          <p className="footer-tagline">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </p>
          <p className="footer-address">
            Jl. Usman Efendi No. 50 Lowokwaru, Malang<br />+62-877-7123-1234
          </p>
        </div>
        <div className="footer-links">
          <h4><span className="desktop-only">Kategori</span><span className="mobile-only">Perusahaan</span><img src={arrowIcon} alt="Buka" className="footer-arrow-icon" /></h4>
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
        <p>© 2025 Gerobak Sayur All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;