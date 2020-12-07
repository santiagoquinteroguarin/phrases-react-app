import React from 'react';
import styled from '@emotion/styled';

// ?1.
const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

// ?2.
const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFFFFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;

  &:hover {
    cursor: pointer;
  }
`;

function App() {

  // ?3.
  const queryAPI = () => {
    const API = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const data = API.then(response => response.json());
    data.then(response => console.log(response))
  }

  // const queryAPI = async () => {
  //   const API = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   const data = await API.json();
  // }

  return (
    <Container>
      <Button
        onClick={queryAPI}
      >
        Obtener Frase
      </Button>
    </Container>
  );
}

export default App;
