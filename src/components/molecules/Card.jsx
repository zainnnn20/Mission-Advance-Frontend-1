import React from 'react';
import '../../assets/style/Beranda.css';
import ratingIcon from '../../assets/image/Rating.png';

function Card({ course }) {
  if (!course || !course.instructor) {
    return null;
  }

  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-subtitle">{course.subtitle}</p>
        <div className="course-instructor">
          <img src={course.instructor.avatar} alt={course.instructor.name} className="instructor-avatar" />
          <div className="instructor-info">
            <p className="instructor-name">{course.instructor.name}</p>
            <p className="instructor-title">
              <span className="title-desktop">{course.instructor.title}</span>
              <span className="title-mobile">Senior Accountant</span>
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
          <p className="course-price">Rp {Number(course.price).toLocaleString('id-ID')}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;