import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SvgIcon from '@mui/material/SvgIcon';
import product from '../../services/product.tsx';
import { useState, useEffect } from 'react';

export default function BasicMenu({ }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [response, setResponse] = useState({});


    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = () => {

    };

    const handleDelete = () => {
        product.updateProducts()
               .then((data) => console.log(data));

        product.getProducts().then((data) => setResponse(data))       
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <SvgIcon>
                    {/* credit: cog icon from https://heroicons.com */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                        />
                    </svg>
                </SvgIcon>
            </Button>
            

            <Menu
                id="basic-menu"
                data-id={id}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                    'aria-labelledby': 'basic-button',
                    },
                }}
            >
                <MenuItem data-id={id} onClick={handleEdit}>Edytuj</MenuItem>
                <MenuItem data-id={id} onClick={handleDelete}>Usuń</MenuItem>
            </Menu>
        </div>
    );
}