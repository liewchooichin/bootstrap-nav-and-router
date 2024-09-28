import Stack from "react-bootstrap/Stack";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useReducer, useState } from "react";
import { quizLength } from "./quizData";
import Button from "react-bootstrap/Button";
import { questionPageReducers } from "./questionPageReducers";
import { AnswerSection } from "./AnswerSection";
import { hasAnsweredReducer } from "./hasAnsweredReducer";
import { initialAnswerList } from "./answerStateStructure";
import { answerStateReducer } from "./answerStateReducer";
import { Hint } from "./Hint.jsx";

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
  const [answerStateList, answerStateDispatch] =
    useReducer(answerStateReducer, initialAnswerList);  

  function handleNext(){
    questionNumDispatch({
      type: "next",
      questionNum: questionNum,
    });
  }
  function handlePrev(){
    questionNumDispatch({
      type: "prev",
      questionNum: questionNum,
    });
  }

  // Get the current question according to 
  // the number.
  const questionItem = questionList[questionNum];
  const answerState = answerStateList[questionNum];

  // if no answer is selected, show Hint.
  // if any answer is selected, show Explanation.
  let hintSection;
  if(!answerState.hasBeenAnswered){
    hintSection = (
      <>
      <p>Hint</p>
      </>
    )
  } else {
    hintSection = (
      <>
      <p>✨  Explanation</p>
      </>
    )
  }

  return(
    <>
    <h2>{questionItem.questionText}</h2>
    <AnswerSection 
      questionItem={questionItem}
      answerStateList={answerStateList}
      answerStateDispatch={answerStateDispatch}
    ></AnswerSection>
      <Hint 
        showHint={!answerState.hasBeenAnswered}
        hintText={questionItem.hintText}
        explanationText={questionItem.explanationText}
      ></Hint>
    <Stack direction="horizontal" gap={3}>
    <Button className="mt-2"
      type="button"
      id="btnPrev"
      name="btnPrev"
      onClick={handlePrev}
    >Prev</Button>

    <Button className="mt-2"
      type="button"
      id="btnNext"
      name="btnNext"
      onClick={handleNext}
    >Next</Button>
    </Stack>
    </>
  )
}


