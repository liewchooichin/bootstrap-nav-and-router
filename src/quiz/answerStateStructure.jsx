/**Get the length of the question list.
 * Then, initialize an answer state array
 * according to the size of the question.
 */
import { quizData, quizLength } from "./quizData";

export const initialAnswerState = {
  questionId: -1,
  hasBeenAnswered: false,
  answerId: -1,
}

/**Initialize the answer list.
 * Initialize the answer.questionId to the
 * id of the questionList.
 */
export const initialAnswerList = [];

for(let i=0; i<quizLength; i++){
  console.log(`${i}: ${quizData[i].id}`);
  initialAnswerList.push({...initialAnswerState, 
    questionId: quizData[i].id});
  
  console.log(`${i}: ${initialAnswerList[i].id} - ${quizData[i].id}`);
}