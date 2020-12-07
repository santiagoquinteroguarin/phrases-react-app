import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Quote from './components/Quote';

// ?1.
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

// ?2.
const Button = styled.button`
  background-size: 300px;
  font-family: Arial,Helvetica,sans-serif;
  color: #FFFFFF;
  margin: 2rem 1rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: #007D35;
  box-shadow: 1px 1px 6px 0px black;

  &:hover {
    cursor: pointer;
  }
`;

function App() {

  const [phrase, setSavedQuote] = useState({});

  // ?3.
  const queryAPI = () => {
    const API = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const data = API.then(response => response.json());
    data.then(response => setSavedQuote(response[0]));
  }

  // const queryAPI = async () => {
  //   const API = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   const data = await API.json();
  //   setSavedQuote(data[0])
  // }

  useEffect(() => {
    queryAPI();
  }, []);

  return (
    <Container>
      <Quote
        phrase={phrase}
      />

      <Button
        onClick={queryAPI}
      >
        Obtener Frase
      </Button>
    </Container>
  );
}

export default App;
