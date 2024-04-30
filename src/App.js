
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

const styles = {
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  },
  container: {
    // border: 'solid',
    // borderWidth: '2px',
    // borderColor:'orange',
    marginLeft: '30%',
    marginRight: '30%',
  }
}

export default App;
