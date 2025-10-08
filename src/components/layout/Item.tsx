import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { format } from 'date-fns';
import { useState } from 'react';
import { useEffect } from 'react';

interface ItemProps {
    id: number;
    data: {
        name : string;
        buy_date : string | null;
        toeat_date : string;
        category : string;
    }
};


export const Item = ( { id, data } : ItemProps ) => {
    const [innerStyle, setInnerStyle] = useState('#b0eeadff');
    const [borderStyle, setborderStyle] = useState('solid #1dee12ff');

    const today = new Date().valueOf(); 
    const toEatDate = new Date(data.toeat_date).valueOf();
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
                    <span>{data.name}</span>
                    <span>zakupiono: {data.buy_date}</span>
                </div>
                <div style = { { display: 'flex', flexDirection: 'column' } }> 
                    {data.toeat_date}
                    <span>Do końca: {difference}</span>
                </div>              
             </ListItemButton>
        </ListItem>
    );
};


// data={data} ZAKUPIONO: {data.buy_date} <p style={ { margin:'0' } }>{CalculateDays(data.toeat_date)}{CalculateDays(data.toeat_date)}</p>