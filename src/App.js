import './App.css';

import { useState } from 'react';

import questionaire from "./data/questionaire.json"

function ProgressTile({ children }) {
  return <div className="page-count" style={{
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

function QuestionaireBox({
  children,
  pageNum,
  numberOfPages
}) {
  return <div style={{
    width: "100%",
    display: "flex"
  }}>
    <div style={{ width: "20px" }} />
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
          <ProgressTile>{pageNum}/{numberOfPages}</ProgressTile>
        </div>
      </div>
    </div>
    <div style={{ width: "20px" }} />
  </div>
}

function QuestionaireElement({ children, header = false }) {
  return <div className={header ? "questionaire-header" : "questionaire-element"}
    style={{
      borderRadius: "30px",
      border: "black 2px solid",
      padding: header ? "8px" : "3px",
      margin: "5px",
      width: header ? "80%" : "70%",
      fontSize: header ? "2rem" : "1.6rem"
    }}>
    {children}
  </div>
}

function PageButton({
  children,
  right = false,
  onClick = () => { }
}) {
  return <div className="questionaire-next"
    style={{
      borderRadius: right ? "0px 30px 30px 0px" : "30px 0px 0px 30px",
      border: "black 2px solid",
      borderRight: right ? "solid" : "none",
      boxShadow: "14px 17px 56px -6px rgba(0,0,0,0.41)",
      padding: "10px",
      color: "black",
      zIndex: "100"
    }}
    onClick={onClick}
  >
    {children}
  </div>
}

function App() {
  const [pageNum, setPageNum] = useState(0);
  const questions = questionaire.questions;

  function next_page() {
    setPageNum((prevPage) => {
      return prevPage >= questions.length - 1 ? questions.length - 1 : prevPage + 1;
    })
  }

  function prev_page() {
    setPageNum((prevPage) => {
      return prevPage <= 0 ? 0 : prevPage - 1;
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{
          color: "rgba(0,0,0,0.6)",
          fontSize: "3rem",
          marginBottom: "10px"
        }}>
          JobSpark
        </div>
        <QuestionaireBox pageNum={pageNum + 1} numberOfPages={questions.length}>
          <QuestionaireElement header>
            {questions[pageNum]["question"]}
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
        <div style={{ display: "flex", padding: "10px" }}>
          <PageButton onClick={prev_page}>
            Prev
          </PageButton>
          <PageButton onClick={next_page} right>
            Next
          </PageButton>
        </div>
      </header>
    </div >

  );
}

export default App;
