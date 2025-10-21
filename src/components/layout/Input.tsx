import * as React from 'react';
import Box from '@mui/material/Box';
import { filledInputClasses } from '@mui/material/FilledInput';
import { inputBaseClasses } from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';

export default function Input() {
    const handleSubmit = () => {
        console.log('hej')
    };

    return (
        <form action={handleSubmit}>
            <input type='text' name='message' placeholder='Nazwa' />
            <Button style={ { padding:'0', minHeight:'100%', maxWidth: '50px', border:'' } } variant="outlined">DODAJ</Button>
        </form>    
    );
}