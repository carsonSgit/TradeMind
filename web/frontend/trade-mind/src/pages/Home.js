import '../styles/Home.css'
import HomePageText from '../components/HomePageText';
import HomePageImage from '../components/HomePageImage';

export default function Home() {
    const missionStatement = "At our core, we're driven by the belief that artificial intelligence can transform " +  
    "the way we understand and navigate the stock market. Our mission is simple: to provide everyday investors with powerful insights and predictive " +
    "analysis that empower them to make smarter decisions. We're committed to using the latest AI techniques to decode the complexities of the stock " + 
    "market, giving people the confidence and tools they need to thrive in the world of investing. Together, we're reshaping the future of finance, " + 
    "one prediction at a time.";

    const teamStatement = "Our team consist of five passionate junior software developers driven by a shared enthusiasm for finance, artificial intelligence " +   
    "and computer science. Thanks in large part to our unique combination of professional and academic experience we were able to create a product that can " +
    "provide real value to anyone looking to invest their money in the stock market. As we move forward both with TradeMind and beyond each of us is eager " +
    "to face new challenges and build new products that can provide real value to our users. ";

    const productStatement = "TradeMind is an AI-driven system engineered for stock market prediction. The goal for TradeMind is to allow people without the time " +
    "to study the stock market an opportunity to trade stocks with confidence. Our product has been trained on large quantities of data which allows it to accurately " + 
    "determine long term future stock prices. Thanks to our dedication as well as extensive training and testing, we have ensured you can put your full confidence in our product. "

    return (
        <>
            <div className={"landingContainer"}>
                <link href="https://fonts.cdnfonts.com/css/norwester" rel="stylesheet" />         

                {/* <img src="../hero_animated.webp"></img> */}
                <video autoPlay={true} loop={true} muted={true} playsInline={true}>
                    <source src="../hero_video.mp4" type='video/mp4'></source>
                    Your browser does not support the video tag.
                </video>
                <div className='titleContainer'>
                    <h1>TRADEMIND</h1>
                    <div className='buttonContainer'>
                        <button onClick={() => {document.getElementById('OurMissionSection').scrollIntoView()}} >Our Mission</button>
                        <button onClick={() => {document.getElementById('OurTeamSection').scrollIntoView()}}>Our Team</button>
                        <button onClick={() => {document.getElementById('OurProductSection').scrollIntoView()}}>Our Product</button>
                    </div>
                </div>
            </div>
            <div className='wave-container'>
                <div class="custom-shape-divider-bottom-1708470298">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>

            <div className={'contentContainer'} >
                <div id='OurMissionSection'></div>
                <div className="home-page-row-container row">
                    <HomePageText text={missionStatement} title="Our Mission" side="left"></HomePageText>
                    <HomePageImage imageUrl="../home/MotivationIconRobot.webp" side="right"></HomePageImage>
                </div>
                <div id='OurTeamSection'></div>
                <div className="home-page-row-container row">
                    <HomePageText text={teamStatement} title="Our Team" side="right"></HomePageText>
                    <HomePageImage imageUrl="../home/group.webp" side="left"></HomePageImage>
                </div>
                <div id='OurProductSection'></div>
                <div className="home-page-row-container row">
                    <HomePageText text={productStatement} title="Our Product" side="left"></HomePageText>
                    <HomePageImage imageUrl="../home/OurMissionIconRobot.webp" side="right"></HomePageImage>
                </div>
            </div>
        </>
    )
}