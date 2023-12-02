import React from "react";
import Button from 'react-bootstrap/Button';
import resume from '../../../images/KanchanGurungDoll_Resume_2023.pdf'

export default function Resume() {
  return (
    <div className= "py-5" >
<a href={resume} download ="Resume"><Button variant="outline-dark">
Download My Resume</Button>
</a> 
<h5 className= "py-3">Skills</h5>
<ul> 
  
<li> JavaScript, jQuery, Node.js, Express</li>
<li> HTML5/CSS3, Bootstrap, Tailwind, Git </li>
<li> Handlebars.js, React.js, API/JSON </li>
<li> RESTful API, MySQL, MongoDB, NoSQL </li>
  <li>State Management, and Command Line</li>
  </ul>
</div>
  );
}

{/* <a href={resume} download ="Resume">
<img
  src="https://avatars.githubusercontent.com/u/132765530?s=48&v=4" 
  alt="W3Schools"
  width="104"
  height="142"
/>
</a>  */}