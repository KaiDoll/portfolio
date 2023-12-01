import React from "react";
import Project from "../Project";

const projects = [
  {
    id: 1,
    name: "challenge 1",
    description: "this is a tester",
  },
  {
    id: 2,
    name: "challenge 2",
    description: "this is a tester",
  },
  {
    id: 3,
    name: "challenge 3",
    description: "this is a tester",
  },
  {
    id: 4,
    name: "challenge 4",
    description: "this is a tester",
  },
  {
    id: 5,
    name: "challenge 5",
    description: "this is a tester",
  },
  {
    id: 6,
    name: "challenge 6",
    description: "this is a tester",
    image: "https://github.com/KaiDoll/weather-app/raw/main/image-2.png"
  },
];

export default function Portfolio() {
  return (
    <div>
    {projects.map(projects=><Project key={projects.id} name={projects.name} description={projects.description} id={projects.id} image={projects.image}/>)}
</div>
  );
}

//put your challenges in here and give id
