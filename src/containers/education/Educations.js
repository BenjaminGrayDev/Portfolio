import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { motion } from "framer-motion";

function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 2 }}>
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </motion.div>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Educations;
