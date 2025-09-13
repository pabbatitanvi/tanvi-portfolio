import { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import aboutPic from './assets/aboutPic.jpg';
import 'react-vertical-timeline-component/style.min.css';

import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { TfiNewWindow } from "react-icons/tfi";
import { GoArrowDown } from "react-icons/go";

import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Modal from './components/Modal';

import LiquidEther from './LiquidEther';
import VariableProximity from './VariableProximity';

function App() {
  const[showArrow, setShowArrow] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 3000);

    if (setScrolled == true){
      setShowArrow(false)
    }

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrolled) {
      setShowArrow(false);
    }
  }, [scrolled]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <>
      <Navbar expand="lg" className="shadow-0 border-0" fixed="top" style={{ backgroundColor: scrolled ? "rgba(28, 28, 28, 0.97)" : "transparent", transition: ' 0.5s' }}>
        <Container>
          <Navbar.Brand className='navBrand'>Tanvi Pabbati</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-5 centerNav" style={{ border: scrolled ? "0" : "1px solid rgb(115, 112, 112)", transition: ' 0.3s'}}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="outline-light" className="navButton w-100 w-md-auto" onClick={() => setShowModal(true)}>
                Contact Me
              </Button>
              {showModal &&<Modal onClose={() => setShowModal(false)} />}     
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="background">
        <LiquidEther
          colors={['#5227FF','#B19EEF','#06B6D4']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={20}
          iterationsPoisson={20}
          resolution={0.4}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.6}
          autoIntensity={2.2}
          takeoverDuration={0.15}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
        <div className="aboutPage" id='home'>
          <div className='aboutPageSection'>
            <div>
              <img
                className="circleImage" src={aboutPic} alt='About'
              />
            </div>
            <div className='aboutParagraph'>
              <div ref={containerRef} style={{position: 'relative'}}>
                <VariableProximity
                  label={'Hi! I am Tanvi Pabbati'}
                  className={'variable-proximity-demo'}
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff='linear'
                />
              </div>
              <div className='aboutText'>
                <p>I am a Computer Science graduate from Penn State Behrend with a strong interest in AI and Machine Learning. I have experience developing both full-stack and AI/ML applications. Beyond coding, I have held  several leadership roles in various student organizations which helped me develop strong collaboration, leadership, and project management skills.</p>
              </div>
              <div className='resumeButtonDiv'>
                <a
                  href="https://drive.google.com/file/d/1bElF4op_hVJHLlo39nml4ZMtmZ2Qvaw4/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='links'
                >
                  <Button variant='info' className='resumeButton'>Resume<TfiNewWindow /></Button>
                </a>
              </div>
              <div className="contactIcons">
                <span className="icons">
                  <a
                    href="https://github.com/pabbatitanvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='iconLinks'
                  >
                    <IoLogoGithub className="githubIcon"/>
                  </a>
                  <a
                    href="https://linkedin.com/in/tanvi-pabbati-1303b0223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='iconLinks'
                  >
                    <IoLogoLinkedin className="linkedinIcon"/>
                  </a>
                </span>
              </div>
            </div>
            {showArrow && (
              <div className='scrollArrowContainer'>
                <GoArrowDown className='scrollArrow'/>
              </div>
            )}
          </div>
        </div>
      </div>
      <Education/>
      <Projects/>
      <Skills/>
    </>
  )
}

export default App
