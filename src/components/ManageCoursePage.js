import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseStore from '../stores/courseStore';
import * as courseActions from '../actions/courseAction'
import { toast } from "react-toastify";


const ManageCoursePage = (props) => {
    const [errors, setErros] = useState({});
    const [courses, setCourses] = useState(courseStore.getCourses())
    const [course, setCourse] = useState({
        id:null,
        slug:"",
        title:"",
        authorId:null,
        category:""
    })

  useEffect(()=>{
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if(courses.length === 0){
      courseActions.loadCourses();
    }else if(slug !== undefined && slug !== ''){
        setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange);
  },[courses.length,props.match.params.slug])  

  function onChange(){
    setCourses(courseStore.getCourses());
  }

  function handleChange({target}){
    setCourse({...course, [target.name]:target.value});
  }

  function handleSubmit(event){
    event.preventDefault();
    if (!formIsValid()) return;

    
    courseActions.saveCourse(course).then(()=>{
        toast.success("Course Saved.");
        props.history.push("/courses");
    })
  }
  function formIsValid(){
       const _errors = {}

       if(!course.title) _errors.title = "Title is required";
       if(!course.authorId) _errors.authorId = "Author is required";
       if(!course.category) _errors.category = "Category is required";

       setErros(_errors);
       return Object.keys(_errors).length === 0;
  }  
  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </>
  );
};

export default ManageCoursePage;
