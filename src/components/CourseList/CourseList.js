import React, {Component, Fragment} from "react";
import "./CourseList.css";

class CourseList extends Component {

  // Edit State
  state = {
    // State Of Edit Mode
    isEdit: false,
    // Index Of Required Course To Be Edited
    current: ""
  };

  // Render Courses Method
  renderCourses = (editIndex) => {
    // Get Courses From Props
    const {courses} = this.props;
    // Return Courses List
    return (
      <ul className="courses-list">
        {
          // Loop Through All Courses
          courses.map((course, index) => {
            // Check If Current Course Index === Required Course To Be Edited Index && Edit Mode Is One
            if (index === editIndex && this.state.isEdit === true) {
              // Render Update From View Instead of Showing Course Item
              return (
                <li className="course-item-update" key={index}>
                  {this.renderUpdateForm(index, course.name)}
                </li>
              );
            } else {
              // Render Course Item
              return (
                <li className="course-item-render" key={index}>
                  <span className="course-name">{course.name}</span>
                  <button className="course-edit" onClick={() => this.toggleEditState(index)}>Edit</button>
                  <button className="course-delete" onClick={() => this.props.deleteCourse(index)}>Delete</button>
                </li>
              );
            }
          })
        }
      </ul>
    );
  };

  // Render Update Form View Method
  renderUpdateForm = (index, value) => {
    return (
      <form className="edit-course-form" onSubmit={(e) => this.updateCourseItem(e, index, this.input.value)}>
        <input className="text-input" type="text" defaultValue={value} ref={(v) => this.input = v} />
        <button className="submit-button" type="submit">Update</button>
      </form>
    );
  };

  // Toggle Edit Mode Method
  toggleEditState = (index) => {
    // Get Current Edit Mode Value
    let isEdit = this.state.isEdit;
    // Toggle Edit Mode Value
    this.setState({
      isEdit: !isEdit
    });
    // Update Current With Index To Be Edited
    this.setState({
      current: index
    });
  };

  // Update Course Item Method
  updateCourseItem = (e, index, value) => {
    // Prevent Page Reloading On Submit
    e.preventDefault();
    // Trigger Edit Course Method From App
    this.props.editCourse(index, value);
    // Toggle State Of Current Mode After Update
    this.toggleEditState(index);
  };

  // Render View Method
  render() {
    return (
      <Fragment>
        {this.props.courses.length > 0 ? this.renderCourses(this.state.current) :
          <h3 className="no-courses-notice">No Courses To Show</h3>}
      </Fragment>
    );
  }

}

export default CourseList;
