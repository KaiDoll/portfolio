import React from "react";
import resume from '../../../images/KanchanGurungDoll_Resume_2023.pdf'

export default function Resume() {
  return (
<a href={resume} download ="Resume">
<img
  src="https://avatars.githubusercontent.com/u/132765530?s=48&v=4" 
  alt="W3Schools"
  width="104"
  height="142"
/>
</a> 
  );
}

