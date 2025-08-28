import React from "react";
import { Course } from "../api/courses";

interface Props {
  course: Course;
  purchased: boolean;
  onBuy: () => void;
  onPlay: () => void;
}

const CourseCard: React.FC<Props> = ({ course, purchased, onBuy, onPlay }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p><b>Price:</b> ${course.price}</p>

      {purchased ? (
        <button onClick={onPlay}>Watch</button>
      ) : (
        <button onClick={onBuy}>Buy</button>
      )}
    </div>
  );
};

export default CourseCard;
