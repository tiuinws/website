import logo from '../logo.png';
import '../styles/App.css';
import Projects from './Projects';
import Goals from './Goals';

const styles = {
  head: {
    justifyContent: "center",
    textAlign: "center",
  },
  container: {
    marginTop:"2rem",
    minHeight: "100vh",
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: "calc(8px + 2vmin)",
    color: "white",
    textAlign:"center"
  },
  component: {
    title: {
      textAlign: "center",
      padding: "15px",
      borderBottom: "2px solid white",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "230px"
    },
  }
}

function App() {
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.head}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>TI UINWS</h1>
          <p>Welcome to TI UIN Walisongo Semarang website 👋</p>
        </div>
        <Goals styles={styles} />
        <Projects styles={styles} />
        <h4>Ready To Join?</h4>
        <button style={{border:"none", cursor:"pointer",padding:"15px",borderRadius:"30px",outline:"none"}} onClick={() => alert('This feature is not implemented yet! 😛 Contact Abdur Rofi(2019) to join!')}>Join Now</button>
        <p style={{textAlign:"center"}}>😊 Happily brought to you by Alfian Hidayat 😁</p>
      </div>
    </div>
  );
}

export default App;
