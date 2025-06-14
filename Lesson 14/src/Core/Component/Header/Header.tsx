import { headerRoutes } from "../../../routes";
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-logo"><Link to={'/'}>Shop</Link></div>
                <nav className="header-nav">
                    <ul className="header-list">
                        {headerRoutes.map(({ path, label }) => <li key={path} className='header-link'><NavLink to={path}>{label}</NavLink> </li>)}
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;
