import PropTypes from "prop-types";
import { useReducer, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { quizData } from "./quizData";
import { hasAnsweredReducer } from "./hasAnsweredReducer";
import { TickMark } from "./TickMark";


AnswerSection.propTypes = {
  questionItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    questionText: PropTypes.string.isRequired,
    hintText: PropTypes.string.isRequired,
    explanationText: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      answerText: PropTypes.string.isRequired,
      correct: PropTypes.bool.isRequired,
    }))
  }),
  hasAnswered: PropTypes.bool.isRequired,
  hasAnsweredDispatch: PropTypes.func.isRequired,
}
export function AnswerSection({
  questionItem,
  hasAnswered,
  hasAnsweredDispatch,
}){
  // If it is a new question, clear the checked
  // of the checkboxes or radios.
  const [isNewQuestion, setIsNewQuestion] = useState(true);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);

  // isNewQuestion depends on the questionItem.id.
  useEffect(()=>{
    //const newId = questionItem.id;
    // if the current question id is different
    // from the state id, then set the question as new.
    if(currentQuestionId !== questionItem.id){
      setIsNewQuestion(true);
      //setCurrentQuestionId(newId);
    } else {
      setIsNewQuestion(false);
    }

  }, [questionItem, /* currentQuestionId */])

  // IMPORTANT: Name must be the same for 
  // the same checkbox or radio group. However,
  // id of the input field MUST be unique.
  const answerList = questionItem.answers;
  const questionId = questionItem.id;

  // if any answer is selected, dispatch the
  // hasAnswered to the parent component.
  // The parent component will show the explanation.
  function handleAnswerChange(e){
    const answerSelected = e.target.checked;
    hasAnsweredDispatch({
      type: "answer_selected",
      answerSelected: answerSelected,
    });
  }

  // If the question has been answered, show
  // the tick mark.
  let tickMark;
  if(hasAnswered){
    tickMark = (<TickMark answerItem={null}></TickMark>);
  } else {
    tickMark = (<></>);
  }

  return(
    <>
    <ListGroup>
    <Form>
    <Form.Group>
    {
      answerList.map((a) => (
      <ListGroup.Item key={a.id}>
      <Form.Check
        key={`answer_${questionItem.id}_${a.id}`}
        type="radio"
        id={`radio${questionId}-${a.id}`}
        name={`radio${questionId}`}
        label={`${a.answerText} ${a.correct}`}
        value={a.correct}
        onChange={(e)=>(handleAnswerChange(e))}
      ></Form.Check>
      {hasAnswered && <TickMark answerItem={a}></TickMark>}
      </ListGroup.Item>
    ))}
    </Form.Group>
    </Form>
    </ListGroup>
    </>
  )
}