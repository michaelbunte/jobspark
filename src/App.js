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

function QuestionaireElement({ children, header = false, onClick = () => { } }) {
  return <div onClick={onClick} className={header ? "questionaire-header" : "questionaire-element"}
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
  grey,
  onClick = () => { }
}) {
  return <div className={grey ? "questionaire-greyed" : "questionaire-next"}
    style={{
      opacity: grey ? "0.5" : "1",
      borderRadius: right ? "0px 30px 30px 0px" : "30px 0px 0px 30px",
      border: "black 2px solid",
      borderLeft: right ? "none" : "solid",
      boxShadow: "14px 17px 56px -6px rgba(0,0,0,0.41)",
      padding: "10px",
      color: "black",
      zIndex: "100",
    }}
    onClick={grey ? ()=>{} : onClick}
  >
    {children}
  </div>
}

function Answers({ question, onClick }) {
  if (question["type"] == "radio") {
    const answers = question["answers"].map(
      answer => <QuestionaireElement onClick={onClick}>{answer}</QuestionaireElement>
    )
    return answers;
  }
  return <></>
}

function App() {
  const [pageNum, setPageNum] = useState(0);
  const questions = questionaire.questions;

  function nextPage() {
    setPageNum((prevPage) => {
      return prevPage >= questions.length - 1 ? questions.length - 1 : prevPage + 1;
    })
  }

  function prevPage() {
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
          <QuestionaireElement nextPage={nextPage} header>
            {questions[pageNum]["question"]}
          </QuestionaireElement>
          <Answers question={questions[pageNum]} onClick={nextPage} />
        </QuestionaireBox>
        <div style={{ display: "flex", padding: "10px" }}>
          <PageButton onClick={prevPage}>
            Prev
          </PageButton>
          <PageButton onClick={nextPage} right grey>
            Next
          </PageButton>
        </div>
      </header>
    </div >

  );
}

export default App;
