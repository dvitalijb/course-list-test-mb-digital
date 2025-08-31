import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { loadCourses, purchaseCourse } from "../features/coursesSlice";
import CourseCard from "./CourseCard";
import { playVideo } from "../features/videoSlice";

const CourseList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list, purchased, loading, error } = useSelector((state: RootState) => state.courses);

  useEffect(() => {
    dispatch(loadCourses());
  }, []);

  if (loading) return <p className="text-loading">Loading courses...</p>;
  if (error) return <p className="text-loading error">{error}</p>;

  return (
    <div className="list">
      {list.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          purchased={purchased.includes(course.id)}
          onBuy={() => dispatch(purchaseCourse(course.id))}
          onPlay={() => dispatch(playVideo(course.videoUrl))}
        />
      ))}
    </div>
  );
};

export default CourseList;
