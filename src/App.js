import React, {Component} from "react";
import "./vendors/font-awesome/css/fontawesome.css";
import "./App.css";
import CourseForm from "./components/CourseForm/CourseForm";
import CourseList from "./components/CourseList/CourseList";
import Footer from "./components/Footer/Footer";

class App extends Component {

  // App State
  state = {
    // Course List
    courses: [
      {name: "HTML"},
      {name: "CSS"},
      {name: "JavaScript"},
      {name: "React JS"}
    ],
    // Current To Hold Temporary Value
    current: ""
  };

  // Update Current Value [For Add Operation] Method
  updateCurrent = (e) => {
    // Update State Of Current With Input Value
    this.setState({
      current: e.target.value
    });
  };

  // Add New Course Method
  addCourse = (e) => {
    // Prevent Page Reloading On Submit
    e.preventDefault();
    // Get Courses & Current From State
    let current = this.state.current;
    let courses = this.state.courses;
    if (this.state.current !== "") {
      // Push Current Value (After Update It In Previous Method) To Courses
      courses.push({name: current});
      // Update Courses & Current State
      this.setState({
        courses,
        current: ""
      });
    }
  };

  // Delete Course Method With Index
  deleteCourse = (index) => {
    // Get Courses From State
    let courses = this.state.courses;
    // Delete Specific Index
    courses.splice(index, 1);
    // Update State
    this.setState({courses});
  };

  // Edit Course Method
  editCourse = (index, value) => {
    // Get Courses From State
    let {courses} = this.state;
    // Get Required Course To Edit With Its Index
    let course = courses[index];
    // Update Required Course With Value
    course.name = value;
    // Update State
    this.setState({courses});
  };

  // Render View Method
  render() {
    return (
      <div className="App">
        <h2 className="App-title">Courses List</h2>
        <CourseForm current={this.state.current} updateCurrent={this.updateCurrent} addCourse={this.addCourse} />
        <CourseList courses={this.state.courses} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
        <Footer />
      </div>
    );
  }
}

export default App;
