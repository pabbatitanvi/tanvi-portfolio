import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { TbBrandReact } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandAngular } from "react-icons/tb";
import { TbBrandUnity } from "react-icons/tb";
import { TbBrandPython } from "react-icons/tb";
import { TfiNewWindow } from "react-icons/tfi";
import './Projects.css'

function Projects(){
  const reactI = <TbBrandReact size={50}/>
  const reactNative = <TbBrandReactNative/>
  const angular = <TbBrandAngular/>
  const unity = <TbBrandUnity/>
  const python = <TbBrandPython/>

  const myProj = [
  {
    date: "Aug 2024 - May 2025",
    name: "Sponsored Research Proposal and Award Tracking System",
    projType: "Capstone Project",
    projIcon: reactI,
    desc: "Collaborated in a group of 4 to design and deploy a full-stack web application and SQL Server database for the Penn State Grants and Contracts Office using Microsoft Azure. Developed React pages for data entry and management, imported and structured Excel data into SQL tables, and ensured seamless integration and cloud deployment for scalable access.",
    tags: ["ReactJS", "Microsoft SQL Server", "Azure", "NodeJS", "ExpressJS", "Figma", "Jest", "React Testing Library", "Postman", "Cypress", "SDLC", "Agile Methodologies"],
    link: "https://sites.psu.edu/behrendseniordesign/2025/04/29/sponsored-research-proposal-and-award-tracking-system/"
  },
  {
    date: "Aug 2024 - Dec 2024",
    name: "Get Out There",
    projType: "Academic Project",
    projIcon: angular,
    desc: "Collaborated in a group of 4 to develop a full-stack web application using Angular and MongoDB. Designed responsive user interfaces with Angular, integrated frontend with backend services, and utilized Postman to test APIs and performed CRUD operations on the MongoDB database.",
    tags: ["Angular", "NodeJS", "ExpressJS", "MongoDB", "Postman"],
    link: "https://github.com/pabbatitanvi/WebServices"
  },
  {
    date: "Aug 2024 - Dec 2024",
    name: "CanDo",
    projType: "Academic Project",
    projIcon: reactNative,
    desc: "Collaborated in a group of 4 to build a mobile task management app using React Native and Expo. Designed features for organizing personal and work-related tasks, and implemented Firebase for secure login authentication and real-time data storage.",
    tags: ["React Native", "Expo", "Firebase"],
    link: "https://youtu.be/Im8TNh-9nAI?si=Jk46ZuVQPJM5x_Jr"
  },
  {
    date: "May 2024 - Jul 2024",
    name: "Integrating Image Processing Algorithms with Dobot Magician",
    projType: "Research Project",
    projIcon: python,
    desc: "Investigated the integration of machine learning algorithms and image processing tools to enable a Dobot robot to draw an image. Implemented image processing tools, Canny edge detection, and OpenCV for accurate image interpretation. Applied NumPy and Matplotlib for image analysis, enabling the Dobot to precisely replicate the images.",
    tags: ["Canny Edge Detection", "OpenCV", "Numpy", "Matplotlib"],
    link: "https://github.com/pabbatitanvi/ResearchProject"
  },
  {
    date: "Aug 2023 - Dec 2023",
    name: "Joker's Jackpot Virtual Casino",
    projType: "Academic Project",
    projIcon: unity,
    desc: "Collaborated in a group of 3 to develop a card game using Unity and C#. Led the system design and architecture efforts, producing comprehensive documentation including system requirements, architectural diagrams, and UML diagrams such as use case, sequence, class, state, and activity models.",
    tags: ["Unity", "C#", "SDLC"],
    link: "https://drive.google.com/file/d/1_LqxT-zTm2eprKKPJLgdfPl1Jcnf8AVi/view?usp=sharing"
  },
  {
    date: "Aug 2023 - Dec 2023",
    name: "Dish Identification Web App",
    projType: "Academic Project",
    projIcon: python,
    desc: "Collaborated in a group of 4 to develop a web application that identifies dishes from uploaded food images using a machine learning model. Focused on data visualization by analyzing performance metrics of GoogleNet and TensorFlow models, and generated insightful graphs using Matplotlib to evaluate model accuracy and behavior.",
    tags: ["Python", "GoogleNet", "TensorFlow", "Matplotlib"],
    link: "https://github.com/ManasiP19/445DishIdentification"
  }
  ]
  return(
    <div className='projectPage' id='projects'>
      <div className='projTitle'>
        <h2>Projects/Experience</h2>
      </div>
      <div>
        <VerticalTimeline>
          {Object.entries(myProj).map(([key, value]) =>
            <VerticalTimelineElement
              key={key}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(56, 56, 56)', color: '#fff', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5), -2px -2px 5px rgba(255, 255, 255, 0.3)'}}
              contentArrowStyle={{ borderRight: '7px solid  rgb(56, 56, 56)' }}
              date={value.date}
              iconStyle={{ background: '#0EA5E9', color: '#fff' }}
              icon={value.projIcon} 
            >
              <a
                href={value.link}
                target="_blank"
                rel="noopener noreferrer"
                className='links'
              >
                <h3 className="vertical-timeline-element-title">{value.name} <TfiNewWindow className='newPWIcon' /></h3>
              </a>
              <h4 className="vertical-timeline-element-subtitle">{value.projType}</h4>
              <p style={{marginBottom: "10px"}}>
                {value.desc}
              </p>
              <div className='skills'>
                {value.tags.map((t) => (
                  <span>{t}</span>
                ))}
              </div>
            </VerticalTimelineElement>
          )}
        </VerticalTimeline>
      </div>
    </div>
  )

}

export default Projects;