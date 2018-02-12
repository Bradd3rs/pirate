import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const Content = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Boat = () => (
    <Wrapper>
        <Content>Boat</Content>
    </Wrapper>
);

export default Boat;

const Button = styled.button`
    font-size: 1.2em;
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-bottom: 3px solid purple;
    text-align: center;
    color: white;
    background-color: rebeccapurple;
    transform: translateY(0);
    transition: transform .2s, border-bottom .2s;
    
    &:disabled {
        opacity: .5;
        pointer-events: none;
    }

    &:active {
        border-bottom: 0;
        transform: translateY(3px);
    }

    &:focus {
        outline: 0;
    }
`;