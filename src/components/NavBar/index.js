import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/images/logo.png"


const NavBar = () => {

    return (
        <div className="navBar">
            <div className="navBarInner">
                <div className="navBarLogoContainer">
                    <Link to="/">
                        <img src={logo} alt=""/>
                        <h2><strong>Movie</strong>DB</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar