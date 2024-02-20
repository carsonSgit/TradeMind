import { Link } from 'react-router-dom'
import './Home.css'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    let navigate = useNavigate();

    return (
        <>
            <div className={"landingContainer"}>
                <link href="https://fonts.cdnfonts.com/css/norwester" rel="stylesheet" />         

                <img src="../hero.jpg"></img>
                <div className='titleContainer'>
                    <h1>TRADEMIND</h1>
                    <div className='buttonContainer'>
                        <button>Our Mission</button>
                        <button onClick={() => navigate('about')}>Our Team</button>
                        <button>Our Product</button>
                    </div>
                </div>
            </div>
            <div className={'wave-container'}></div>
            <div className={'contentContainer'} >
                <h1>Content will go under heresies</h1>
            </div>
        </>
    )
}