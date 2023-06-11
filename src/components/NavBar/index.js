import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"


const NavBar = () => {

    return (
        <div className="navBar bg-red-200 p-3.5 flex justify-center shadow-md">
            <div className="navBarInner flex justify-between" style={{width: 1200}}>
                <div className="navBarLogoContainer flex items-center">
                    <Link to="/" className="flex  items-center">
                        <img src={logo} alt="" className="max-h-12"/>
                        <h2 className="text-stone-600 ml-2.5 text-3xl"><strong className="text-stone-800">Movie</strong>DB</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar