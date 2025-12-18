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