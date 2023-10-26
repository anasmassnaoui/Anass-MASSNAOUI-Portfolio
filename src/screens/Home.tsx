import React from 'react';
import { StyleSheet } from '../utils/stylesheet';
import logo from '../resources/svg/logo.svg';

const Home = () => {

    return (
        <div style={styles.container}>
            <div style={styles.innerContainer}>
                <img style={styles.logo} src={logo} alt="logo"/>
                <p style={StyleSheet.compose([styles.text, styles.textStoke])}>HEY, I AM</p>
                <h3 style={styles.text}>Anass MASSNAOUI</h3>
                <p style={StyleSheet.compose([styles.text, styles.textStoke])}>YOU CAN CALL ME</p>
                <p style={styles.text}>Akai</p>
                <p style={StyleSheet.compose([styles.text, styles.title])}>I am a software engineer, full-stack developer</p>
                <p style={StyleSheet.compose([styles.text, styles.title])}>& app developer</p>
            </div>
        </div>
    );
};

export { Home };

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        backgroundColor: '#333',
        color: '#fff',
    },
    innerContainer: {
        backgroundImage: 'linear-gradient(180deg,rgba(17,17,17,.51),#111),url(https://assets.website-files.com/56b9f7a…/5d71089…_cartographer_%402X.png)',
        backgroundPosition: '0 0,50% 0',
        backgroundSize: 'auto,contain',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    logo: {
        position: 'absolute',
        top: 10,
        left: 10,
        width: '43px',
        height: '34px',
    },
    text: {
        margin: 0,
        fontFamily: 'Roboto',
        letterSpacing: '.05rem',
        fontWeight: '800',
        fontSize: '2.5rem',
        color: '#ababab',
    },
    textStoke: {
        WebkitTextStroke: '2px #ababab',
        color: 'transparent',
    },
    title: {
        fontSize: '1.25rem',
        color: '#ffffff',
    },
});
