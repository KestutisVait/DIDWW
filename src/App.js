import './App.css'
import { useEffect, useState } from 'react'
import styled  from 'styled-components'
import { useParams, Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import ResizeButton from './components/ResizeButton';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
`;
const Main = styled.section`
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    min-width: 1146px;
`;
const Title = styled.h3`
    padding: 20px;
    height: 72px;
`;

const App = () => {

    const [countryName, setCountryName] = useState()
    const [showRsize, setShowRsize] = useState(false)

    const handleCountryName = (name) => {
        setCountryName(name)
    }
    const handleShowResize = () => {
        setShowRsize(!showRsize)
    }
    const handleResize = () => {
        console.log('handleResize');
        const viewport = document.getElementById('viewport');
        viewport.style.width = '500px'

    };

    return (
        <Wrapper>
            <Sidebar />
            <Main id="viewport">
                {/* {showRsize && <ResizeButton />} */}
                {showRsize && <ResizeButton onClick={handleResize}/>}
                <Title>Browse {countryName ? countryName : "Countries"}</Title>
                <Outlet context={{handleCountryName, handleShowResize}} />
            </Main>
        </Wrapper>

    )
}

export default App