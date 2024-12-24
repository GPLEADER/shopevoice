import './Sponsor.css'

// images
import Oracle from '../../assets/sponsor/oracle.svg'
import Morpheus from '../../assets/sponsor/morpheus.svg'
import Samsung from '../../assets/sponsor/samsung.svg'
import Monday from '../../assets/sponsor/monday.svg'
import Segment from '../../assets/sponsor/segment.svg'


function Sponsor() {
    return (
        <section className='sponsor'>
            <h2>Trusted By Over 100+ Startups and freelance business</h2>
            <div className="companies">
                <a target='_blanck' href="https://www.oracle.com/"> <img src={Oracle} alt="" /></a>
                <a target='_blanck' href="https://morpheusdata.com/"><img src={Morpheus} alt="" /></a>
                <a target='_blanck' href="https://www.samsung.com/uz_ru/">   <img src={Samsung} alt="" /></a>

                <a target='_blanck' href="https://monday.com/lang/ru"><img src={Monday} alt="" /></a>
                <a target='_blanck' href="https://segment.com/">  <img src={Segment} alt="" /></a>

            </div>
        </section>
    )
}


export default Sponsor