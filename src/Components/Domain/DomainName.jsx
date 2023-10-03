import React from 'react';
import "./domainName.css";
import Domain from "./Domain";
import blog from "../../Styles/Domainassests/blog.jpeg";
import calculator from "../../Styles/Domainassests/calculator.jpeg"
import crud from "../../Styles/Domainassests/crud.jpeg"
import myntra from "../../Styles/Domainassests/myntra.jpeg"
import netflix from "../../Styles/Domainassests/netflix.jpeg"
import taskmanager from "../../Styles/Domainassests/taskmanager.jpeg"
import todolist from "../../Styles/Domainassests/todolist.jpeg"
import userauth from "../../Styles/Domainassests/userauth.jpeg"
import weathersearchapp from "../../Styles/Domainassests/weathersearchapp.jpeg"
const DomainName = () => {
  return (

      <div className='DomainName-main-div' id='projects'>
        <h1 className='DomainName-main-div-heading'>Projects</h1>
        <div className='DomainName-all-domains'>
          <Domain
            url="https://github.com/sajalbatra/Netflix-clone"
            image={netflix}
            name=" Captivating Landing Pages (Netflix)"
            description="Create visually stunning landing pages for Netflix, showcasing layout, alignment, and visual appeal using HTML and CSS."
          />
          <Domain 
            url="https://github.com/sajalbatra/Myntra-clone"
            image={myntra}
            name="Captivating Landing Pages (Myntra)"
            description="Create visually stunning landing pages for Myntra, showcasing layout, alignment, and visual appeal using HTML and CSS."
          />
          <Domain 
            url="/iot-domain"
            image={calculator}
            name="Functional Calculator"
            description="Build a sleek and interactive calculator with HTML, CSS, and JavaScript, mastering coding logic and user-friendly interfaces."
          />
          {/* 
          <Domain 
            url=""
            image={""}
            name=""
            description=""
          /> 
          */}
          <Domain 
            url="https://github.com/sajalbatra/To-do-list"
            image={todolist}
            name="To-do-list"
            description="to-do list application involves designing and building a user-friendly interface that allows users to easily create, manage, and track their tasks using HTML, CSS, JavaScript."
          />
          <Domain 
            url="https://github.com/sajalbatra/Task-Manager"
            image={taskmanager}
            name="Task-Manager"
            description="This allows users to manage their tasks for the day & provides authentication functionality, ensuring that only registered users can access the day task page and is built using the MERN stack."
          /> 
          <Domain 
            url="https://github.com/sajalbatra/Weather-Website"
            image={weathersearchapp}
            name="Weather Search App"
            description="A simple React application that allows users to search for a location and retrieve weather information for that location"
          />
          <Domain 
            url="https://github.com/sajalbatra/Basic-API"
            image={crud}
            name="CRUD operations"
            description="This is a simple Express.js application that demonstrates CRUD operations using MongoDB as the database."
          />
          <Domain 
            url="https://github.com/sajalbatra/Blog-app-frontend"
            image={blog}
            name="Blogging Platform"
            description="Crafted a user-friendly blogging tool for effortless content creation."
          /> 
          <Domain 
            url="https://github.com/sajalbatra/userlogin-and-signup"
            image={userauth}
            name="User Authentication API"
            description="Developed a secure API for user authentication, including login and sign-up functionalities, using Express.js. Ensured data privacy and security while providing a seamless user experience."
          />
        </div>
      </div>
    
  );
};

export default DomainName;