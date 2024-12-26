import React from "react";
import "./DegreeCard.css";
import { motion } from "framer-motion";

function DegreeCard(props) {
  const { degree, theme } = props;

  const style_img = {
    width: "220px",
    height: "auto",
    borderRadius: "50%",
    padding: "10px",
    border: `1px solid ${theme.accentColor}`,
    marginRight: "50px",
    boxShadow: `0px 0px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    "@media (max-width: 768px)": {
      marginLeft: "50px",
      marginBottom: "15px",
      width: "175px",
    },
  };

  const card_body = {
    borderBottom: `1px solid ${theme.accentColor}`,
    borderLeft: `1px solid ${theme.accentColor}`,
    borderRight: `1px solid ${theme.accentColor}`,
    borderRadius: "7px",
    width: "90%",
    margin: "10px",
    boxShadow: `0px 1px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  };

  const button_visit = {
    textDecoration: "none",
    color: "rgba(255, 255, 255, 1)",
    background: `${theme.accentColor}`,
    padding: "15px 15px",
    marginTop: "25px",
    borderRadius: "4px",
    borderWidth: "0px",
    marginBottom: "20px",
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    fontFamily: "Google Sans Regular",
    fontSize: "17px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    ":hover": {
      boxShadow: `0 5px 10px ${theme.accentColor}`,
    },
  };

  return (
    <div className="degree-card">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div style={style_img}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            src={require(`../../assets/images/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div style={card_body}>
          <div
            className="body-header"
            style={{ backgroundColor: theme.accentColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className="body-content">
            {degree.descriptions.map((sentence, index) => (
              <p
                key={index}
                className="content-list"
                style={{ color: theme.text }}
              >
                {sentence}
              </p>
            ))}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                style={{
                  ...button_visit,
                  marginRight: "23px",
                  float: "right",
                  backgroundColor: theme.accentColor,
                }}
              >
                Visit Website
              </motion.button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DegreeCard;
