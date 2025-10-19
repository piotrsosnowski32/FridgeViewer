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
        <FormGroup>
            <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            style={ { alignItems: 'center', display: 'flex' } }
            >
            <TextField
                id="outlined-suffix-shrink"
                label="Nazwa"
                variant="outlined"
                slotProps={{
                htmlInput: {
                sx: { textAlign: 'right' },
                },
                input: {
                    endAdornment: (
                    <InputAdornment
                        position="end"
                        sx={{
                        alignSelf: 'flex-end',
                        margin: 0,
                        marginBottom: '5px',
                        opacity: 0,
                        pointerEvents: 'none',
                        [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                            opacity: 1,
                        },
                        }}
                    >

                    </InputAdornment>
                    ),
                },
                }}
            />
            <TextField
                id="filled-suffix-shrink"
                label="Kategoria"
                variant="outlined"
                slotProps={{
                htmlInput: {
                sx: { textAlign: 'right' },
                },
                input: {
                    endAdornment: (
                    <InputAdornment
                        position="end"
                        sx={{
                        alignSelf: 'flex-end',
                        margin: 0,
                        marginBottom: '5px',
                        opacity: 0,
                        pointerEvents: 'none',
                        [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                            opacity: 1,
                        },
                        }}
                    >

                    </InputAdornment>
                    ),
                },
                }}
            />
            <TextField
                id="standard-suffix-shrink"
                label="Data zakupu"
                variant="outlined"
                slotProps={{
                htmlInput: {
                    sx: { textAlign: 'right' },
                },
                input: {
                    endAdornment: (
                    <InputAdornment
                        position="end"
                        sx={{
                        alignSelf: 'flex-end',
                        margin: 0,
                        marginBottom: '5px',
                        opacity: 0,
                        pointerEvents: 'none',
                        [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                            opacity: 1,
                        },
                        }}
                    >

                    </InputAdornment>
                    ),
                },
                }}
            />
            <TextField
                id="standard-suffix-shrink"
                label="Termin ważności"
                variant="outlined"
                slotProps={{
                htmlInput: {
                    sx: { textAlign: 'right' },
                },
                input: {
                    endAdornment: (
                    <InputAdornment
                        position="end"
                        sx={{
                        alignSelf: 'flex-end',
                        margin: 0,
                        marginBottom: '5px',
                        opacity: 0,
                        pointerEvents: 'none',
                        [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                            opacity: 1,
                        },
                        }}
                    >

                    </InputAdornment>
                    ),
                },
                }}
            />
            <Button style={ { padding:'0', minHeight:'100%', maxWidth: '50px', border:'' } } variant="outlined">DODAJ</Button>
            </Box>   
        </FormGroup>
    );
}