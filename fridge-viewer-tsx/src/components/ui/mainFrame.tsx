import { Item } from "../layout/Item";
import List from '@mui/material/List';
import Container from '@mui/material/Container';


export default function MainFrame() {
    const items = [
        {'id':0, 'name': 'marchewka','buy_date':'2025-09-27', 'toeat_date': null, 'category': 'warzywa'},
        {'id':1, 'name': 'kurczak','buy_date':'2025-09-26', 'toeat_date': '2025-09-30', 'category': 'mieso'},
        {'id':2, 'name': 'skyr','buy_date':'2025-09-24', 'toeat_date': '2025-10-10', 'category': 'nabial'}
    ];
    
    return (
        <Container style={ { display:"flex", flexDirection:'column', backgroundColor: '#FFE797', width: '100%', margin:0, maxWidth:'3000px', minHeight:'3000px', padding:0 } }>

            <header style={ { height:'5%', backgroundColor:"#272727", width: '100%', color:'white' } }>FRIDGE VIEWER</header>

            <Container sx={ { height:"90%", padding:0, width: '50%' } }>
                <List style={ { height:"100%", display: "flex", flexDirection: "column", alignItems: 'center' } }>
                    {items.map(( { id, name, buy_date, toeat_date, category } ) => (
                        <Item key={id} id={id} data={ { name, buy_date, toeat_date, category } }/>
                    ))}
                </List>
            </Container>

            <footer style={ { height:'5%', position:'fixed',  left: 0, bottom: 0, backgroundColor:"#272727", width: '100%', color:'white'  } }>&reg; TEST</footer>

        </Container>
    )

};
/*


*/