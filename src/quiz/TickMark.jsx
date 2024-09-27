
import PropTypes from "prop-types";
import { useState } from "react";


TickMark.propTypes = {
  answerItem: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    answerText: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired,
  })
)}
export function TickMark({answerItem}){

  // The answer item will have a field "correct".
  let tickMark;
  if(answerItem.correct){
    tickMark = (<p>Correct</p>);
  }
  else {
    tickMark = (<p>Wrong</p>);
  }
  return(
    <>
    {tickMark}
    </>
  )
}