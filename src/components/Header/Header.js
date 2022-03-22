import './Header.css';
import logo from '../../assets/images/logo.png';

export const Header = function () {

    const altText = "Shop logo";

    return (
        <div className="Header">
            <img src={logo} alt={altText}/>
        </div>
    );

};