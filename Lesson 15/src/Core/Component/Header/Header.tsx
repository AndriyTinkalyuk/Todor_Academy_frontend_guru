import { Link, NavLink } from "react-router-dom";
import { headerRoutes } from "../../../routes";
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                Logo
            </div>
            <nav className="header-nav">
                <ul className="header-list">
                    {
                        headerRoutes.map(({ path, label }) => <li className="header-li" key={path}><NavLink to={path}>{label}</NavLink></li>)
                    }
                </ul>
            </nav>
        </div>
    )
};

export default Header;
