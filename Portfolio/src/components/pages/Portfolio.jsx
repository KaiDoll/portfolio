import React from "react";
import Project from "../Project";

const projects = [
  {
    id: 1,
    name: "challenge 1",
    description: "this is a tester",
    gitLink: "https://github.com/KaiDoll",
    image: "https://cdn.pixabay.com/photo/2023/11/26/13/34/mountains-8413588_1280.jpg"
  },
  {
    id: 2,
    name: "challenge 2",
    description: "this is a tester",
    gitLink: "https://github.com/KaiDoll",
    image: "https://cdn.pixabay.com/photo/2023/09/29/07/52/rocks-8283191_1280.jpg"
  },
  {
    id: 3,
    name: "challenge 3",
    description: "this is a tester",
    gitLink: "https://github.com/KaiDoll",
    image: "https://cdn.pixabay.com/photo/2023/11/26/21/11/dog-8414313_1280.jpg"
  },
  {
    id: 4,
    name: "challenge 4",
    description: "this is a tester",
    gitLink: "https://github.com/KaiDoll",
    image: "https://cdn.pixabay.com/photo/2023/11/24/19/11/road-8410533_1280.jpg"
  },
  {
    id: 5,
    name: "challenge 5",
    description: "this is a tester",
    gitLink: "https://github.com/KaiDoll",
    image:"https://cdn.pixabay.com/photo/2023/11/14/15/46/nikon-8388022_1280.jpg" 
  },
  {
    id: 6,
    name: "challenge 6",
    description: "this is a tester",
    gitLink: "https://github.com/KaiDoll",
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
