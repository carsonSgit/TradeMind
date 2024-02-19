import './About.css';
import AboutPageImage from "../components/AboutPageImage";
import AboutPageText from "../components/AboutPageText";



export default function About() {
    const cristianoSummary = "I'm a junior software developer that is dedicated to crafting efficient and user friendly solutions." + 
    "With expertise in numerous technologies thanks to both my education and work experience, I can provide solutions using a great range of technologies." + 
    "Let's work together to create something great!";
    const cristianoLinkedIn = "https://www.linkedin.com/in/cristiano-fazi-b21584208/"

    const kevinSummary = "Hello! I'm Kevin, a passionate computer science enthusiast who enjoys programming and solving problems. " + 
    "From a young age, I've always been fascinated by the world of computers. Because of that, I've dedicated my academic and" + 
    " professional journey to this field of work. When I'm not coding, you can find me riding my motorcycle, going to the gym, snowboarding or " + 
    "just hanging out with my friends and family.";
    const kevinLinkedIn = "https://www.linkedin.com/in/kevin-baggott-2135a4241/"

    const carsonSummary = "Hi, my name is Carson! I'm currently a 3rd year computer science student with a focus on software development! " + 
    "My first experience with coding was an extra-curricular program at the YMCA for a Web Programming course. Having not been a big fan of school, I was really surprised at how much I enjoyed taking that course. " + 
    "Hobby-wise, I spend most of my free time either listening to music or working out.";
    const carsonLinkedIn = "https://www.linkedin.com/in/carson-spriggs-audet-609372217/"

    const cindySummary = "I'm a junior software developer that is dedicated to crafting efficient and user friendly solutions." + 
    "With expertise in numerous technologies thanks to both my education and work experience, I can provide solutions using a great range of technologies." + 
    "Let's work together to create something great!";
    const cindyLinkedIn = "https://www.linkedin.com/in/cindy-coulibaly-93543b294/"

    const felixSummary = "I'm a junior game developer with a keen interest in AI, I bring a diverse skill set and a passion for innovation." + 
    "a junior game developer with a keen interest in AI, I bring a diverse skill set and a passion for innovation." + 
    "Let's work together to create something great!";
    const felixLinkedIn = "https://www.linkedin.com/in/felix-st-laurent-816aa12b3/"

    return (
        <div className="container">
          <div className="row">
            <AboutPageImage imageUrl="logo512.png" side="left" />
            <AboutPageText textContent={cristianoSummary} nameContent="Cristiano Fazi" side="right" link={cristianoLinkedIn} />
          </div>
          <div className="row">
            <AboutPageImage imageUrl="about/kevin.webp" side="right" />
            <AboutPageText textContent={kevinSummary} nameContent="Kevin Baggott" side="left" link={kevinLinkedIn} />
          </div>
          <div className="row">
            <AboutPageImage imageUrl="about/carsonspriggs.jpg" side="right" />
            <AboutPageText textContent={carsonSummary} nameContent="Carson Spriggs" side="right" link={carsonLinkedIn}/>
          </div>
          <div className="row">
            <AboutPageImage imageUrl="logo512.png" side="right" />
            <AboutPageText textContent={felixSummary} nameContent="Felix St-Laurent" side="left" link={felixLinkedIn}/>
          </div>
          <div className="row">
            <AboutPageImage imageUrl="logo512.png" side="right" />
            <AboutPageText textContent={cindySummary} nameContent="Cindy Coulibaly" side="right" link={cindyLinkedIn}/>
          </div>
        </div>
      );
}