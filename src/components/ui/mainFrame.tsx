import { Item } from "../layout/Item.tsx";
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import product from '../../services/product.tsx';
import { useEffect, useState } from "react";
import ItemProps from "../layout/Item.tsx";


export default function MainFrame() {
    const [items, setItems] = useState<ItemProps[]>([]);

    useEffect(() => {
        product.getProducts()
            .then(data => setItems(data));
    }, []);

    return (
        <Container style={ { display:"flex", flexDirection:'column', backgroundColor: '#e9ddb6ff', width: '100%', margin:0, maxWidth:'3000px', minHeight:'3000px', padding:0 } }>

            <header style={ { height:'5%', backgroundColor:"#272727", width: '100%', color:'white' } }>FRIDGE VIEWER</header>

            <Container sx={ { height:"90%", padding:0, width: '50%' } }>
                <List style={ { height:"100%", display: "flex", flexDirection: "column", alignItems: 'center', padding:0 } }>
                    {!items || items?.length===0 ? <div>Loading...</div> :
                        items.map(( { id, name, purchase_date, expiry_date, category } ) => ( 
                            <Item 
                                key={id} 
                                id={id} 
                                name={ name } 
                                purchase_date={purchase_date} 
                                expiry_date={expiry_date} 
                                category={category} /> ))
                    }
                </List>
            </Container>

            <footer style={ { height:'5%', position:'fixed',  left: 0, bottom: 0, backgroundColor:"#272727", width: '100%', color:'white'  } }>&reg; TEST</footer>

        </Container>
    )

};

