// Activity - Add a random quote generator


// 1. Create an axios instance for quote API
// 2. Create a getQuote function in the component
// 3. Display the quote at the top
// 4. Use useEffect to load the quote on the top of the page.
// 5. Add a button to allow the user to get a new quote

// Docs: https://dummyjson.com/docs/quotes

import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const BASE_URL = "https://dummyjson.com/";
const url = "quotes/random";
const quoteApi = axios.create({baseURL: BASE_URL});


export function Quote(){

  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getQuote(){
    try{
    const response = await quoteApi.get(url);
    console.log("quote ", response.data);
    //setQuote(`${response.data.quote} -- ${response.data.author}`)
    setQuote(response.data);
    }
    catch (error){
      console.error(error.message);
    }
    finally{
      // reset the loading
      setIsLoading(false);
      console.log("Request completed -- one product item.");
    }
  }

  // This is also working.
  async function getData(){
    const response = await axios({
      method: "GET",
      baseURL: BASE_URL,
      url: url,
    });
    setQuote(response.data);
  }

  useEffect(()=>{
    let ignore = false;
    if(!ignore){
      try{
        // both methods of axios are working
        //getQuote();
        getData();
      }
      catch(error){
        console.error(error);
      }
      finally{
        console.log("Quote request completed.");
      }
    }
    // clean up
    return (()=>{ignore=true;})
  }, [])

  function handleNewQuote(e){
    getData();
  }

  return(
  <div className="d-block justify-content-center">
    <h1>
      Random quotation from 
      <a href="https://dummyjson.com/" alt="DummyJSON">DummyJSON</a>
    </h1>

    <p>The random image is from
       <a href="https://picsum.photos" alt="Picsum photos">Picsum.photos</a>
    </p>

    <div className="d-flex flex-column align-items-center">
    <Card style={{ width: '36rem' }} >
      <Card.Img variant="top" src="https://picsum.photos/400/300" />
      <Card.Body>
        <Card.Title>By {quote.author}</Card.Title>
        <Card.Text>
          {quote.quote}
        </Card.Text>
        <Button 
          variant="primary"
          onClick={(e)=>{handleNewQuote(e)}}
        >Get a new quote
        </Button>
      </Card.Body>
    </Card>
    </div>
  </div>
  )
}