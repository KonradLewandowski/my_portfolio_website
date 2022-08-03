import React from "react";

import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import About from "./components/about/about.component";
import Experience from "./components/experience/experience.component";
import Services from "./components/services/services.component";
import Portfolio from "./components/portfolio/portfolio.component";
import Testimonials from "./components/testimonials/testimonials.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

import { AboutProvider } from "./context/about.context";

const App = () => (
  <>
    <Header />
    <Navigation />
    <AboutProvider>
      <About />
    </AboutProvider>
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
