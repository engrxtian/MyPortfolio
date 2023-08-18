import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import angelina from "../../Assets/Projects/mp1front.png";
import emotion from "../../Assets/Projects/emotion.png";
import publicA from "../../Assets/Projects/mp2front.png";
import licab from "../../Assets/Projects/LicabFront.png";
import suicide from "../../Assets/Projects/suicide.png";
import capStone from "../../Assets/Projects/capstoneFront.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on bootcamp in KodeGo.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={angelina}
              isBlog={false}
              title="Angelina's Farm Resort"
              description="Discover a Convenient and Trustworthy Resort Information Website for Seamless Contact. Your Go-To Source for Reliable Resort Connections. This page build with HTML, CSS and Bootstrap."
              ghLink=""
              demoLink="https://empi1.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={publicA}
              isBlog={false}
              title="Public Registry of Sex Offender"
              description="Empowering Safety: Your Local Sex Offender Public Registry. Access Verified Information to Safeguard Your Community. This page build with HTML, CSS, Bootstrap and Javascript."
              ghLink=""
              demoLink="https://empi2.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={licab}
              isBlog={false}
              title="Licab LGU"
              description="Explore Licab LGU: Your Official Gateway to Licab Local Government. Your One-Stop Destination for Community Services and Information. This page build with HTML, CSS, Bootstrap and Javascript."
              ghLink=""
              demoLink="https://licab-lgu-xtian-engrxtian.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={capStone}
              isBlog={false}
              title="RizJourney"
              description="Embark on RizJourney: Your Definitive Tribute to Jose Rizal. Uncover the Life, Works, and Legacy of the National Hero through Engaging Articles, Multimedia, and Historical Insights."
              ghLink=""
              demoLink="https://capstone-project-mocha-one.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
