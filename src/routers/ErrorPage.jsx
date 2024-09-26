import { useRouteError } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
/**
 * Error page
 * 
 */

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <h1>An unexpected error has occurred.</h1>
      
      <h2>
        <i>Error status: {error.statusText}</i>
        <br />
        <i>Error message: {error.message}</i>
      </h2>

      <Link to="/"><h2>Back to Home</h2></Link>
    </Container>
  );
}