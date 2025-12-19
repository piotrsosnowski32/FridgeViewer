import { Item } from "../layout/Item.tsx";
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import product from '../../services/product.tsx';
import { useEffect, useState } from "react";
import ItemProps from "../layout/Item.tsx";
import AddButton from "../layout/AddButton.tsx";


export default function MainFrame() {
    const [items, setItems] = useState<ItemProps[]>([]);
      const [blurred, setBlurred] = useState(false);

    useEffect(() => {
        product.getProducts()
            .then(data => setItems(data));
    }, []);

    const handleClick = () => {

    };

    return (
        <Container style={ { display:"flex", flexDirection:'column', backgroundColor: '#e9ddb6ff', margin:0, padding:0, maxWidth: '100%', height: "100vh" } }>
            <header style={ { height:'5%', backgroundColor:"#272727", color:'white' } }>FRIDGE VIEWER</header>

            <div style={{height:"80%",filter: blurred ? "blur(4px)" : "none"}}> 

                <Container sx={ {  padding:0 } }>
                    <List style={ { height:"100%", display: "flex", flexDirection: "column", alignItems: 'center', padding:0 } }>
                        {!items || items?.length === 0 ? <div>Loading...</div> :
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
            
            </div>

            <div style={{ display:"flex", justifyContent:"flex-end", height:"10%" }}>
                <AddButton onActivate={() => setBlurred(prev => !prev)} />  
            </div>    

            <footer style={ { height:'5%', width: '100%', position:'absolute',  left: 0, bottom: 0, backgroundColor:"#272727", color:'white'  } }>&reg; TEST</footer>

        </Container>
    )

};

