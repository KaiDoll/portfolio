import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "../../../src/App.css";

export default function About() {
  return (
    <Container>
      <article className="py-5 text-center">
        <h3>Full-Stack Developer-ish</h3>
        <div className="text-center">
          <Image
            rounded
            thumbnail
            fluid
            src="https://kaidoll.github.io/Challenge-Two-UTA/Me.jpg"
            width="25%"
          />
        </div>
        <p className="py-2"><i>
          This is Kai Gurung-Doll, a recent UT Full Stack Developer Graduate 
          and a continious Web Development learner</i>
        </p>
        <p className="py-2">
          This is Kai Gurung-Doll. This is my ongoing work in progress
          portfolio. I am new to coding and learning along the way as I am doing
          the bootcamp in UTA! 
        </p>
      </article>
    </Container>
  );
}
