import React from "react";
import "./Greeting.css";
import { greeting } from "../../portfolio";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { style } from "glamor";


export default function Greeting(props) {
  const theme = props.theme;
  const history = useNavigate();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <motion.div initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 4 }}>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                  className="greeting-text-p subTitle"
                  style={{ color: theme.secondaryText }}>
                  <span>I'm </span>
                  <span style={{ color: theme.accentColor }}>
                    {greeting.full_name}
                  </span>
                  <span>.</span>
              </p>
              <p className="greeting-text-p subTitle"
                  style={{ color: theme.secondaryText }}>
                {greeting.subTitle1}
              </p>
              <p className="greeting-text-p subTitle"
                  style={{ color: theme.secondaryText }}>
                {greeting.subTitle2}
              </p>
              <p className="greeting-text-p subTitle"
                  style={{ color: theme.secondaryText }}>
                {greeting.subTitle3}
              </p>
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    history("/contact");
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          <div className="greeting-image-div">
            <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/memoji.png`)}
                  alt=""
                />
              </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
