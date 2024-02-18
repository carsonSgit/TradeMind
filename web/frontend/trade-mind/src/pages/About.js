import './About.css';
import AboutPageImage from "../components/AboutPageImage";
import AboutPageText from "../components/AboutPageText";



export default function About() {
    const cristianoSummary = "I'm a junior software developer that is dedicated to crafting efficient and user friendly solutions." + 
    "With expertise in numerous technologies thanks to both my education and work experience, I can provide solutions using a great range of technologies." + 
    "Let's work together to create something great!";
    const kevinSummary = "I'm a junior software developer that is dedicated to crafting efficient and user friendly solutions." + 
    "With expertise in numerous technologies thanks to both my education and work experience, I can provide solutions using a great range of technologies." + 
    "Let's work together to create something great!";
    const carsonSummary = "I'm a junior software developer that is dedicated to crafting efficient and user friendly solutions." + 
    "With expertise in numerous technologies thanks to both my education and work experience, I can provide solutions using a great range of technologies." + 
    "Let's work together to create something great!";
    const cindySummary = "I'm a junior software developer that is dedicated to crafting efficient and user friendly solutions." + 
    "With expertise in numerous technologies thanks to both my education and work experience, I can provide solutions using a great range of technologies." + 
    "Let's work together to create something great!";
    const felixSummary = "I'm a junior software developer that is dedicated to crafting efficient and user friendly solutions." + 
    "With expertise in numerous technologies thanks to both my education and work experience, I can provide solutions using a great range of technologies." + 
    "Let's work together to create something great!";

    return (
        <div className="container">
          <div className="row">
            <AboutPageImage imageUrl="logo512.png" side="left" />
            <AboutPageText textContent={cristianoSummary} nameContent="Cristiano Fazi" side="right" />
          </div>
          <div className="row">
            <AboutPageImage imageUrl="logo512.png" side="right" />
            <AboutPageText textContent={kevinSummary} nameContent="Kevin Baggott" side="left" />
          </div>
          <div className="row">
            <AboutPageImage imageUrl="logo512.png" side="right" />
            <AboutPageText textContent={carsonSummary} nameContent="Carson Spriggs" side="right" />
          </div>
          <div className="row">
            <AboutPageImage imageUrl="logo512.png" side="right" />
            <AboutPageText textContent={cindySummary} nameContent="Felix St-Laurent" side="left" />
          </div>
          <div className="row">
            <AboutPageImage imageUrl="logo512.png" side="right" />
            <AboutPageText textContent={felixSummary} nameContent="Cindy Coulibaly" side="right" />
          </div>
        </div>
      );
}