import './EntryQuiz.css';

import { useState } from 'react';

import questionaire from "./../data/questionaire.json"

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

function QuestionaireElement({
  children,
  header = false,
  onClick = () => { },
  selected = false,
  keyName
}) {
  return <>
    <div onClick={() => onClick(keyName)} className={header ? "questionaire-header" : "questionaire-element"}
      style={{
        borderRadius: "30px",
        border: "black 2px solid",
        padding: header ? "8px" : "3px 12px",
        margin: "5px",
        width: header ? "80%" : "70%",
        background: selected ? "#517c91" : "",
        fontSize: header ? "2rem" : "1.6rem",
      }}>
      {children}
    </div></>
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
    onClick={grey ? () => { } : onClick}
  >
    {children}
  </div>
}

function Answers({ question, onClick, answer }) {
  if (question["type"] == "radio") {
    const answers = question["answers"].map(
      a => {
        return <QuestionaireElement keyName={a} key={a} selected={answer == a} onClick={onClick}>{a}</QuestionaireElement>
      }
    );
    return answers;
  } else if (question["type"] == "submit") {
    return <QuestionaireElement>
        Submit Questionaire
      </QuestionaireElement>
  }
  return <></>
}

function generateQuestionaireState(questions) {
  const initialState = questions.map(question => {
    if (question["type"] == "radio") {
      return "";
    }
    return "";
  })
  return initialState;
}

function EntryQuiz() {
  const [pageNum, setPageNum] = useState(0);
  const questions = questionaire.questions;
  const [userAnswers, setUserAnswers] = useState(generateQuestionaireState(questions))

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
          <Answers
            answer={userAnswers[pageNum]}
            question={questions[pageNum]}
            onClick={(value) => {
              if (
                !Boolean(userAnswers[pageNum]) && 
                questions[pageNum]["type"] == "radio"
              ) {
                nextPage();
              }
              setUserAnswers((prev) => {
                let new_state = [...prev]
                if (questions[pageNum]["type"] == "radio") {
                  new_state[pageNum] = value;
                }
                return new_state;
              })
            }} />
        </QuestionaireBox>
        <div style={{ display: "flex", padding: "10px" }}>
          <PageButton onClick={prevPage} grey={Boolean(pageNum <= 0)}>
            Prev
          </PageButton>
          <PageButton onClick={nextPage} right grey={pageNum >= questions.length - 1 || !Boolean(userAnswers[pageNum])}>
            Next
          </PageButton>
        </div>
      </header>
    </div >

  );
}

export default EntryQuiz;
