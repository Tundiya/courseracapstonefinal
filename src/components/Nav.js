import React from "react";
import {Routes, Route, Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul style={styles.navRow}>
                <li>
                    <Link to='/src/components/' style={styles.navItem}><button style={styles.buttonItem}>Home</button></Link>
                </li>
                <li>
                    <Link style={styles.navItem}><button style={styles.buttonItem}>About</button></Link>
                </li>
                <li>
                    <Link style={styles.navItem}><button style={styles.buttonItem}>Menu</button></Link>
                </li>
                <li>
                    <Link style={styles.navItem}><button style={styles.buttonItem}>Reservations</button></Link>
                </li>
                <li>
                    <Link style={styles.navItem}><button style={styles.buttonItem}>Order Online</button></Link>
                </li>
                <li>
                    <Link style={styles.navItem}><button style={styles.buttonItem}>Login</button></Link>
                </li>
            </ul>
        </nav>
    )
}
const styles = {
    navRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //padding: '10px',
        listStyleType: 'none',
    },
    navItem: {
        //padding: '10px',
        marginLeft: '0px',
    },
    buttonItem: {
       fontSize: '20px',
       fontWeight: 'bold',
       border: 'none',
    }
}
export default Nav;