import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "../../App.css";

export default function About() {
  return (
    <Container>
      <article className="py-5 text-center">
        <h3>
          <i>Full-Stack Developer-ish</i>
        </h3>
        <div className="text-center">
          <Image
            rounded
            thumbnail
            fluid
            src="https://kaidoll.github.io/Challenge-Two-UTA/Me.jpg"
            width="25%"
          />
        </div>

        <ul className="py-3">
          <li>
            {" "}
            <i>Welcome to my Portfolio webpage. This is Kai Gurung-Doll,</i>
          </li>
          <li>
            {" "}
            <i>
              a recent UT Full Stack Developer Graduate and a continious Web
              Development learner.{" "}
            </i>{" "}
          </li>   
          <li> <i>From HTML & CSS to understanding frontend and backend application.</i></li>
          <li> <i>There is still much to learn and a lot to do.</i></li>
          <li>
            <i>Here you will find my past projects and my ongoing project.</i>
          </li>
        </ul>
      </article>
    </Container>
  );
}
