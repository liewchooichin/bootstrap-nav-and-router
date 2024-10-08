import PropTypes from "prop-types";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { TickMark } from "./TickMark";
import Stack from "react-bootstrap/Stack";

AnswerSection.propTypes = {
  questionItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    questionType: PropTypes.string.isRequired,
    questionText: PropTypes.string.isRequired,
    hintText: PropTypes.string.isRequired,
    explanationText: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      answerText: PropTypes.string.isRequired,
      correct: PropTypes.bool.isRequired,
    }))
  }),
  answerStateList: PropTypes.arrayOf(PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    hasBeenAnswered: PropTypes.bool.isRequired,
    answerId: PropTypes.number.isRequired,
  })),
  answerStateDispatch: PropTypes.func,
}
export function AnswerSection({
  questionItem,
  answerStateList, answerStateDispatch
}){
  // show a tick mark for correct or wrong answer.
  const [isShowTickMark, setIsShowTickMark] = useState(false);
  // IMPORTANT: Name must be the same for 
  // the same checkbox or radio group. However,
  // id of the input field MUST be unique.
  const answerList = questionItem.answers;
  const answerState = answerStateList.find((a)=>(
    a.questionId===questionItem.id
  ));

  // if any answer is selected, dispatch the
  // hasAnswered to the parent component.
  // The parent component will show the explanation.
  function handleAnswerChange(e, answerItem){
    // show a tick mark to the answer
    setIsShowTickMark(true);
    // update the state of the answer
    answerStateDispatch({
      type: "answer_selected",
      questionId: questionItem.id,
      hasBeenAnswered: e.target.checked,
      answerId: answerItem.id,
    });
  }

  // ((questionItem.questionType==="single")&&(answerState.answerId===a.id))
  return(
    <>
    <ListGroup>
    <Form>
    <Form.Group>
    {
      answerList.map((a) => (
      <ListGroup.Item key={a.id}>
      <Stack direction="horizontal" gap={3}>
      <Form.Check
        key={`answer_${questionItem.id}_${a.id}`}
        type="radio"
        id={`radio${questionItem.id}-${a.id}`}
        name={`radio${questionItem.id}`}
        label={`${a.answerText}`}
        value={a.correct}
        checked={answerState.hasBeenAnswered && 
          (answerState.answerId===a.id)}
        onChange={(e)=>(handleAnswerChange(e, a))}
      ></Form.Check>
      { (isShowTickMark && answerState.hasBeenAnswered && 
        (answerState.answerId===a.id)) &&
        <TickMark answerItem={a}></TickMark>
      }
      </Stack>
      </ListGroup.Item>
    ))}
    </Form.Group>
    </Form>
    </ListGroup>
    </>
  )
}