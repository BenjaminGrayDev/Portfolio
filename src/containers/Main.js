import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

export default function Main(propss) {
  if (settings.isSplash) {
    return (
      <div>
        <BrowserRouter basename="/">
          <Routes>
            <Route
              path="/"
              element={<Splash theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/home"
              element={<Home theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/experience"
              element={
                <Experience theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route
              path="/education"
              element={
                <Education theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route
              path="/contact"
              element={<Contact theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/splash"
              element={<Splash theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/projects"
              element={<Projects theme={propss.theme} setTheme={propss.setTheme} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div>
        <BrowserRouter basename="/">
          <Routes>
            <Route
              path="/"
              element={<Home theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/home"
              element={<Home theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/experience"
              element={
                <Experience theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route
              path="/education"
              element={
                <Education theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route
              path="/contact"
              element={<Contact theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/projects"
              element={<Projects theme={propss.theme} setTheme={propss.setTheme} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
