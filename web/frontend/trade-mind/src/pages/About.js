import './About.css';
import AboutPageImage from "../components/AboutPageImage";
import AboutPageText from "../components/AboutPageText";



export default function About() {
    const cristianoSummary = "Hey! I’m Cristiano, a junior software developer with a passion for computer science. I am currently an intern at CAE and the time" + 
    "I’ve spent there has only served to further encourage me to pursue a career in this field. I believe the keys to success for any project are good " + 
    "planning, regular meetings and plenty of documentation. When I have some time off, I love spending time with friends and meeting new people!"


    const cristianoPortfolio = "https://cristiano-fazi.github.io/"
    const cristianoLinkedIn = "https://www.linkedin.com/in/cristiano-fazi-b21584208/"
    const cristianoGithub = 'https://github.com/Cristiano-Fazi';
    const cristianoEmail = "cristiano.fazi@bell.net";

    const kevinSummary = "Hello! I'm Kevin, a passionate computer science enthusiast who enjoys programming and solving problems. " + 
    "From a young age, I've always been fascinated by the world of computers. Because of that, I've dedicated my academic and" + 
    " professional journey to this field of work. When I'm not coding, you can find me riding my motorcycle, going to the gym, snowboarding or " + 
    "just hanging out with my friends and family.";
    const kevinPortfolio = "https://kbaggott1.github.io/";
    const kevinLinkedIn = "https://www.linkedin.com/in/kevin-baggott-2135a4241/"
    const kevinGithub = "https://github.com/kbaggott1";
    const kevinEmail = "kevin.baggott1@gmail.com";

    const carsonSummary = "Hi, my name is Carson! I'm currently a 3rd year computer science student with a focus on software development! " + 
    "My first experience with coding was an extra-curricular program at the YMCA for a Web Programming course back in 2018. Having not been a big fan of school, I was really surprised at how much I enjoyed taking that course. " + 
    "Hobby-wise, I spend most of my free time either listening to music or working out.";
    const carsonPortfolio = "https://carsonsgit.github.io/";
    const carsonLinkedIn = "https://www.linkedin.com/in/carson-spriggs-audet-609372217/"
    const carsonGithub = "https://github.com/carsonSgit";
    const carsonEmail = "carsonspriggs8@gmail.com";

    const cindySummary = "Hi there, I'm Cindy, currently a third-year Computer Science student at John Abbott College. " + 
    "My passion for computers and technology has been with me since childhood. In my free time, " + 
    "you can often find me working out, diving into a good book, or enjoying some music.";
    const cindyPortfolio = "https://cindy-coulibaly.github.io/";
    const cindyLinkedIn = "https://www.linkedin.com/in/cindy-coulibaly-93543b294/"
    const cindyGithub = "https://github.com/Cindy-Coulibaly";
    const cindyEmail = "";

    const felixSummary = "I'm a junior game developer with a keen interest in AI, I bring a diverse skill set and a passion for innovation." + 
    "a junior game developer with a keen interest in AI, I bring a diverse skill set and a passion for innovation." + 
    "Let's work together to create something great!";
    const felixPortfolio = "https://github.com/Felixs123";
    const felixLinkedIn = "https://www.linkedin.com/in/felix-st-laurent-816aa12b3/"
    const felixGithub = "https://github.com/Felixs123";
    const felixEmail = "felix.stlaurent123@gmail.com";

    return (
        <div className="container">
          <div className="row">
            <AboutPageImage imageUrl="../about/kevin.webp" side="left" />
            <AboutPageText textContent={kevinSummary} nameContent="Kevin Baggott" side="right" site={kevinPortfolio} github={kevinGithub} linkdin={kevinLinkedIn} email={kevinEmail}/>
          </div>
          <div className="row">
            <AboutPageImage imageUrl="../about/cristianoImage.jpg" side="right" />
            <AboutPageText textContent={cristianoSummary} nameContent="Cristiano Fazi" side="left" site={cristianoPortfolio} github={cristianoGithub} linkdin={cristianoLinkedIn} email={cristianoEmail}/>
          </div>
          <div className="row">
            <AboutPageImage imageUrl="../about/carsonspriggs.jpg" side="right" />
            <AboutPageText textContent={carsonSummary} nameContent="Carson Spriggs" side="right" site={carsonPortfolio} github={carsonGithub} linkdin={carsonLinkedIn} email={carsonEmail}/>
          </div>
          <div className="row">
            <AboutPageImage imageUrl="logo512.png" side="right" />
            <AboutPageText textContent={felixSummary} nameContent="Felix St-Laurent" side="left" site={felixPortfolio} github={felixGithub} linkdin={felixLinkedIn} email={felixEmail}/>
          </div>
          <div className="row">
            <AboutPageImage imageUrl="../about/cindyIcon.jpg" side="right" />
            <AboutPageText textContent={cindySummary} nameContent="Cindy Coulibaly" side="right" site={cindyPortfolio} github={cindyGithub} linkdin={cindyLinkedIn} email={cindyEmail}/>
          </div>
        </div>
      );
}