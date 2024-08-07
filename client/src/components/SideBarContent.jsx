import { useState } from 'react';
import { Button, List, ListItem, Box, styled } from '@mui/material';
import ComposeMail from './ComposeMail';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import { CreateOutlined } from '@mui/icons-material';
import { NavLink, useParams } from 'react-router-dom';
import { routes } from '../routes/routes';

const Container = styled(Box)({
    padding: 8,
    '& > ul': {
        padding: '10px 0 0 5px',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer',
        '& > a' : {
            textDecoration: 'none',
            color: 'inherit'
        }
    },
    '& > ul > a li > svg': {
        marginRight: 20
    }
})

const ComposeButton = styled(Button)`
    background: white;
    color: #001d35;
    border-radius: 16px;
    padding: 15px;
    min-width: 140px;
    text-transform: none;
      &:hover {
        background: rgba(255, 255, 255, 0.7);
    }
`

const SideBarContent = () => {

    const [openDialog, setOpenDialog] = useState(false);

    const { type } = useParams();

    const onComposeClick = () => {
        setOpenDialog(true);
    }


    return (
        <Container>
            <ComposeButton onClick={() => onComposeClick()}>
                <CreateOutlined style={{ marginRight: 10 }} />Generate
            </ComposeButton>
            <List>
                {
                    SIDEBAR_DATA.map((data, index) => (

                        <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                            <ListItem style={ type === data.name.toLowerCase() ? {
                                backgroundColor: 'black',
                                borderRadius: '0 16px 16px 0'
                            } : {}}><data.icon fontSize="small" />{data.title}</ListItem>
                        </NavLink>
                       
                    ))
                }
            </List>
            <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
        </Container>
    )
}

export default SideBarContent;









