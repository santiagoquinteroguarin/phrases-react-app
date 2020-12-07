import React from 'react';
import styled from '@emotion/styled';

const ContainerQuote = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #FFF;
    max-width: 800px;
    margin: 0 15px;
    margin-top: 22rem;
    
    @media (max-width: 400px) {
        margin-top: 18rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: #000000;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Quote = ({phrase}) => {

    const {quote, author} = phrase;

    return (
        <ContainerQuote>
            <h1>{quote}</h1>
            <p>{author}</p>
        </ContainerQuote>
    );
}

export default Quote;