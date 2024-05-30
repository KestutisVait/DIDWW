import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
position: fixed;
    top: 20px;
    left:50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 175px;
`;

const StyledButton = styled.div`
    background-color: #EF6656;
    color: white;
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    text-align: center;
    width: fit-content;
    padding: 0.3rem 1rem;
    box-shadow: inset 0 0px 10px #EF6656);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #ea8a7f;
        // filter: brightness(1.2);
    }
`;
const Shadow = styled.div`
    width: 70%;
    height: 5px;
    background-color: #EF6656;
    filter: blur(7px);
    z-index: -1;
    margin-top: -0.2rem;
`;

const Button = (props) => {


    return (
        <Wrapper>
            <StyledButton  onClick={() => props.onClick()}>
                Resize viewport
            </StyledButton>
            <Shadow></Shadow>
        </Wrapper>
    )
}

export default Button
