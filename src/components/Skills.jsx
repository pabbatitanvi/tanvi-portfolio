import { useState } from 'react';
import cPPic from '../assets/c++.png';
import javaPic from '../assets/java.png';
import cPic from '../assets/c.png';
import pyPic from '../assets/python.png';
import cSPic from '../assets/c-sharp.png';
import typePic from '../assets/typescript.png';
import javasPic from '../assets/js.png';
import angularPic from '../assets/angular.png';
import htmlPic from '../assets/html-5.png';
import cssPic from '../assets/css.png';
import nodejsPic from '../assets/nodejs.png';
import postPic from '../assets/postman.png';
import msofficePic from '../assets/msoffice.png';
import jestPic from '../assets/jest.png';
import reactTestingPic from '../assets/reacttestinglib.png';
import cypressPic from '../assets/cypress.png';
import gnPic from '../assets/googlenet.png';
import tfPic from '../assets/tensorflow.png'
import mlibPic from '../assets/matplotlib.png';
import pandasPic from '../assets/pandas.png';
import numPyPic from '../assets/numpy.png';
import kerasPic from '../assets/keras.png';
import openCVPic from '../assets/openCV.png';
import scikitPic from '../assets/scikitlearn.png';
import nltkPic from '../assets/nltk.png'
import sqlPic from '../assets/sql.png';
import mongoDBPic from '../assets/mongodb.png';
import firebasePic from '../assets/firebase.png';
import gitPic from '../assets/git.png';
import gitHPic from '../assets/github.png';
import linuxPic from '../assets/linux.png';
import dockerPic from '../assets/docker.png';
import azurePic from '../assets/azure.png';
import reactPic from '../assets/react.png'
import openai from '../assets/openai.png'
import awsC from '../assets/awscertificate.png'
import gtechC from '../assets/gtechcertificate.png'

import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbSettingsCode } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { CgInfinity } from "react-icons/cg";
import { FiDatabase } from "react-icons/fi";
import { LuWrench } from "react-icons/lu";
import { TfiNewWindow } from "react-icons/tfi";

import './Skills.css'

function Skills(){
  const mySkills = [
    {
      name: "C++",
      image: cPPic,
      type: "backend"
    },
    {
      name: "Java",
      image: javaPic,
      type: "backend"
    },
    {
      name: "C",
      image: cPic,
      type: "backend"
    },
    {
      name: "Python",
      image: pyPic,
      type: "backend"
    },
    {
      name: "C#",
      image: cSPic,
      type: "backend"
    },
    {
      name: "Typescript",
      image: typePic,
      type: "frontend"
    },
    {
      name: "Javascript",
      image: javasPic,
      type: "frontend"
    },
    {
      name: "Angular",
      image: angularPic,
      type: "frontend"
    },
    {
      name: "React",
      image: reactPic,
      type: "frontend"
    },
    {
      name: "React Native",
      image: reactPic,
      type: "frontend"
    },
    {
      name: "HTML",
      image: htmlPic,
      type: "frontend"
    },
    {
      name: "CSS",
      image: cssPic,
      type: "frontend"
    },
    {
      name: "NodeJS",
      image: nodejsPic,
      type: "frontend"
    },
    {
      name: "Postman",
      image: postPic,
      type: "dev"
    },
    {
      name: "Microsoft Office",
      image: msofficePic,
      type: "dev"
    },
    {
      name: "Jest",
      image: jestPic,
      type: "dev"
    },
    {
      name: "React Testing Library",
      image: reactTestingPic,
      type: "dev"
    },
    {
      name: "Cypress",
      image: cypressPic,
      type: "dev"
    },
    {
      name: "Google Net",
      image: gnPic,
      type: "ai"
    },
    {
      name: "Tensor Flow",
      image: tfPic,
      type: "ai"
    },
    {
      name: "Matplotlib",
      image: mlibPic,
      type: "ai"
    },
    {
      name: "Pandas",
      image: pandasPic,
      type: "ai"
    },
    {
      name: "NumPy",
      image: numPyPic,
      type: "ai"
    },
    {
      name: "Keras",
      image: kerasPic,
      type: "ai"
    },
    {
      name: "OpenCV",
      image: openCVPic,
      type: "ai"
    },
    {
      name: "Scikit-Learn",
      image: scikitPic,
      type: "ai"
    },
    {
      name: "NLTK",
      image: nltkPic,
      type: "ai"
    },
    {
      name: "OpenAI SDK",
      image: openai,
      type: "ai"
    },
    {
      name: "Microsoft SQL Server",
      image: sqlPic,
      type: "databases"
    },
    {
      name: "MongoDB",
      image: mongoDBPic,
      type: "databases"
    },
    {
      name: "Firebase",
      image: firebasePic,
      type: "databases"
    },
    {
      name: "Git",
      image: gitPic,
      type: "devOps"
    },
    {
      name: "GitHub",
      image: gitHPic,
      type: "devOps"
    },
    {
      name: "Linux",
      image: linuxPic,
      type: "devOps"
    },
    {
      name: "Docker",
      image: dockerPic,
      type: "devOps"
    },
    {
      name: "Azure",
      image: azurePic,
      type: "devOps"
    },
  ]

  const myCertifications = [
    {
      name: "AWS Certified AI Practitioner",
      image: awsC,
      type: "certifications",
      link: "https://www.credly.com/badges/f36dd06f-9636-4e8e-a1e4-754add2f4657/public_url"
    },
    {
      name: "Georgia Tech(edx) - Computing in Python I, II, III, IV",
      image: gtechC,
      type: "certifications",
      link: "https://drive.google.com/file/d/1m-O9ewhcyvwU0EVys8XS47RkpMKXBDaU/view?usp=sharing"
    },
  ]

  const[filter, setFilter] = useState("all")

  const filteredSkills =
    filter === "all"
      ? mySkills
      : mySkills.filter((skill) => skill.type === filter);

  return(
    <div className='skillPage' id='skills'>
      <div className='skillTitle'>
        <h2>Technical Skills</h2>
      </div>
      <div className='skillsListed'>
        <button onClick={() => setFilter("all")} className={`skillButton ${filter === "all" ? "activeSkill" : ""}`}>
          <span>All</span>
        </button>
        <button onClick={() => setFilter("frontend")} className={`skillButton ${filter === "frontend" ? "activeSkill" : ""}`}>
          <LiaLaptopCodeSolid />
          <span>Frontend Development</span>
        </button>
        <button onClick={() => setFilter("backend")} className={`skillButton ${filter === "backend" ? "activeSkill" : ""}`}>
          <TbSettingsCode />
          <span>Backend Development</span>
        </button>
        <button onClick={() => setFilter("ai")} className={`skillButton ${filter === "ai" ? "activeSkill" : ""}`}>
          <LuBrainCircuit />
          <span>AI/ML Tools</span>
        </button>
        <button onClick={() => setFilter("devOps")} className={`skillButton ${filter === "devOps" ? "activeSkill" : ""}`}>
          <CgInfinity />
          <span>DevOps</span>
        </button>
        <button onClick={() => setFilter("databases")} className={`skillButton ${filter === "databases" ? "activeSkill" : ""}`}>
          <FiDatabase />
          <span>Databases</span>
        </button>
        <button onClick={() => setFilter("dev")} className={`skillButton ${filter === "dev" ? "activeSkill" : ""}`}>
          <LuWrench />
          <span>Development Tools</span>
        </button>
      </div>
      <div className='allSkills'>
        {filteredSkills.map((skill) => (
          <div className='skill'>
            <div className='logoBox'>
              <h4 className='skillT'>{skill.name}</h4>
              <img className= 'image' src={skill.image} alt={skill.image}/>
            </div>
          </div>
        ))}
      </div>
      <div className='skillTitle'>
        <h2>Certifications</h2>
      </div>
      <div className='certifications'>
        {myCertifications.map((c) => (
          <div className='certificate'>
            <div className='skillText'>
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className='links'
              >
                <div className='certificateName'>
                  <h4>{c.name}</h4>
                  <TfiNewWindow className='newWIcon' />
                </div>
              </a>
            </div>
            <div>
              <img className="cImage" src={c.image} alt={c.image}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills