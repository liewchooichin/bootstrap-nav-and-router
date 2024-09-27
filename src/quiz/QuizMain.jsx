import Stack from "react-bootstrap/Stack"
import ListGroup from "react-bootstrap/ListGroup";
import { Link, Outlet } from "react-router-dom";
import { useState, useReducer } from "react";
import { quizReducer } from "./quizReducer";
import { quizData } from "./quizData";
import Button from "react-bootstrap/Button";
import { startQuizReducer } from "./startQuizReducer";
import { QuestionPage } from "./QuestionPage";


/**Keep the questions at the top components so that the
 * child components can read the state through props.
 */
export function QuizMain(){
  /**The list of questions */
  const [questionList, questionListDispatch] 
    = useReducer(quizReducer, quizData);
  /**Whether users want to start the quiz */
  const [isStartQuiz, startQuizDispatch] = useReducer(startQuizReducer, false);

  /**Event handler */
  function handleBtnStart(){
    startQuizDispatch({
      type: "quiz_start",
    })
  }
  function handleBtnQuit(){
    startQuizDispatch({
      type: "quiz_quit",
    })
  }

  let quizSection;
  if(isStartQuiz){
    quizSection = (
      <>
      <Button
        type="button"
        id="btnStart"
        name="btnStart"
        onClick={handleBtnQuit}
      >Quit
      </Button>
      <QuestionPage questionList={questionList}></QuestionPage>
      {/* <Link to="/quiz/1">Question 1</Link>
      <Outlet /> */}
      </>
    )
  }
    else {
      quizSection = (
        <>
        <p>Click the button to start a quiz.</p>
        </>)
    }
  

  return(
    <>
      <h1>Quiz</h1>
      <p>Challenge your knowledge. Start the quiz.</p>
      
      <Button
        type="button"
        id="btnStart"
        name="btnStart"
        onClick={handleBtnStart}
      >Start
      </Button>
      
      {quizSection}
    </>
  )
}


