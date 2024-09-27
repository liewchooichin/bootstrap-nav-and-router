import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useReducer, useState } from "react";
import { quizLength } from "./quizData";
import Button from "react-bootstrap/Button";
import { questionPageReducers } from "./questionPageReducers";

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
  const [questionNum, questionNumDispatch] = 
    useReducer(questionPageReducers, 0);
  const [isNextNumber, setNextNumber] = useState(true);
  
  function handleNext(){
    questionNumDispatch({
      type: "next",
      questionNum: questionNum,
    })
  }
  function handlePrev(){
    questionNumDispatch({
      type: "prev",
      questionNum: questionNum,
    })
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


