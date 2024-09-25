import { useRouteError } from "react-router-dom";
import Container from "react-bootstrap/Container";
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
    </Container>
  );
}