import './Header.css'
import ImgArrowDown from '../../assets/arrow-down.svg'

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <a href="#">SHAPEVOICE</a>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Product <img src={ImgArrowDown} alt="" /></a></li>
                    <li><a href="#">Template<img src={ImgArrowDown} alt="" /></a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
            </nav>
            <div className="button-group">
                <a href="#">Sign In</a>
                <button>Start Free</button>
            </div>
        </div>
    )
}


export default Header