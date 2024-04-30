import React from "react";

function Footer() {
    return (
        <div style={styles.outerFooter}>
            <div className="firstColFooter" style={styles.column}>
                <label>Doormat Navigation</label>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Testimonials</li>
                    <li>Specials</li>
                </ul>
            </div>
            <div className="secondColFooter"  style={styles.column}>
                <label>Contact</label>
                <ul>
                    <li>Address:</li>
                    <li>Email:</li>
                    <li>Phone:</li>
                    <li>more?</li>
                </ul>
            </div>
            <div className="thirdColFooter"  style={styles.column}>
                <label>Socials</label>
                <ul>
                    <li>X:</li>
                    <li>Instagram:</li>
                    <li>LinkedIn:</li>
                    <li>Github LOLS:</li>
                </ul>
            </div>
        </div>
    )
}
const styles = {
    outerFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}
export default Footer;