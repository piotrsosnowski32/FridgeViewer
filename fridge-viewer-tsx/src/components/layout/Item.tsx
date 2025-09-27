import styled from 'styled-components';

const ItemDiv = styled.div`
    background-color: aqua;
    height: 100px;
    width: 100%;
`

export const Item = ({ id, name }:any) => {
    return (
        <ItemDiv>{name}</ItemDiv>
    );
};