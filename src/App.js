import logo from './logo.svg';
import './App.css';

import { Container, Row, Col, BootstrapProvider } from 'react-bootstrap';

function ProgressTile({children}) {
  return <div class="page-count" style={{
    color: "black",
    fontSize: "1rem",
    borderRadius: "30px",
    border: "black 2px solid",
    background: "white",
    boxShadow: "14px 17px 56px -6px rgba(0,0,0,0.41)",
    padding: "5px",
    margin: "10px"
  }}>
    {children}
  </div>
}

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
        borderRadius: "30px",
        border: "black 2px solid",
        boxShadow: "14px 17px 56px -6px rgba(0,0,0,0.41)",
        padding: "10px",
        maxWidth: "600px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative"
      }}>
        {children}
        <div style={{
          position: "absolute",
          right: "0",
          bottom: "0"
        }}>
          <ProgressTile>10/14</ProgressTile>
        </div>
      </div>
    </div>
    <div style={{width: "20px"}}/>
  </div>
}

function QuestionaireElement({ children, header=false }) {
  return <div style={{
    borderRadius: "30px",
    border: "black 2px solid",
    background: "#80C3E4",
    boxShadow: "14px 17px 56px -6px rgba(0,0,0,0.41)",
    padding: header ? "8px" : "3px",
    margin: "5px",
    width: header ? "80%" : "70%",
    fontSize: header ? "2rem" : "1.6rem"
  }}>
    {children}
  </div>
}

function PageButton({children, right=false}) {
  return <div style={{
    backgroundColor: "#D9D9D9",
    borderRadius: right ?  "0px 30px 30px 0px" : "30px 0px 0px 30px" ,
    border: "black 2px solid",
    borderRight: right ? "solid" : "none",
    boxShadow: "14px 17px 56px -6px rgba(0,0,0,0.41)",
    padding: "10px",
    color: "black",
    zIndex: "100"
  }}>
    {children}
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuestionaireBox>
          <QuestionaireElement header>
            What is your main method of transportation?
          </QuestionaireElement>
          <QuestionaireElement>
            there
          </QuestionaireElement>
          <QuestionaireElement>
            there
          </QuestionaireElement>
          <QuestionaireElement>
            there
          </QuestionaireElement>
          <QuestionaireElement>
            there
          </QuestionaireElement>
        </QuestionaireBox>
        <div style={{display: "flex", padding: "10px"}}>
          <PageButton>
            Prev
          </PageButton>
          <PageButton right>
            Next
          </PageButton>
        </div>
      </header>
    </div >

  );
}

export default App;
