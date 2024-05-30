import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react'
import styled  from 'styled-components'
import { Link, useOutletContext } from 'react-router-dom'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #d2d2d2;
    margin: 0 20px; 
`;
const Subtitle = styled.h4`
    padding: 20px 0;
    height: 52px;
`;

const CountrysTable = styled.div`
    display: grid;
    grid-template-columns: repeat(5,220px);
    gap: 0 40px;
    margin: 10px 0;
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #176BBC;
    padding: 0.5rem 0 ;
    width: 100%;
    &:hover {
        color:  #95b9da;
    }


`;
const Country = () => {

    const { handleShowResize } = useOutletContext()

    const [countrys, setCountrys] = useState([]);

    const config = {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Api-Key': 'v92uf0kt3egjonxu2ffa6vf7btrxb3am' 
        }
      };

    useEffect(() => {
          Axios.get('https://sandbox-api.didww.com/v3/countries ', config)
            // .then( response => console.log(response.data) )
            .then ( response => {
                const countryList = [];
                const countries = response.data.data;
                countries.forEach(country => {
                    countryList.push({"name": country.attributes.name, "id": country.id});

                });
                setCountrys(countryList);
            } )
    }, [])


    return (
        <Wrapper>
            <Subtitle>Select a country to view available DID groups </Subtitle>
            <CountrysTable >
                {countrys.length > 0 && countrys.map((country, index )=> <StyledLink  to={`/${country.id}`} key={index} onClick={() => handleShowResize()}>{country.name}</StyledLink>)}
            </CountrysTable>
        </Wrapper>
    )
}

export default Country
