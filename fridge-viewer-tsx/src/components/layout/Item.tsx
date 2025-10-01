import styled from 'styled-components';
import Field from './field';

const ItemDiv = styled.div`
    height: 100px;
    width: 50%;
    border: solid; 
    border-radius: 30px;
`

export const Item = ({ id, data }:any) => {
    console.log(data)
    return (
        <ItemDiv>
            <Field data={data}></Field>
        </ItemDiv>
    );
};

//