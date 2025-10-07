import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

interface ItemProps {
    id: number;
    data: {
        name : string;
        buy_date : string;
        toeat_date : string | null;
        category : string;
    }
};

export const Item = ( { id, data } : ItemProps ) => {
    console.log()
    return (
        <ListItem style={ { width: '90%' } }>
            <ListItemButton sx={ { backgroundColor: '#FCB53B' } }>NAZWA: {data.name}  WAŻNE DO: {data.toeat_date} ZAKUPIONO: {data.buy_date}</ListItemButton>
        </ListItem>
    );
};

// data={data}