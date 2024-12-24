import './Hero.css'
import playImg from '../../assets/play-btn.svg'
import bigBgDesign from '../../assets/big-bg-design.svg'
import firstSmallDesign from '../../assets/first-small-design.svg'
import secondSmallDesign from '../../assets/second-small-design.svg'

function Hero() {
    return (
        <section className='hero'>
            <img className='firstSmall' src={firstSmallDesign} alt="" />
            <img className='secondSmall' src={secondSmallDesign} alt="" />
            <img className='bigDesign' src={bigBgDesign} alt="" />
            <div className="hero-content">
                <h1>Managing business payments has never been easier</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything.</p>
                <div className="hero-btn-group">
                    <button>Our Process</button>
                    <div className='work-play-btn'>
                        <button><img src={playImg} alt="" /></button>
                        <span>See How It Works</span>
                    </div>
                </div>
            </div>
            <div className='hero-form'>
                <h2>Get Started for Free</h2>
                <form>
                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />
                    <button type='button'>GET STARTED</button>
                </form>
            </div>
        </section>
    )
}

export default Hero