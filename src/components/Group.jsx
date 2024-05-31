import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react'
import styled  from 'styled-components'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    padding-top: 20px;
`;

const ItemsWrapper = styled(Wrapper)`
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    gap: 10px;
`;
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // width: 50px;
    // height: 50px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 15px rgb(106, 137, 167, 0.3);
    padding: 20px 40px;    
`;


const Group = (props) => {

    // const [group, setGroup] = useState({});


    const config = {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Api-Key': 'v92uf0kt3egjonxu2ffa6vf7btrxb3am'
        }
      };

    // useEffect(() => {

    //     const getGroup = () => {
    //         Axios.get(`https://sandbox-api.didww.com/v3/did_groups/${props.group_id}`, config)
    //             .then( response => {
    //                 console.log(response.data.data.attributes.area_name);
    //                 setGroup(response.data.data)
    //             })   
    //         }
    //     const timer = setTimeout(getGroup, 1000);
    //     return () => clearTimeout(timer);
    // }, [ props.group_id ])

    // useEffect(() => {
    //     console.log(props.group.relationships.stock_keeping_units.links.self);
    //     const linkUri = props.group.relationships.stock_keeping_units.links.related;
    //     Axios.get(linkUri, config)
    //         .then( response => console.log(response.data) )
    // }, [])

    // useEffect(() => {
    //     console.log(props.group_id);
    //     // console.log(props.group.relationships.stock_keeping_units.links.self);
    //     // const linkUri = props.group.relationships.stock_keeping_units.links.related;
    //     Axios.get(`https://sandbox-api.didww.com/v3/available_dids `, config)
    //         .then( response => console.log(response.data) )
    // }, [])


    

    return (
        <Wrapper>
            {props.group && <h4>{props.group.attributes.area_name}</h4>}
            <ItemsWrapper>
                {Array(15).fill(null).map((_, index) => 
                    <Item key={index}>
                        <h1>{props.group.attributes.prefix}</h1>
                        <>{props.group.attributes.area_name}</>
                    </Item>
                )}
            </ItemsWrapper>
        </Wrapper>
    )
}

export default Group
