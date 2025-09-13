import {Mortarboard, Award} from 'react-bootstrap-icons'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import './Education.css'

function Education(){

  const myAwards = [
    {
      name: "National Society of Leadership and Success",
      year: "2022 - Present"
    },
    {
      name: "Standout Senior",
      year: "2025"
    },
    {
      name: "Senior Design 1st Place Poster Winner",
      year: "2025"
    },
    {
      name: "Senior Design 3rd Place Video Winner",
      year: "2025"
    },
    {
      name: "Dean's List",
      year: "2023 - 2025"
    },
    {
      name: "Behrend Honors College",
      year: "2021 - 2023"
    },
  ]

  const { ref, inView } = useInView({ threshold: 0.3 });

  return(
    <motion.div
      ref={ref}
      id="education"
      className="eduPage"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className='eduTitle'>
          <h2>Education and Achievements</h2>
      </div>
      <div className='allBoxes'>
        <div className='eduInfoBox'>
          <div className='topPart'>
            <div className='icon'>
              <Mortarboard className='gradIcon'></Mortarboard>
            </div>
            <div className='gradText'>
              <h4 className='bsText'>BS in Computer Science</h4>
              <h6 className='clgText'>Penn State University - The Behrend College</h6>
              <small style={{ color: "#c1c3c4ff" }}>2021-2025</small>
              <small style={{ color: "#c1c3c4ff" }}><br></br>Erie, PA</small>
            </div>
          </div>
          <div className='bottomPart'>
            <div className='desc'>
              <p>Graduated from Penn State Behrend with a B.S. in Computer Science (May 2025), earning a GPA of 3.62/4.0. Completed a broad range of coursework and gained hands-on experience through academic projects, while actively contributing to student leadership organizations.</p>
            </div>
            <div className='skills'>
              <span>Data Structures and Algorithms</span>
              <span>Databases</span>
              <span>Software Design</span>
              <span>Operating Systems</span>
              <span>AI/ML</span>
              <span>Web Development</span>
              <span>Mobile Development</span>
              <span>Agile Methodologies</span>
            </div>
          </div>
        </div>
        <div className='eduInfoBox'>
          <div className='allAwards'>
            {myAwards.map((award, index) => (
              <motion.div
                key={award.name}
                className="award"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div>
                  <Award className='awardIcon'></Award>
                </div>
                <div className='awardText'>
                  <h6 className='awardName'>{award.name}</h6>
                  <small className='awardYear'>{award.year}</small>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Education;