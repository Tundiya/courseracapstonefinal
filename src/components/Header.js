import React from "react";
import logo from '../assets/icons_assets/Logo.svg';

function Header() {
    return (
        <div>
            <img src={logo} alt="Logo for the header" style={styles.imageBox} />
        </div>
    )
}
const styles = {
    imageBox: {
        
    }
}
export default Header;