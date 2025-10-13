import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { format } from 'date-fns';
import { useState } from 'react';
import { useEffect } from 'react';

interface ItemProps {
    id: number;
    name : string;
    purchase_date : string | null;
    expiry_date : string;
    category : string;

};

export default ItemProps;

export const Item = ( { id, name, purchase_date, expiry_date, category } : ItemProps ) => {
    const [innerStyle, setInnerStyle] = useState('#b0eeadff');
    const [borderStyle, setborderStyle] = useState('solid #1dee12ff');

    const today = new Date().valueOf(); 
    const toEatDate = new Date(expiry_date).valueOf();
    const difference = Math.ceil((toEatDate - today) / (1000 * 3600 * 24));

    useEffect(() => {
        if (difference < 2 && difference > 0) {
                setInnerStyle('#eec58fff');
                setborderStyle('solid #ff950aff');
        } else if (difference < 0) {
                setInnerStyle('#f7b8b8ff');
                setborderStyle('solid #f70000ff');
        }
    }, [difference])

    return (
        <ListItem style={ { width: '90%', borderRadius: '10px' } }>
            <ListItemButton sx={ { backgroundColor: innerStyle, border: borderStyle , borderRadius: '10px', display:'flex', justifyContent:'space-between' } }>
                <div style = { { display: 'flex', flexDirection: 'column' } }>
                    <span>{name}</span>
                    <span>zakupiono: {purchase_date}</span>
                </div>
                <div style = { { display: 'flex', flexDirection: 'column' } }> 
                    {expiry_date}
                    <span>Do końca: {difference}</span>
                </div>              
             </ListItemButton>
        </ListItem>
    );
};


//
// data={data} ZAKUPIONO: {data.buy_date} <p style={ { margin:'0' } }>{CalculateDays(data.toeat_date)}{CalculateDays(data.toeat_date)}</p>