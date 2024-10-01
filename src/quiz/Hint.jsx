import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('Custom accordian!'),
  );

  return (
    <button
      type="button"
      style={{ borderColor: 'darkgrey' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

Hint.propTypes = {
  showHint: PropTypes.bool.isRequired,
  hintText: PropTypes.string.isRequired,
  explanationText: PropTypes.string.isRequired
}
/**
 * showHint: true, then show "Hint".
 * showHint: false, then show "Explanation".
 * 
 */
export function Hint({showHint, hintText, explanationText}){
  return (
    <Accordion>
      <Card>
        <Card.Header className="d-flex justify-content-center">
          <CustomToggle eventKey="0">
            {showHint && (<span className="text-info">⚡ Hint</span>)}
            {!showHint && (<span className="text-success">✨ Explanation</span>)}
            </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {showHint && (<>{hintText}</>)}
            {!showHint && (<>{explanationText}</>)}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}