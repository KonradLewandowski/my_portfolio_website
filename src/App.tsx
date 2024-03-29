import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import About from "./components/about/about.component";
import Experience from "./components/familiar-technologies/familiar-technologies.component";
import Portfolio from "./components/portfolio/portfolio.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

import { AboutProvider } from "./context/about.context";
import { ExperienceProvider } from "./context/experience.context";
import { PortfolioProvider } from "./context/portfolio.context";

import GlobalStyle from "./components/global/global.styles";

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Navigation />
    <AboutProvider>
      <About />
    </AboutProvider>
    <ExperienceProvider>
      <Experience />
    </ExperienceProvider>
    <PortfolioProvider>
      <Portfolio />
    </PortfolioProvider>
    <Contact />
    <Footer />
  </>
);

export default App;
