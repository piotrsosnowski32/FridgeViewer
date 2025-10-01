import styled from 'styled-components';
import { Item } from "../layout/Item";
import Header from "./header";
import Footer from "./footer";

const MainFrameDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: grey;
`;

const items = [
    {'id':0, 'name': 'marchewka','buy_date':'2025-09-27', 'toeat_date': null, 'category': 'warzywa'},
    {'id':1, 'name': 'kurczak','buy_date':'2025-09-26', 'toeat_date': '2025-09-30', 'category': 'mieso'},
    {'id':2, 'name': 'skyr','buy_date':'2025-09-24', 'toeat_date': '2025-10-10', 'category': 'nabial'}
];

export default function MainFrame() {
    return (
        <div>
            <Header></Header>
            <MainFrameDiv>
                    {items.map(( { id, name, buy_date, toeat_date, category } ) => (
                            <Item key={id} data={ { name, buy_date, toeat_date, category } }/>
                    ))}
            </MainFrameDiv>
            <Footer></Footer>
        </div>
    )

};


// item => <li>{item.name}</li>