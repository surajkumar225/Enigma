import { useState } from 'react';
import { Dialog, styled, Typography, Box, InputBase, TextField, Button } from '@mui/material'; 
import { Close, DeleteOutline } from '@mui/icons-material';


const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0',
}

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background: #f2f6fc;
    & > p {
        font-size: 14px;
        font-weight: 500;
    }
`;


const RecipientWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    & > div {
        font-size: 14px;
        border-bottom: 1px solid #F5F5F5;
        margin-top: 10px;
    }
`;

const Footer = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
`;

const SendButton = styled(Button)`
    background: #0B57D0;
    color: #fff;
    font-weight: 500;
    text-transform: none;
    border-radius: 18px;
    width: 100px;
`


const ComposeMail = ({openDialog, setOpenDialog}) => {
    const [data, setData] = useState({});

    const config = {
        Host: 'smtp.elasticemail.com',
        Username: "surkdawson252506@yopmail.com",
        Password: "EF01A6636E2963BCBA1C41C65F759AE4413D",
        Port: 2525,
    }

    const onValueChange = (e) => {
            setData({...data, [e.target.name]: e.target.value});
            console.log(data);
    }

    const closeComposeMail = (e) => {
        e.preventDefault();
        setOpenDialog(false);
    }


    const sendMail = (e) => {
        e.preventDefault();
        if(window.Email){
            window.Email.send({
            ...config,
            To : data.to,
            From : "surajk2542@gmail.com",
            Subject : data.subject,
            Body : data.body
           }).then(
             message => alert(message)
            );
        }
        setOpenDialog(false);
    }


  return (
    <div>
      <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
        <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
        </Header>

      <RecipientWrapper>
            <InputBase placeholder='Recipients' name="to" onChange={(e) => onValueChange(e)} />
            <InputBase placeholder='Subject' name="subject" onChange={(e) => onValueChange(e)} />
     </RecipientWrapper>

     <TextField 
                multiline
                rows={18}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                name="body"
                onChange={(e) => onValueChange(e)}
            />
        
            <Footer>
                <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
                <DeleteOutline onClick={() => setOpenDialog(false)}/>
            </Footer>
   
      </Dialog>
    </div>
  )
}


export default ComposeMail
