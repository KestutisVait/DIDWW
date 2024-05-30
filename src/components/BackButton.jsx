import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 175px;
`;

const StyledButton = styled.div`
    background-color: #176BBC;
    color: white;
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    text-align: center;
    width: fit-content;
    padding: 0.3rem 1rem;
    box-shadow: inset 0 0px 10px rgb(23, 107, 188, 0.3);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #669ed2;
        // filter: brightness(1.2);
    }
`;
const Shadow = styled.div`
    width:85%;
    height: 5px;
    background-color: #176BBC;
    filter: blur(7px);
    z-index: -1;
    margin-top: -0.2rem;
`;

const Button = (props) => {

    const navigate = useNavigate();

    return (
        <Wrapper>
            <StyledButton onClick={() => {
                navigate(-1);
                props.onClick();    
            }}>
                Back to country list
            </StyledButton>
            <Shadow></Shadow>
        </Wrapper>
    )
}

export default Button