import { useState } from 'react';
import { Button, List, ListItem, Box, styled } from '@mui/material';
import ComposeMail from './ComposeMail';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import { CreateOutlined } from '@mui/icons-material';
// import { NavLink, useParams } from 'react-router-dom';
// import { routes } from '../routes/routes';

const Container = styled(Box)({
    padding: 8,
    '& > ul': {
        padding: '10px 0 0 5px',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer'
    },
    '& > ul > li > svg': {
        marginRight: 20
    }
})

const ComposeButton = styled(Button)`
    background: grey;
    color: #001d35;
    border-radius: 16px;
    padding: 15px;
    min-width: 140px;
    text-transform: none;
`

const SideBarContent = () => {

    const [openDialog, setOpenDialog] = useState(false);

    const onComposeClick = () => {
        setOpenDialog(true);
    }


    return (
        <Container>
            <ComposeButton onClick={() => onComposeClick()}>
                <CreateOutlined style={{ marginRight: 10 }} />Compose
            </ComposeButton>
            <List>
                {
                    SIDEBAR_DATA.map((data, index) => (
                        
                            <ListItem key={index}>
                                <data.icon fontSize="small" padding-left='20px'/>{data.title}
                            </ListItem>
                       
                    ))
                }
            </List>
            <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
        </Container>
    )
}

export default SideBarContent;