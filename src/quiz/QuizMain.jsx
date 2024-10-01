import Stack from "react-bootstrap/Stack"
import ListGroup from "react-bootstrap/ListGroup";
import { Link, Outlet } from "react-router-dom";
import { useState, useReducer } from "react";
import { quizReducer } from "./quizReducer";
import { quizData, quizLength } from "./quizData";
import Button from "react-bootstrap/Button";
import { startQuizReducer } from "./startQuizReducer";
import { QuestionPage } from "./QuestionPage";
import { answerStateReducer } from "./answerStateReducer";
import { initialAnswerList } from "./answerStateStructure";
import { scoreQuizReducer } from "./scoreQuizReducer";

/**Keep the questions at the top components so that the
 * child components can read the state through props.
 */
export function QuizMain(){
  /**The list of questions */
  const [questionList, questionListDispatch] 
    = useReducer(quizReducer, quizData);
  /**Whether users want to start the quiz */
  const [isStartQuiz, startQuizDispatch] = useReducer(startQuizReducer, false);
  const [answerStateList, answerStateDispatch] =
    useReducer(answerStateReducer, initialAnswerList);  
  const [scoreQuiz, scoreQuizDispatch] = useReducer(scoreQuizReducer, null);

  // Calculate the score using the static question data
  // and the answerStateList
  function calculateScore(){
    // for each item in the answerStateList,
    // get the questionId. Retrieve the question item from
    // the question data.
    // From the question item, get the answer id in the
    // question item. Compare the answer id wit the answer id
    // in the answerStateList.
    let result = 0;
    let numAnswered = 0;

    // Find out the number of question answered
    for(let i=0; i<answerStateList.length; i++){
      // if has been answered is true, increment the
      // numAnswered
      if(answerStateList[i].hasBeenAnswered){
        numAnswered = numAnswered + 1;
      }
    }

    for(let i=0; i<numAnswered; i++){
      const selectedAns = answerStateList[i];
      const quesItem = quizData.find((i)=>(
        i.id===selectedAns.questionId
      ));
      console.log(quesItem.questionText);
      const ansItem = quesItem.answers.find((i)=>(
        i.id===selectedAns.answerId
      ))
      console.log(ansItem.answerText, ansItem.correct);
      if(ansItem.correct){
        result = result + 1;
      }
    }
    return [result, numAnswered];
  }

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
  function handleBtnScore(){
    scoreQuizDispatch({
      type: "score_quiz"
    })
  }

  let quizSection;
  if(isStartQuiz){
    quizSection = (
      <>
      <Button className="me-3"
        type="button"
        id="btnStart"
        name="btnStart"
        onClick={handleBtnQuit}
      >Quit
      </Button>
      
      <Button className="me-3"
        type="button"
        id="btnScore"
        name="btnScore"
        onClick={handleBtnScore}
      >{scoreQuiz ? "Close Score" : "Show Score"}
      </Button>

      {scoreQuiz && (<><h3>Your score: </h3>
        <p>Correct: {calculateScore()[0]} out of {quizLength}</p>
        <p>Answered: {calculateScore()[1]} out of {quizLength}</p>
        </>)}

      <QuestionPage 
        questionList={questionList}
        answerStateList={answerStateList}
        answerStateDispatch={answerStateDispatch}
      ></QuestionPage>
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
      
      <Button className="me-3"
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


