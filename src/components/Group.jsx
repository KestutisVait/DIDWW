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
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 15px rgb(106, 137, 167, 0.3);
    
`;


const Group = (props) => {

    const [group, setGroup] = useState({});


    const config = {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Api-Key': 'v92uf0kt3egjonxu2ffa6vf7btrxb3am'
        }
      };

    useEffect(() => {
                Axios.get(`https://sandbox-api.didww.com/v3/did_groups/${props.group_id}`, config)
                    .then( response => {
                        console.log(response.data.data.attributes.area_name);
                        setGroup(response.data.data)
                    }
                     )
    }, [])


    return (
        <Wrapper>
            {group.attributes && <h4>{group.attributes.area_name}</h4>}
            <ItemsWrapper>
                { Array(15).fill(null).map((_, index) => <Item key={index}>{index + 1}</Item>) }

            </ItemsWrapper>
        </Wrapper>
    )
}

export default Group
