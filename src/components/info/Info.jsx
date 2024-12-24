import './Info.css'

import firstCard from '../../assets/info/firstCard.svg'
import secondCard from '../../assets/info/secondCard.svg'
import thirdCard from '../../assets/info/thirdCard.svg'

function Info() {
    return (
        <section className='info'>
            <div className="info-content">
                <h2>Believing neglected so so allowance</h2>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>
                <button>We so opinion friends me message as delight.</button>
            </div>
            <div className="info-cards">
                <div className="card">
                    <div className="card-logo">
                        <img src={firstCard} alt="" />
                    </div>
                    <span>1</span>
                    <div className="card-content">
                        <h3>Led Ask Possible Mistress</h3>
                        <p>Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-logo">
                        <img src={secondCard} alt="" />
                    </div>
                    <span>2</span>
                    <div className="card-content">
                        <h3>Elegance Eat Likewise</h3>
                        <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode. </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-logo">
                        <img src={thirdCard} alt="" />
                    </div>
                    <span>3</span>
                    <div className="card-content">
                        <h3>Message Oram Nothing</h3>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info