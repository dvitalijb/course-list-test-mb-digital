import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { loadCourses, purchaseCourse } from "../features/coursesSlice";
import CourseCard from "./CourseCard";
import { playVideo } from "../features/videoSlice";

const CourseList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list, purchased, loading, error } = useSelector((state: RootState) => state.courses);

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ display: "grid", gap: 15, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
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
