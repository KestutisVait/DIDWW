import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react'
import styled  from 'styled-components'
import { useNavigate } from 'react-router-dom'

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
    grid-template-columns: repeat(5,175px);
    grid-auto-rows: 19px;
    gap: 20px 40px;
    margin: 10px 0;
`;
const StyledLink = styled.p`
    text-decoration: none;
    color: #176BBC;
    // padding: 0.5rem 0 ;
    margin: 0;
    width: 100%;
    line-height: 19px;
    cursor: pointer;
    &:hover {
        color: #95b9da;
    }
`;
const Country = () => {
    const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
    const config = {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Api-Key': 'v92uf0kt3egjonxu2ffa6vf7btrxb3am' 
        }
      };

    useEffect(() => {
          Axios.get('https://sandbox-api.didww.com/v3/countries ', config)
            .then ( response => {
                const countryList = [];
                const countries = response.data.data;
                countries.forEach(country => {
                    countryList.push({"name": country.attributes.name, "id": country.id});

                });
                setCountries(countryList);
            } )
    }, [])

    return (
        <Wrapper>
            <Subtitle>Select a country to view available DID groups </Subtitle>
            <CountrysTable >
                {countries.length > 0 && countries.map((country, index )=> country.name === "Lithuania" && <StyledLink onClick={() => navigate(`/${country.id}`)} key={index}>{country.name}</StyledLink>)}
                {countries.length > 0 && countries.map((country, index )=> country.name !== "Lithuania" && <StyledLink key={index}>{country.name}</StyledLink>)}
            </CountrysTable>
        </Wrapper>
    )
}

export default Country
