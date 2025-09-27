import "../../assets/mainFrame.css";
import styled from 'styled-components';
import { Item } from "../layout/Item";

const MainFrameDiv = styled.div`
    display: flex;
    flex-direction: column;

`;
const items = [
    {'id':0, 'name': 'marchewka','buy_date':'2025-09-27', 'toeat_date': null, 'category': 'warzywa'},
    {'id':1, 'name': 'kurczak','buy_date':'2025-09-26', 'toeat_date': '2025-09-30', 'category': 'mieso'},
    {'id':2, 'name': 'skyr','buy_date':'2025-09-24', 'toeat_date': '2025-10-10', 'category': 'nabial'}
];

export default function MainFrame() {
    return (
        <MainFrameDiv>
                {items.map(( { id, name } ) => (
                    <div>
                        <Item id={id} name={name}/>
                    </div>
                ))}
        </MainFrameDiv>
    )

};


// item => <li>{item.name}</li>