import React from "react";
import Project from "../Project";

const projects = [
  {
    id: 1,
    name: "My Work Scheduler",
    description:
      "A simple calendar application that allows a user to save events for each hour of a typical working day",
    gitLink: "https://kaidoll.github.io/my-work-scheduler/",
    image: "https://github.com/KaiDoll/my-work-scheduler/raw/main/image-1.png",
  },
  {
    id: 2,
    name: "Shelf-Scan",
    description:
      "A team project where we developed a webpage that would allow us to use server API's to display information of our choosing. ",
    gitLink: "https://kaidoll.github.io/shelfscan/",
    image:
      "https://github.com/KaiDoll/shelfscan/raw/main/assets/images/frontpage.png",
  },
  {
    id: 3,
    name: "SVG-Generator",
    description:
      "SVG generated through Node.js command-line application that takes in user input to generate a logo and save it as an SVG fileLinks to an external site.",
    gitLink: "https://github.com/KaiDoll/SVGshapeGeneretor",
    image: "https://github.com/KaiDoll/SVGshapeGeneretor/raw/main/image-1.png",
  },
  {
    id: 4,
    name: "Employee Tracker",
    description:
      "A content management systems (CMS) interfaces that allow non-developers to easily view and interact with information stored in databases.",
    gitLink: "https://github.com/KaiDoll/EmployeeTracker",
    image: "https://github.com/KaiDoll/EmployeeTracker/raw/main/image.png",
  },
  {
    id: 5,
    name: "Stress Free Me",
    description:
      "An innovative web application designed to guide users through a series of targeted inquiries, facilitating a comprehensive assessment of individual stress levels",
    gitLink: "https://projecttwofromgroupone-f2f987471d78.herokuapp.com/",
    image:
      "https://github.com/bmancuso3/stress-free-me/raw/main/assets/images/login.1.png",
  },
  {
    id: 6,
    name: "Project 3",
    description: "Project in progress",
    gitLink: "https://github.com/KaiDoll",
    image:
      "https://cdn.pixabay.com/photo/2023/11/14/15/46/nikon-8388022_1280.jpg",
  },
];

export default function Portfolio() {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {projects.map((projects) => (
        <Project
          key={projects.id}
          name={projects.name}
          description={projects.description}
          id={projects.id}
          image={projects.image}
          gitLink={projects.gitLink}
        />
      ))}
    </div>
  );
}

//put your challenges in here and give id
