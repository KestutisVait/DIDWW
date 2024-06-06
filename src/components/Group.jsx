import React from 'react';
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
    width: 150px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 15px rgb(106, 137, 167, 0.3);
    padding: 20px 40px;    
`;

const Group = (props) => {

    return (
        <Wrapper>
            {props.group && <h4>{props.group.attributes.area_name}</h4>}
            <ItemsWrapper>
                {Array(8).fill(null).map((_, index) => 
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
