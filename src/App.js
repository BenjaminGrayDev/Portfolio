import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { settings } from "./portfolio";
import ReactGA from "react-ga";
import StarsCanvas from "./components/StarBackground";

const styles = {
  container: {
    position: "relative", // Makes this the reference point for absolute positioning
    width: "100%",
    height: "100vh", // Full viewport height
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1, // Lower z-index to place it behind
  },
  foreground: {
    position: "relative",
    zIndex: 2, // Higher z-index to place it above
    padding: "20px",
    color: "#fff",
  },
};

function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div style={styles.container}>
          <div style={styles.background}>
            <StarsCanvas/>
          </div>
          <div style={styles.foreground}>
            <Main theme={themes[theme]} setTheme={setTheme} />
          </div>  
        </div>
      </>
    </ThemeProvider>
  );
}




export default App;