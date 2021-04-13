import React from "react";
import "./CourseForm.css";

// Render Add Form View Function
const CourseForm = (props) => {
  return (
    <form onSubmit={props.addCourse} className="add-course-form">
      <input className="text-input"
             type="text"
             onChange={props.updateCurrent}
             value={props.current}
             placeholder="Add New Course" />
      <button className="submit-button" type="submit">Add Course</button>
    </form>
  );
};

export default CourseForm;
