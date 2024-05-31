import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top: 22px;
    left: 500px;
    // transform: translateX(-50%);
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
    z-index: 2;
    &:hover {
        background-color: #ea8a7f;
        // filter: brightness(1.2);
    }
`;
const Shadow = styled.div`
    width: 73%;
    height: 8px;
    background-color: #EF6656;
    filter: blur(10px);
    z-index: 1;
    margin-top: -0.3rem;
`;

const Button = (props) => {

    return (
        <Wrapper>
            <StyledButton onClick={() => props.onClick() }>
                Resize viewport
            </StyledButton>
            <Shadow></Shadow>
        </Wrapper>
    )
}

export default Button
