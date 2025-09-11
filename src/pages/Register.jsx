import React, { useState } from "react";
import "../assets/style/Register.css";
import logoVideobelajar from "../assets/image/Logo.png";
import indonesiaFlag from "../assets/image/Bendera.png";

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    ></path>
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611 20.083H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C41.383 34.416 44 28.134 44 24c0-1.341-.138-2.65-.389-3.917z"
    ></path>
  </svg>
);

const EyeIcon = ({ isVisible }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    style={{ width: "1.25rem", height: "1.25rem", color: "#9CA3AF" }}
  >
    {isVisible ? (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </>
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243L6.228 6.228"
      />
    )}
  </svg>
);

function Register({ onNavigate }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);

  return (
    <div className="register-page">
      <header className="register-header">
        <img
          src={logoVideobelajar}
          alt="Logo Videobelajar"
          className="register-logo"
        />
      </header>
      <main className="register-main">
        <div className="register-card">
          <div className="register-title-container">
            <h2 className="register-title">Pendaftaran Akun</h2>
            <p className="register-subtitle">
              Yuk, daftarkan akunmu sekarang juga!
            </p>
          </div>
          <form className="register-form">
            <div>
              <label htmlFor="fullName" className="form-label">
                Nama Lengkap <span className="required-symbol">*</span>
              </label>
              <input type="text" id="fullName" className="form-input" />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                E-Mail <span className="required-symbol">*</span>
              </label>
              <input type="email" id="email" className="form-input" />
            </div>
            <div>
              <div className="mobile-only-field">
                <label htmlFor="gender" className="form-label">
                  Jenis Kelamin <span className="required-symbol">*</span>
                </label>
                <select id="gender" className="form-input">
                  <option value="wanita">Wanita</option>
                  <option value="pria">Pria</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
              <label htmlFor="phone" className="form-label">
                No. Hp <span className="required-symbol">*</span>
              </label>
              <div className="phone-input-group">
                <div className="country-code-selector">
                  <div className="flag-area">
                    <img
                      src={indonesiaFlag}
                      alt="Bendera"
                      className="country-flag"
                    />
                  </div>
                  <div className="code-area">
                    <span className="code-text">+62</span>
                  </div>
                  <select className="country-code-dropdown">
                    <option value="+62">+62</option>
                  </select>
                </div>
                <input
                  type="tel"
                  id="phone"
                  className="form-input phone-input-number"
                  placeholder=""
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                Kata Sandi <span className="required-symbol">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  className="form-input"
                />
                <div className="input-icon" onClick={togglePasswordVisibility}>
                  <EyeIcon isVisible={passwordVisible} />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="form-label">
                Konfirmasi Kata Sandi <span className="required-symbol">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="confirmPassword"
                  className="form-input"
                />
                <div
                  className="input-icon"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  <EyeIcon isVisible={confirmPasswordVisible} />
                </div>
              </div>
            </div>
            <a href="#" className="forgot-password-link">
              Lupa Password?
            </a>
            <div className="button-group">
              <button type="submit" className="btn btn-primary">
                Daftar
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onNavigate("login")}
              >
                Masuk
              </button>
            </div>
            <div className="separator">
              <span className="separator-text">atau</span>
            </div>
            <div>
              <button type="button" className="btn btn-google">
                <GoogleIcon />
                <span>Masuk Dengan Google</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Register;
