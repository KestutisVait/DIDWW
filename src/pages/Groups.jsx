import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react'
import styled  from 'styled-components'
import { useParams, useOutletContext } from 'react-router-dom'
import Group from '../components/Group'
import BackButton from '../components/BackButton';
import ResizeButton from '../components/ResizeButton';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    padding-top: 20px;
    border-top: 1px solid #d2d2d2;
`;
const Groups = (props) => {
    const { handleCountryName, handleResize } = useOutletContext()
    const country_id = useParams().country

    const [groups, setGroups] = useState([]);

    const headers = {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Api-Key': ''// api key here
        }
      };

    useEffect(() => {
        Axios.get(`https://sandbox-api.didww.com/v3/countries/${country_id}`, headers)
            .then( response => {
                handleCountryName(response.data.data.attributes.name)
                Axios.get(`https://sandbox-api.didww.com/v3/did_groups?filter[country.id]=${country_id}`, headers)
                    .then( response => {
                        const groupList = [];
                        const groups = response.data.data;
                        groups.forEach(group => {
                            groupList.push(group)
                        })
                        setGroups(groupList)
                    }
                )
            })
    }, [])

    return (
        <Wrapper>
            <ResizeButton onClick={() => handleResize()}/>
            <BackButton onClick={() => handleResize()}/>
            {groups.length > 0 && groups.map((group, index) => <Group key={index} group={group} />)}
            {/* {groups.length > 0 && <Group group={groups[0]} />} */}
        </Wrapper>
    )
}

export default Groups
