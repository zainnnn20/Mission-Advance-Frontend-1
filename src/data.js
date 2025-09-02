// Lokasi: src/data.js

// Import semua gambar yang dibutuhkan oleh "Bank Gambar" kita
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


// =============================================================
// BAGIAN 'const initialCourses = [...]' SUDAH DIHAPUS DARI SINI
// =============================================================

export const initialCourses = [
  { id: '1', title: 'Full Stack Foundations', price: '99000', image: courseImage1, instructor: { name: 'Jenna Ortega', title: 'Senior Accountant', avatar: avatarJenna }, rating: 3.5, ratingCount: 86 },
  { id: '2', title: 'Stack Sprint', price: '149000', image: courseImage2, instructor: { name: 'Jenna Ortega', title: 'Senior Accountant', avatar: avatarJenna2 }, rating: 3.5, ratingCount: 86 },
  { id: '3', title: 'CodeGenesis Path', price: '249000', image: courseImage3, instructor: { name: 'Jenna Ortega', title: 'Senior Accountant', avatar: avatarJenna3 }, rating: 3.5, ratingCount: 86 },
  { id: '4', title: 'Nexus Integrator', price: '299000', image: courseImage4, instructor: { name: 'Jenna Ortega', title: 'Senior Accountant', avatar: avatarJenna4 }, rating: 3.5, ratingCount: 86 },
  { id: '5', title: 'API Architect', price: '349000', image: courseImage5, instructor: { name: 'Jenna Ortega', title: 'Senior Accountant', avatar: avatarJenna5 }, rating: 3.5, ratingCount: 86 },
  { id: '6', title: 'DevOps for Devs', price: '399000', image: courseImage6, instructor: { name: 'Jenna Ortega', title: 'Senior Accountant', avatar: avatarJenna6 }, rating: 3.5, ratingCount: 86 },
  { id: '7', title: 'MERN Mastery', price: '599000', image: courseImage7, instructor: { name: 'Jenna Ortega', title: 'Senior Accountant', avatar: avatarJenna7 }, rating: 3.5, ratingCount: 86 },
  { id: '8', title: 'Quantum Leap Stack', price: '649000', image: courseImage8, instructor: { name: 'Jenna Ortega', title: 'Senior Accountant', avatar: avatarJenna8 }, rating: 3.5, ratingCount: 86 },
  { id: '9', title: 'Full Stack Journey', price: '799000', image: courseImage9, instructor: { name: 'Jenna Ortega', title: 'Senior Accountant', avatar: avatarJenna9 }, rating: 3.5, ratingCount: 86 },
];

// Kita tetap mengekspor array gambar ini untuk digunakan di Admin.jsx
export const allCourseImages = [
  courseImage1, courseImage2, courseImage3, courseImage4, courseImage5,
  courseImage6, courseImage7, courseImage8, courseImage9
];

export const allAvatars = [
  avatarJenna, avatarJenna2, avatarJenna3, avatarJenna4, avatarJenna5,
  avatarJenna6, avatarJenna7, avatarJenna8, avatarJenna9
];

// 'export default initialCourses;' juga sudah dihapus.