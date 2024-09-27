import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { quizLength } from "./quizData";
import Button from "react-bootstrap/Button";

QuestionPage.propTypes = {
  questionList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    questionText: PropTypes.string.isRequired,
    hintText: PropTypes.string.isRequired,
    explanationText: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      answerText: PropTypes.string.isRequired,
      correct: PropTypes.bool.isRequired,
    })),
  }))
}
export function QuestionPage(
  {questionList=[]}
){
  //const params = useParams();
  //const questionId = params.questionId;
  const [questionNum, setQuestionNum] = useState(0);
  const [isNextNumber, setNextNumber] = useState(true);
  
  function handleNext(){
    let nextQuestion = questionNum + 1;
    // check the question number to be less than the max
    // number of questions.
    nextQuestion = (nextQuestion <= quizLength-1) 
    ? nextQuestion 
    : quizLength-1;
    setQuestionNum(nextQuestion);
  }
  function handlePrev(){
    let nextQuestion = questionNum - 1;
    // check the question number to be less than the max
    // number of questions.
    nextQuestion = (nextQuestion < 0) ? 0 : nextQuestion;
    setQuestionNum(nextQuestion);
  }


  return(
    <>
    <h2>{questionList[questionNum].questionText}</h2>
    <Button
      type="button"
      id="btnPrev"
      name="btnPrev"
      onClick={handlePrev}
    >Prev</Button>

    <Button
      type="button"
      id="btnNext"
      name="btnNext"
      onClick={handleNext}
    >Next</Button>
    </>
  )
}


