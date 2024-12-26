import React from "react";
import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from "./Skill_Index";
import SkillDataProvider from "./SkillDataProvider";
import './Skills.css';
const Skills = () => {
  return (
    <section
      id="skills"
      className="skills-1"
      style={{ transform: "scale(0.9)" }} // Fixed the missing closing parenthesis
    >

      {/* Skill sections */}
      {[Skill_data, Frontend_skill, Backend_skill, Full_stack, Other_skill].map(
        (skills, sectionIndex) => (
          <div
            key={sectionIndex}
            className="skills-2"
          >
            {skills.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        )
      )}

      {/* Background video */}
      <div className="skills-3">
        <div className="skills-4">
          <video
            className="skills-5"
            preload="none" // React encourages using 'none' over 'false'
            playsInline
            loop
            muted
            autoPlay
            src={require(`../../assets/images/cards-video.webm`)}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
