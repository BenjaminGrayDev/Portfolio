import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <motion.div
        initial={{ opacity: 0 }} // Start fully transparent
        animate={{ opacity: 1 }} // Fade in to fully visible
        transition={{ duration: 1.5 }} // Animation duration of 1.5 seconds
      >
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made by <span role="img" aria-label="heart">❤️</span>  {greeting.title2}
        </p>
      </motion.div>
    </div>
  );
}
