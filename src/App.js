import './App.css'
import { useEffect, useState } from 'react'
import styled  from 'styled-components'
import { useParams, Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    width: ${props => props.width || 'calc(1186px + 255px)'};
    background-color: white;
    // margin: 0 auto;
    transition: 0.3s;
    `;
    const Main = styled.section`
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    // flex-wrap: nowrap;
`;
const Title = styled.h3`
    padding: 20px;
    height: 72px;
`;

const App = () => {

    const [countryName, setCountryName] = useState()
    const [mainWidth, setMainWidth] = useState("calc(1186px + 255px)")

    const handleCountryName = (name) => {
        setCountryName(name)
    }

    const handleResize = () => {
        const element = document.getElementById('viewport');
        const viewportWidth = element.offsetWidth;
        const newWidth = viewportWidth === 1441 ? `${viewportWidth - 437}px` : `${viewportWidth + 437}px`;
        setMainWidth(newWidth);
    }

    return (
        <Wrapper id="viewport" width={mainWidth}>
            <Sidebar />
            <Main >
                <Title>Browse {countryName ? countryName : "Countries"}</Title>
                <Outlet context={{handleCountryName, handleResize}} />
            </Main>
        </Wrapper>

    )
}

export default App