import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { motion } from "framer-motion";
import Skills from "./FullStackSkills";
import { ReactSVG } from "react-svg";
import MainIconsDark from "./GISSkillImage";
import ExperienceImg from '../../pages/experience/ExperienceImg'
import GISSkillImage from "./GISSkillImage";

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div className="skills-main-div">
              <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 2 }}>
                <div className="skills-image-div">
                  <Skills/>
                </div>
              </motion.div>

              <div className="skills-text-div">
                <motion.div initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </motion.div>
                <motion.div initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 1.5 }}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </motion.div>
                <motion.div initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 2 }}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="skills-main-div">
              <div className="skills-text-div">
                <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </motion.div>
                <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1.5 }}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </motion.div>
                <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 2 }}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
              <motion.div initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 2 }}>
                <div className="skills-image-div" style={{zIndex : 20}}>
                  {/* <GISSkillImage theme={theme} /> */}
                </div>
              </motion.div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillSection;
