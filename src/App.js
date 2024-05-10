import logo from './logo.svg';
import './App.css';

import { Container, Row, Col, BootstrapProvider } from 'react-bootstrap';

function QuestionaireBox({ children }) {
  return <div style={{
    width: "100%",
    display: "flex"
  }}>
    <div style={{width: "20px"}}/>
    <div style={{
      width: "100%",
    }}>
      <div style={{
        margin: "5px",
        backgroundColor: "#D9D9D9",
        borderRadius: "15px",
        border: "black 2px solid",
        padding: "3px",
        maxWidth: "600px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {children}
      </div>
    </div>
    <div style={{width: "20px"}}/>
  </div>
}

function QuestionaireElement({ children }) {
  return <div style={{
    borderRadius: "15px",
    border: "black 2px solid",
    background: "#80C3E4",
    boxShadow: "14px 17px 56px -6px rgba(0,0,0,0.81)",
    margin: "5px",
    width: "80%"
  }}>
    {children}
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuestionaireBox>
          <QuestionaireElement>
            hello
          </QuestionaireElement>
        </QuestionaireBox>
      </header>
    </div >

  );
}

export default App;
