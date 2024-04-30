import React from "react";
import heroFood from '../assets/icons_assets/restauranfood.jpg';

function Main() {
    return (
        <div style={styles.mainContentSection}>
            <div className="heroSection">
                <div style={styles.heroBackground}>
                    <div style={styles.heroBackFix}>
                        <div style={styles.heroTextBox}>
                            <h3 style={styles.heroTitle}>Little Lemon</h3>
                            <h5 style={styles.heroSubTitle}>Chicago</h5>
                            <text style={styles.heroWriteUp}>We are a family owned <br></br> Mediteranean restaurant,<br></br> focused on traditional<br></br> recipes served with a modern<br></br> twist.</text>
                            <button style={styles.reserveButton}>Reserve a Table</button>
                        </div>
                        <div>
                            <img src={heroFood} style={styles.heroFood} />
                        </div>
                    </div>
                </div>
                <div style={styles.heroContent}>
                </div>
            </div>
        </div>
    )
}
const styles = {
    mainContentSection: {

    },
    heroBackground: {
        backgroundColor: '#495E57',
        height: '300px',
        marginLeft: '-600px',
        marginRight: '-600px',
        padding: '0px',

    },
    heroContent: {

    },
    heroBackFix: {
        marginLeft: '30%',
        marginRight: '30%',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heroTitle: {
        fontSize: '64px',
        color: '#F4CE14',
        fontFamily: 'Markazi Text',
        marginTop: '0px',
        fontWeight: 500,
        marginBottom: '0px',
    },
    heroFood: {
        width: '300px',
        height: '340px',
        borderRadius: '16px',
        marginTop: '20px',
    },
    heroTextBox: {
        display: 'flex',
        flexDirection: 'column',
    },
    heroSubTitle: {
        fontFamily: 'Markazi Text',
        fontWeight: 400,
        fontSize: '40px',
        marginTop: '0px',
        marginBottom: '10px',
        color: 'white',
    },
    heroWriteUp: {
        marginTop: '0px',
        color: 'white',
    },
    reserveButton: {
        borderRadius: '16px',
        backgroundColor: '#F4CE14',
        height: '40px',
        width: '200px',
        transition: 'background-color 0.3s',
        cursor: 'pointer',
        marginTop: '4px',
    },
    'reserveButton:hover': {
        backgroundColor: '#CAA909',
    }
}
export default Main;