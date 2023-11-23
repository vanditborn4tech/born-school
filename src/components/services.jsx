import React from "react";
import "./servicestyle.css";

const Services = () => {
  return (
    <div className="service">
      <div className="left">
        <div className="title2">
        <h1>Features of new Beautiful Student Alert app!</h1>
        <p>Student Alert developed to simplify the life of school/institution and teachers so that they can focus on the most important thing quality in education. What made us the best is our features that allow parents to stay updated with their child performance levels.</p>
        </div>
      
      </div>
      <div className="right">
        <div className="card">
          <i className="fa-solid fa-file-invoice fa-2xl"></i>
          <p className="heading">Admission Enquiry</p>
          <p>
            Its easy to manage your pre admission queries with Student Alert.
          </p>
        </div>
        <div className="card">
          <i className="fa-solid fa-graduation-cap fa-2xl"></i>
          <p className="heading">Student Management</p>
          <p>Manage all student related data to make your records digital.</p>
        </div>
        <div className="card">
          <i className="fa-solid fa-clipboard-user fa-2xl"></i>
          <p className="heading">Attendance Management</p>
          <p>Teachers can mark daily attendance, alerts to parents.</p>
        </div>
        <div className="card">
          <i className="fa-solid fa-indian-rupee-sign fa-2xl"></i>
          <p className="heading">Fees Management</p>
          <p>
            Student Alert Fees management system simplifies the tedious fee
            collection process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
